import Image from "next/image";
import clsx from "clsx";
import { FaDatabase } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { type IconType } from "react-icons/lib";
import {
  SiCplusplus,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { MotionDiv } from "~/app/use-client";

export interface Experience {
  note?: string;
  img: string;
  title: string;
  subtitle: string;
  stackIcons?: IconType[];
  period: [string, string];
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    note: "Municipal Heavy",
    img: "/images/municipal.jpg",
    title: "Building Cities",
    subtitle: "Compliant, Economical, Safe",
    stackIcons: [SiPython, SiCplusplus, SiTypescript, GiProcessor, FaDatabase],
    period: ["2020", "present"],
    bullets: [
      "Hiway, Roads, and Bridges",
      "Schools, Jails, Emergency",
      "Airports and Utilities",
    ],
  },
  {
    note: "Residential Multifamily",
    img: "/images/apartments.jpg",
    title: "Residential Multifamily",
    subtitle: "Safe and effective multifamily construction service.",
    stackIcons: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiPrisma],
    period: ["Jun 22", "present"],
    bullets: [
      "Light & Medium Construction",
      "Osha and L&I Compliant",
      "Pre-construction, LEED, and 6 Sigma Certified."
    ],
  },
  {
    note: "Commercial Retail",
    img: "/images/fitout.jpg",
    title: "Retail & Commercial Spaces",
    subtitle: "Commercial Construction",
    stackIcons: [SiTypescript],
    period: ["Jul 22", "present"],
    bullets: [
      "Retail, Medical, Logistics, Manufacturing Facilities.",
      "Full suite service including plumbing, electrical, demo thru fine finish",
      "Construction services including pre-construction planning, project management, QA, TCO",
    ],
  },
];

export function ExperienceCard(props: Experience) {
  return (
    <article className="relative flex w-full flex-shrink-0 snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <MotionDiv
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative h-32 w-32 xl:h-[200px] xl:w-[200px]"
      >
        <Image
          src={props.img}
          fill
          alt=""
          className="object-cover object-center"
        />
      </MotionDiv>

      {props.note && (
        <div
          className={clsx(
            "absolute right-7 top-0 rounded-lg bg-accent-500 p-2 md:p-4",
            props.note === "Educaddtion" && "bg-sky-800",
            props.note === "Open Source" && "bg-red-900",
          )}
        >
          {props.note}
        </div>
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-medium md:text-4xl">{props.title}</h4>
        <p className="mt-1 text-lg font-bold md:text-2xl">{props.subtitle}</p>
        <div className="my-2 flex space-x-2">
          {props.stackIcons?.map((Icon, index) => (
            <Icon key={index} className="h-10 w-10" />
          ))}
        </div>

        <p className="py-5 text-sm uppercase text-gray-300 md:text-base">
          Start: {props.period[0]} | End: {props.period[1]}
        </p>

        <ul className="ml-5 list-disc space-y-4 text-base md:text-lg">
          {props.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
