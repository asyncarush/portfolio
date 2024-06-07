"use client";

import Image from "next/image";
import React from "react";
import Avatar from "@/public/avatar.jpg";
import { TypeAnimation } from "react-type-animation";
import Social from "./Social";
import scroll from "@/public/scroll.png";
import { motion } from "framer-motion";

function Info() {
  const sliderVarient: any = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        duration: 30,
        repeatType: "mirror",
      },
    },
  };

  const descVarient = {
    initial: {
      y: -50,
    },
    animate: {
      y: 0,
      transition: { type: "spring", stiffness: 100, delay: 2 },
    },
  };

  return (
    <div className="flex gap-6 overflow-hidden relative h-[calc(100vh_-_80px)] flex-col items-center">
      <div className="mt-8">
        <Image
          src={Avatar}
          width={300}
          height={300}
          alt="Avatar"
          placeholder="blur"
          loading="lazy"
          className="rounded-full border-4 border-zinc-100 shadow-[0px_3px_30px_0px_#44337a]"
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
        className="text-xl md:text-4xl font-bold relative top-4"
        repeat={Infinity}
      />

      <motion.p
        initial={{ y: -10 }}
        animate={{ y: 0, transition: { type: "spring", duration: 2 } }}
        className="px-2 z-[99999] text-md leading-6 md:text-2xl w-full md:w-[1400px] text-center mt-12"
      >
        I am a passionate developer with{" "}
        <b className="text-violet-800">3+ years</b> of unprofessional experience
        in project development. My expertise lies in both{" "}
        <b className="text-violet-800">frontend and backend development</b>. I
        specialize in creating dynamic user interfaces using React.js and
        building robust backend services with Node.js. Whether it’s crafting
        elegant frontend components or designing efficient APIs, I thrive on
        solving complex problems and delivering seamless user experiences.
      </motion.p>
      <Social />
      <motion.div
        className="relative"
        initial={{ y: -5 }}
        animate={{
          y: 0,
          transition: {
            ease: "linear",
            duration: 1,
            repeat: Infinity,
          },
        }}
      >
        <Image src={scroll} width={"40"} height={"40"} alt="scroll" />
      </motion.div>
      <motion.div
        variants={sliderVarient}
        initial="initial"
        animate="animate"
        className="absolute w-[100%] text-[50vh] text-violet-700/10  whitespace-nowrap bottom-[-180px]"
      >
        Coder YouTuber Influencer
      </motion.div>
    </div>
  );
}

export default Info;
