"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Avatar from "@/public/avatar.jpg";
import Social from "./Social";
import { motion, useInView } from "framer-motion";
import { FiArrowDown, FiCode, FiServer, FiCpu } from "react-icons/fi";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandPython,
  TbBrandDocker,
} from "react-icons/tb";
import { SiKubernetes, SiAmazon, SiPostgresql } from "react-icons/si";

function Info() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen -mt-20 flex items-center bg-gradient-to-br from-gray-50 via-white to-violet-50 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="text-left">
            <motion.p
              variants={fadeInUp}
              className="text-sm font-medium text-violet-600 mb-4 inline-flex items-center gap-2 bg-violet-50 px-4 py-1.5 rounded-full"
            >
              <FiCode className="text-violet-500" /> Full-Stack Developer & AI
              Enthusiast
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Crafting Digital
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
            >
              I build high-performance backend systems and AI solutions that
              scale. Specializing in modern web technologies and cloud
              infrastructure.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <FiServer className="text-violet-500" />
                <span>Backend</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <FiCpu className="text-pink-500" />
                <span>AI/ML</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <FiServer className="text-blue-500" />
                <span>DevOps</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                Get in Touch
                <FiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                View Projects
              </button>
            </motion.div>
          </div>

          {/* Right Column - Avatar */}
          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

              {/* Avatar container with gradient border */}
              <div className="relative p-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src={Avatar}
                    alt="Arush - Backend & AI Engineer"
                    placeholder="blur"
                    fill
                    sizes="(max-width: 768px) 16rem, (max-width: 1024px) 18rem, 20rem"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-out"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech stack floating icons */}
      <div className="absolute bottom-8 left-0 w-full">
        <div className="flex justify-center gap-8 opacity-80">
          {[
            TbBrandNextjs,
            TbBrandTypescript,
            TbBrandPython,
            SiKubernetes,
            SiAmazon,
            TbBrandDocker,
            SiPostgresql,
          ].map((Icon, i) => (
            <motion.div
              key={i}
              className="text-gray-700 hover:text-violet-600 transition-colors"
              initial={{ y: 0 }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                },
              }}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
