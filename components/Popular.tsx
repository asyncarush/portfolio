import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import makematesThumbnail from "@/public/makematesThumbnail.png";
import chat from "@/public/chat.png";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChrome,
  faGit,
  faGithub,
  faWebAwesome,
} from "@fortawesome/free-brands-svg-icons";
function Populars() {
  return (
    <div className="flex flex-col w-full mt-24 items-center">
      <h1 className="text-4xl font-bold underline">Popular Projects</h1>

      <div className="flex md:flex-row flex-col items-center justify-between gap-10">
        <div className="rounded-2xl hover:scale-105 duration-500 justify-between cursor-pointer w-[400px] md:w-[600px] mt-12 p-8 bg-slate-100 shadow-[2px_2px_18px_3px_#276749] flex flex-col items-center gap-8">
          <div className="relative  md:w-[600px] h-auto">
            <Image
              src={makematesThumbnail}
              width="0"
              height="0"
              alt="makemates-image"
            />
          </div>
          <div>
            <p className="text-center">
              Makemates is a <b>social media application</b> built with Next.js,
              Node.js, and MySQL. It provides users with a seamless experience
              for sharing posts, following other users, and searching across the
              app. With advanced caching technology and robust security
              measures, Makemates ensures high performance and data protection.
              <br />
              <b>Open for Contibution</b>
            </p>
          </div>

          <div className="flex gap-8">
            <Link
              href="https://makemates-2024.vercel.app"
              className="bg-red-500 p-4 rounded-3xl text-white font-bold"
              target="_blank"
            >
              <FontAwesomeIcon icon={faChrome} /> Open Live Application
            </Link>

            <Link
              href="https://www.github.com/savagearush/"
              className="bg-black p-4 rounded-3xl text-white font-bold"
            >
              <FontAwesomeIcon icon={faGithub} /> Open GitHub
            </Link>
          </div>
        </div>

        <div className="rounded-2xl hover:scale-105 duration-500 justify-between cursor-pointer w-[400px] md:w-[600px] mt-12 p-8 bg-slate-100 shadow-[2px_2px_18px_3px_#276749] flex flex-col items-center gap-8">
          <div>
            <Image
              src={chat}
              width={"600"}
              height={"300"}
              alt="makemates-image"
            />
          </div>
          <div className="mt-4">
            <p className="text-center">
              CodeTonic is realtime chat application where you can chat with
              your friends, connect with them. I used ReactJS, firebase for
              creating whole applcation with all best practices. You can send
              photos to your friend, Online Status, and more. <br />{" "}
              <b>Open For Contribution</b>
            </p>
          </div>

          <div className="flex gap-8">
            <Link
              href="https://codetonic.netlify.app"
              className="bg-red-500 p-4 rounded-3xl text-white font-bold"
              target="_blank"
            >
              <FontAwesomeIcon icon={faChrome} /> Open Live Application
            </Link>

            <Link
              href="https://www.github.com/savagearush/"
              className="bg-black p-4 rounded-3xl text-white font-bold"
            >
              <FontAwesomeIcon icon={faGithub} /> Open GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Populars;
