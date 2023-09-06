import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { type Metadata } from "next";
import { globby } from "globby";
import { z } from "zod";

import { ogParams, strToFmtDate } from "~/app/og-image/zod-params";

export type Meta = Awaited<ReturnType<typeof readMeta>>;

/**
 * Read all files in the blog directory
 * Also adds some additional articles from other sources
 */
export async function getAllArticles(includeExternal = true) {
  const blogDir = join(process.cwd(), "app/blog");
  const filenames = await globby("**/*.mdx", {
    cwd: blogDir,
    absolute: false,
  });
  const articles = await Promise.all(
    filenames.map((file) => readMeta(blogDir, file)),
  );

  if (includeExternal) {
    // Articles from other sources
    articles.push({
      title: "Training New Help",
      date: "JANUARY 17, 2023",
      description:
        "We spend considerable time training new workers so they can safely deliver professional results. Our investment is not a small undertaking....",
      readingTime: 12,
      previewImg:
        "/images/savageShitbox.png",
      slug: "https://trpc.io/blog/tinyrpc-client",
    });
  }

  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Helper for blogpost metadata
 */
export function mdHelper(meta: Meta): Metadata {
  return {
    ...meta,
    openGraph: {
      images: [{ url: getOGLink(meta) }],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: getOGLink(meta) }],
    },
  };
}

/*******************************
 * INTERNALS
 *******************************/

const meta = z.object({
  title: z.string(),
  description: z.string(),
  date: strToFmtDate,
  updatedAt: strToFmtDate.optional(),
  previewImg: z.string(),
  tags: z.array(z.string()).optional(),
  readingTime: z.coerce.number(),
});

/** Read the frontmatter of the file */
async function readMeta(dir: string, file: string) {
  const raw = await readFile(join(dir, file), "utf8");

  const metadataRegex = /export const metadata = mdHelper\(({[\s\S]+?})\);/;
  const metadataMatch = raw.match(metadataRegex);

  const metadata = metadataMatch?.[1];
  const jsonified = metadata
    ?.replace(/(\w+):/g, '"$1":') // wrap keys in quotes
    .replace(/\n/g, "") // remove newlines
    .replace(/,}$/, "}"); // remove trailing comma
  const $meta = meta.parse(JSON.parse(jsonified ?? "{}"));
  const slug = "/blog/" + file.replace(/\page.mdx?$/, "");

  return { ...$meta, slug };
}

const getOGLink = (meta: Meta) =>
  "/og-image?" +
  ogParams.toSearchString({
    title: meta.title,
    description: meta.description,
    date: meta.date,
    readingTime: meta.readingTime,
    slug: meta.slug,
  });
