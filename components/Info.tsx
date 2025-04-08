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
    <div className="h-[calc(100vh_-_80px)] relative flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="my-8">
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

      {/* Rotating pink blob behind text */}
      <div className="relative inline-block my-6">
        <div className="absolute -inset-2 bg-violet-200 rounded-full blur-xl opacity-30 animate-spin-slow" />
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Hi there! I'm a passionate Backend & DevOps Engineer with 2+ years of
          experience in building scalable systems and automating deployment
          pipelines.
        </p>
      </div>

      <p className="max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">
        I specialize in designing and implementing high-performance
        microservices, containerized applications, and cloud infrastructure. My
        approach combines technical expertise with a strong focus on best
        practices and security.
      </p>

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
        Coder
      </motion.div>
    </div>
  );
}

export default Info;
