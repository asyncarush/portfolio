import React, { useState } from "react";
import Project from "./Project";

import makematesThumbnail from "@/public/makemates.jpeg";
import chat from "@/public/chat.png";
import impactgenine from "@/public/impactgenie.png";
import travelPlanner from "@/public/travel-planner.png";
import {
  FastAPIBadge,
  FirebaseBadge,
  LangChainBadge,
  MistralBadge,
  NextjsBadge,
  NodejsBadge,
  PythonBadge,
  RabbitMQBadge,
  TailwindBadge,
  TypescriptBadge,
  WebSocketBadge,
} from "./TechStackBadge";

export default function Projects() {
  const [allProject, setAllProject] = useState([
    {
      id: 1,
      mainImage: makematesThumbnail,
      desc: "MakeMates, an AI-powered social media platform that enhances user engagement through AI-generated content suggestions, real-time chat, and optimized post discovery.",
      liveHref: "https://makemates.asyncarush.com",
      githubHref: "https://github.com/asyncarush/makemates",
      techStack: [
        <NextjsBadge key="nextjs" />,
        <TailwindBadge key="tailwind" />,
        <FirebaseBadge key="firebase" />,
        <TypescriptBadge key="ts" />,
        <WebSocketBadge key="ws" />,
        <RabbitMQBadge key="rabbit" />,
        <NodejsBadge key="node" />,
      ],
    },
    {
      id: 2,
      mainImage: travelPlanner,
      desc: "AI Trip Planning Assistant - An intelligent travel planning assistant that helps you create personalized travel itineraries using AI. Simply describe your travel preferences, and the assistant will generate a detailed travel plan for you.",
      liveHref: "https://google.com",
      githubHref: "https://github.com/asyncarush/travel-planner-assistant",
      techStack: [
        <LangChainBadge key="langchain" />,
        <MistralBadge key="mistral" />,
        <PythonBadge key="python" />,
        <FastAPIBadge key="fastapi" />,
      ],
    },
    {
      id: 3,
      mainImage: impactgenine,
      desc: "Developed ImpactGenie, an AI-powered video management platform that enhances YouTube content creation by automating metadata generation.",
      liveHref: "https://impactgenie.asyncarush.com",
      githubHref: "https://github.com/asyncarush/impactgenie",
      techStack: [
        <NextjsBadge key="nextjs" />,
        <TailwindBadge key="tailwind" />,
        <FirebaseBadge key="firebase" />,
        <TypescriptBadge key="ts" />,
      ],
    },
  ]);

  return (
    <div className="flex md:flex-row flex-col items-center mb-12 md:w-[1320px] flex-wrap justify-center gap-8 ">
      {/* Project Component */}
      {/* <div className="flex md:flex-row flex-col items-center justify-start gap-8"> */}
      {allProject.map((project) => (
        <Project
          key={project.id}
          mainImage={project.mainImage}
          desc={project.desc}
          liveHref={project.liveHref}
          githubHref={project.githubHref}
          techStack={project.techStack}
        />
      ))}
      {/* </div> */}
    </div>
  );
}
