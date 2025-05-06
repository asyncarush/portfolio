import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";

export default function Project({
  mainImage,
  desc,
  liveHref,
  githubHref,
  techStack,
}: {
  mainImage: StaticImageData;
  desc: string;
  liveHref: string;
  githubHref: string;
  techStack: ReactElement[];
}) {
  return (
    <div className="rounded-md overflow-hidden hover:scale-105 duration-300 justify-between cursor-pointer w-[400px] h-[500px] mt-12 bg-slate-100 shadow-[0px_3px_30px_0px_#44337a] flex flex-col items-center gap-8">
      <div className="relative flex group">
        <Image
          src={mainImage}
          width={400}
          height={600}
          alt="makemates-image"
          className="transition-transform duration-300"
        />

        {/* Black gradient overlay from top (transparent) to bottom (black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col gap-8 items-center justify-end pb-8">
          {/* GitHub Icon */}
          <div className="flex flex-col text-xs w-[150px] h-[24px] align-center justify-center hover:scale-105 duration-200">
            <Link
              href={githubHref}
              className="p-3 rounded-3xl font-semibold font-white bg-gray-200 flex gap-2 items-center justify-center"
              target="_blank"
            >
              <FaGithub /> Open Github
            </Link>
          </div>

          <div className="flex flex-col text-xs w-[150px] h-[24px] align-center justify-center hover:scale-105 duration-200">
            <Link
              href={liveHref}
              className="p-3 rounded-3xl font-semibold font-white bg-gray-200 flex items-center justify-center gap-2"
              target="_blank"
            >
              <FontAwesomeIcon icon={faChrome} /> Open Live
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-evenly border-red-500 h-[250px]">
        <div>
          <p className="p-3">{desc}</p>
        </div>
        <div className="flex align-center justify-center flex-wrap gap-1 p-2">
          {techStack}
        </div>
      </div>
    </div>
  );
}
