import Image from "next/image";
import Link from "next/link";

import { getAllArticles } from "~/app/blog/helpers";
import { Cal, MotionDiv } from "~/app/use-client";
import { BlogCard } from "~/components/blog-card";
import { ExperienceCard, experiences } from "~/components/experiences";
import { Header } from "~/components/header";
import ProfileImg from "../public/images/savageShitbox.png";

export default async function Home() {
  const posts = await getAllArticles();

  return (
    <>
      <Header />

      <section id="hero">
        <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
              scale: [1, 2, 2, 3, 1],
              borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
              duration: 2.5,
            }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333333]" />
            <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#333333]" />
            <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#333333]" />
            <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-accent-500" />
            <div className="absolute mt-52 h-[800px] w-[800px] rounded-full border border-[#333333]" />
          </MotionDiv>

          <Image
            src={ProfileImg}
            priority
            height={64}
            width={144}
            alt="Profile picture"
            className="relative mx-auto h-26 w-177"
          />
          <div className="z-20">
            <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-400">
              Jobsite Management 
            </h2>
            <h1 className="px-10 text-3xl font-semibold md:text-4xl lg:text-6xl">
              T SAVAGE, LLC
            </h1>

            <div className="pt-5">
              {["about", "experience", "blog"].map((section) => (
                <Link href={`#${section}`} key={section}>
                  <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-400 transition-all hover:border-accent-500/40 hover:text-accent-500/40">
                    {section}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-12 overflow-hidden py-24 px-4 text-left md:px-10"
        >
          <h2 className="font-cal text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px]">
            About
          </h2>

          <div className="flex flex-col items-center md:flex-row">
            <MotionDiv
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="md:md-0 relative -mb-20 h-56 w-56 flex-shrink-0 md:h-72 md:w-72 xl:h-[500px] xl:w-[500px]"
            >
              <Image
                src="/images/savageShitbox.png"
                width="700"
                height="300"
                alt="me on vacation"
                className="rounded-full object-cover md:rounded-lg"
              />
            </MotionDiv>

            <div className="space-y-10 px-0 py-24 md:px-10 md:py-0">
              <p className="text-base">
                We are a Philadelphia based construction C Corp. We are licensed and insured for residential and commercial construction. Founded in 2010 by Terrance Savage, we have been working our way thru the paces to master eachphase of construction and construction management..
              </p>
              <p className="text-base">
                Wanna Chat?{" "}
                <a
                  href="#final-words"
                  className="underline decoration-accent-500 decoration-2 underline-offset-4"
                >
                  Schedule a Time to Talk
                </a>
              </p>
            </div>
          </div>
        </MotionDiv>
      </section>

      <section id="blog">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-12 overflow-hidden py-24 px-4 text-left md:px-10"
        >
          <h3 className="font-cal text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px]">
            Latest posts
          </h3>

          <div className="absolute top-1/3 left-0 h-[500px] w-full -skew-y-12 bg-accent-500/10" />

          <div className="flex flex-col gap-8">
            <div className="z-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, idx) => (
                <Link key={idx} href={post.slug}>
                  <BlogCard {...post} />
                </Link>
              ))}
            </div>
          </div>
        </MotionDiv>
      </section>

      <section id="experience">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-12 overflow-hidden py-24 px-4 text-left md:px-10"
        >
          <h3 className="font-cal text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px]">
            Recent Works
          </h3>
          <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent-500/80 md:p-10">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.title} {...experience} />
            ))}
          </div>
        </MotionDiv>
      </section>

      <section id="final-words">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-12 overflow-hidden py-24 px-4 text-left md:px-10"
        >
          <h3 className="font-cal text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px]">
            After:
          </h3>
          <ul className="list-disc space-y-4 px-4">
            <li className="text-base">
              If you like what you see and would like to learn more, please take a look at out work with the trade academies, {" "}
              <Link
                className="underline decoration-accent-500 decoration-2 underline-offset-4"
                href="https://homedepot.com"
              >
                Home Depot
              </Link>
              .
            </li>
            <li className="text-base">
              Our humble roots began in the heart of downtown as a sandwhich shop, then a scrapper come demo specialist, and my progression is this business you see today.{" "}
              <Link
                className="underline decoration-accent-500 decoration-2 underline-offset-4"
                href="https://github.com/juliusmarminge/jumr.dev"
              >
                GitHub
              </Link>
              .
            </li>
            <li className="text-base">
              If you need scalable work force now; punch this button.{" "}
              <Link
                className="underline decoration-accent-500 decoration-2 underline-offset-4"
                href="3d3ed3d.com"
              >
                Book
              </Link>
              .
            </li>
          </ul>
          <div className="w-full space-y-2 text-gray-400" id="calcom">
            <h4 className="text-center font-cal text-2xl tracking-wide">
              Wanna chat? Book my Cal!
            </h4>
            <Cal calLink="julius" className="w-full" />
          </div>
        </MotionDiv>
      </section>
    </>
  );
}
