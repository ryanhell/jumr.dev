import { type NextPage } from "next";
import Head from "next/head";
import { AiOutlineHeart } from "react-icons/ai";
import { NextLink } from "../components/next-link";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head key="about">
        <title>About Me</title>
      </Head>
      <div className="p-8 card roundex-box bg-base-200">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="py-2">
          I am a Software Engineer and open source contributor living in Sweden. If
          you would like to support my work, I accept donations on GitHub Sponsor.
        </p>
        <NextLink
          href="https://github.com/sponsors/juliusmarminge"
          className="btn w-48 gap-2 normal-case group rounded-lg btn-accent"
        >
          <AiOutlineHeart className="text-lg group-hover:text-pink-500 group-hover:scale-125 transition-transform" />
          Sponsor me
        </NextLink>
      </div>
    </>
  );
};

export default AboutPage;
