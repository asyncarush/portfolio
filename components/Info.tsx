"use client";

import Image from "next/image";
import React from "react";
import Avatar from "@/public/avatar.jpg";
import { TypeAnimation } from "react-type-animation";
import Social from "./Social";

function Info() {
  return (
    <div className="flex flex-col w-full items-center border-1 border-black">
      <div className="relative mt-4">
        <Image
          src={Avatar}
          width={250}
          height={250}
          alt="Avatar"
          placeholder="blur"
          loading="lazy"
          className="rounded-full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] border-4 border-zinc-100"
        />
      </div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I am Arush Sharma",
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          "I am Software Engineer",
          4000,
          "I am Full Stack Developer",
          4000,
        ]}
        wrapper="span"
        speed={50}
        className="text-2xl md:text-4xl font-bold relative top-4"
        repeat={Infinity}
      />

      <p
        className={`px-2 text-md md:text-lg w-full md:w-[1000px] text-center mt-12`}
      >
        I am a passionate developer with <b>3+ years</b> of unprofessional
        experience in project development. My expertise lies in both{" "}
        <b>frontend and backend development</b>. I specialize in creating
        dynamic user interfaces using React.js and building robust backend
        services with Node.js. Whether it’s crafting elegant frontend components
        or designing efficient APIs, I thrive on solving complex problems and
        delivering seamless user experiences.
      </p>

      <Social />
    </div>
  );
}

export default Info;
