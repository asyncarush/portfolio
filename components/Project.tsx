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
    <div className="rounded-md overflow-hidden hover:scale-105 duration-300 justify-between cursor-pointer w-[400px] h-[400px] mt-12 bg-slate-100 shadow-[0px_3px_30px_0px_#44337a] flex flex-col items-center gap-8">
      <div className="relative group overflow-hidden w-full h-[600px]">
        <Image
          src={mainImage}
          width={400}
          height={600}
          alt="makemates-image"
          className="transition-transform duration-300"
        />

        {/* Black gradient overlay from top (transparent) to bottom (black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

        {/* GitHub Icon */}
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <FaGithub className="text-white text-4xl hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
      <div>
        <p className="text-center">{desc}</p>
      </div>

      <div className="flex align-center justify-center flex-wrap gap-1 p-2">
        {techStack}
      </div>

      <div className="flex flex-col text-black gap-8 mb-4 text-xs h-[24px] align-center justify-center">
        <Link
          href={liveHref}
          className="p-3 rounded-3xl font-semibold font-white bg-gray-200"
          target="_blank"
        >
          <FontAwesomeIcon icon={faChrome} /> Open Live
        </Link>
      </div>
    </div>
  );
}
