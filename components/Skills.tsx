import React from "react";
import Image, { StaticImageData } from "next/image";

// Import existing skill icons
import cpp from "@/public/cpp.png";
import html from "@/public/html.png";
import css from "@/public/css.png";
import typescript from "@/public/typescript.png";
import python from "@/public/python.png";
import react from "@/public/react.webp";
import next from "@/public/next.png";
import redis from "@/public/redis.png";
import firebase from "@/public/firebase.png";
import ubuntu from "@/public/ubuntu.png";
import docker from "@/public/docker.png";
import api from "@/public/api.webp";
import github from "@/public/github.png";
import mongodb from "@/public/mongodb.png";

// Import AI/ML skill icons (assuming they are placed in /public)
import langchain from "@/public/langchain.svg";
import langgraph from "@/public/langgraph.png";
import fastapi from "@/public/fastapi.png";
import llamaindex from "@/public/llamaindex.jpeg";
import openai from "@/public/openai.png";
import pandas from "@/public/pandas.png";
import numpy from "@/public/numpy.webp";
import pytorch from "@/public/pytorch.avif";
import ml from "@/public/ml.webp"; // Machine Learning icon

const skillsData = {
  "Languages & Frameworks": [
    // { name: "C++", icon: cpp },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "TypeScript", icon: typescript },
    { name: "Python", icon: python },
    { name: "React", icon: react },
    { name: "Next.js", icon: next },
  ],
  "Databases & DevOps": [
    { name: "MongoDB", icon: mongodb },
    { name: "PostgreSQL", icon: api }, // Using API icon as a placeholder for PostgreSQL
    { name: "Redis", icon: redis },
    { name: "Firebase", icon: firebase },
    { name: "Ubuntu", icon: ubuntu },
    { name: "Docker", icon: docker },
    { name: "Kubernetes", icon: api }, // Using API icon as a placeholder for Kubernetes
    { name: "GitHub", icon: github },
  ],
  "AI Engineering": [
    { name: "LangChain", icon: langchain },
    { name: "LangGraph", icon: langgraph },
    { name: "FastAPI", icon: fastapi },
    { name: "LlamaIndex", icon: llamaindex },
    { name: "OpenAI", icon: openai },
    { name: "Pandas", icon: pandas },
    { name: "NumPy", icon: numpy },
    { name: "PyTorch", icon: pytorch },
    { name: "Machine Learning", icon: ml },
    { name: "RAG", icon: api }, // Using API icon as a placeholder for RAG
  ],
};

const SkillCard = ({ name, icon }: { name: string; icon: StaticImageData }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200">
    <Image
      src={icon}
      alt={name}
      width={64}
      height={64}
      className="object-contain"
    />
    <p className="mt-2 text-sm font-semibold text-gray-700">{name}</p>
  </div>
);

const Skills = () => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Skills
        </h1>
        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
