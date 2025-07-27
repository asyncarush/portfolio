import React from "react";
import Projects from "./Projects";

function Populars() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-500 mb-2 tracking-wider">
            PORTFOLIO
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Featured <span className="text-violet-600">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-gray-300 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work and contributions in software development and AI engineering.
          </p>
        </div>
        
        <div className="p-4">
          <Projects />
        </div>
      </div>
    </section>
  );
}

export default Populars;
