"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { videos } from "@/data/videos";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay, FaYoutube } from "react-icons/fa";

const YouTubePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            My YouTube Creations
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of tutorials and projects I&apos;ve shared with the
            community.
          </p>
          <a
            href="https://www.youtube.com/@codetonic_arush"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors"
          >
            <FaYoutube />
            Visit My Channel
          </a>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {videos.map((video) => (
            <motion.div key={video.id} variants={itemVariants}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition-transform hover:-translate-y-2 border border-gray-200 flex flex-col h-full">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaPlay className="text-white text-4xl" />
                    </div>
                  </div>
                </a>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-800 flex-grow">
                    {video.title}
                  </h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center bg-violet-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-violet-700 transition-colors self-start"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default YouTubePage;
