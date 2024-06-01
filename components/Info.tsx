"use client";

import Image from "next/image";
import React from "react";
import Avatar from "@/public/avatar.jpg";
import { TypeAnimation } from "react-type-animation";

function Info() {
  return (
    <div className="flex flex-col w-full items-center border-1 border-black">
      <div className="relative mt-4">
        <Image
          src={Avatar}
          sizes="50vw"
          alt="Avatar"
          placeholder="blur"
          loading="lazy"
          className="rounded-full shadow-xl border-4 border-zinc-100"
        />
      </div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I am Arush Sharma",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I am Software Enginner",
          1000,
          "I am Full Stack Developer",
          1000,
          "I am Introvert",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="text-4xl font-bold relative top-4"
        repeat={Infinity}
      />
    </div>
  );
}

export default Info;
