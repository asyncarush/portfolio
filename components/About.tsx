import React from "react";

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-pink-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8">About Me</h2>

      {/* Rotating pink blob behind text */}
      <div className="relative inline-block mb-6">
        <div className="absolute -inset-2 bg-pink-300 rounded-full blur-xl opacity-30 animate-spin-slow" />
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Hi there! I'm a passionate Backend & DevOps Engineer with 5+ years of
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
    </section>
  );
}
