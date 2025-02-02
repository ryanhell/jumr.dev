import { getAllArticles } from "~/app/blog/helpers";

const BASE_URL = "https://tsavagellc.com";

export default async function sitemap() {
  const blogPosts = (await getAllArticles(false)).map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.date,
  }));

  const routes = [""].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogPosts, ...routes];
}
