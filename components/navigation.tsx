import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { HiClipboardList, HiInboxIn } from "react-icons/hi";
import { MdOutlineHealthAndSafety, MdContactPhone, MdContactMail } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";

import { MotionDiv } from "~/app/use-client";

export const Header = (props: { animate?: boolean }) => {
  const { animate = true } = props;

  return (
    <header className="sticky top-0 z-50 mx-auto flex items-start justify-between bg-stone-800 p-1 pt-3 xl:items-center">
      <MotionDiv
        {...(animate && {
          initial: { opacity: 0, x: -500 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1.5 },
        })}
        className="flex items-center"
      >
        <Link href="/#hero">
          <FaHome
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Go home"
          />
        </Link>

        <a href="https://www.phila.gov/departments/department-of-licenses-and-inspections/permits-and-certificates/construction-and-repair-permits/">
          <HiClipboardList
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Get Permit"
          />
        </a>
        <a href="https://facebook.com/tsavagellc">
          <AiOutlineFacebook
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Facebook"
          />
        </a>
        <a href="/resources">
          <HiInboxIn
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Downloads"
          />
        </a>
        <a href="/makesafe">
          <MdOutlineHealthAndSafety
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Make Safes"
          />
        </a>
      </MotionDiv>

      <MotionDiv
        {...(animate && {
          initial: { opacity: 0, x: 500 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1.5 },
        })}
      >
        <div className="inline-flex">
          <Link
          href="/#final-words"
          className="group flex cursor-pointer items-center float-left"
        >
          <MdContactMail className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors group-hover:fill-gray-300" />
          <span className="hidden font-cal text-sm uppercase text-gray-400 group-hover:text-gray-300 md:inline-flex">
            eMail
          </span>
        </Link>
        <a href="tel:+12677709649
"
          className="group flex cursor-pointer items-center float-right"
        >
          <MdContactPhone className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors group-hover:fill-gray-300" />
          <span className="hidden font-cal text-sm uppercase text-gray-400 group-hover:text-gray-300 md:inline-flex">
            Call
          </span>
        </a>
        </div>
        <div className="small">
          <div className="space-x-1">
            <span className="border border-gray-300 rounded-full px-2 text-xs text-cyan-400 py-0.5">
              License number 
              PA 118494  
            </span>
          </div>
        </div>
      </MotionDiv>
     

    </header>
  );
};
