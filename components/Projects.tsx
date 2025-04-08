import React, { useState } from "react";
import Project from "./Project";

import makematesThumbnail from "@/public/makematesThumbnail.png";
import chat from "@/public/chat.png";
import {
  FirebaseBadge,
  NextjsBadge,
  NodejsBadge,
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
      desc: "Makemates Social media website",
      liveHref: "https://makemates-2024.vercel.app/",
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
      mainImage: chat,
      desc: "Realtime Chat Application",
      liveHref: "https://codetonic.netlify.app/login",
      githubHref: "https://github.com/asyncarush/CodeTonic--Realtime-Chat-App",
      techStack: [
        <NextjsBadge key="nextjs" />,
        <TailwindBadge key="tailwind" />,
        <FirebaseBadge key="firebase" />,
        <TypescriptBadge key="ts" />,
      ],
    },
  ]);

  return (
    <div className="flex md:flex-row flex-col items-center mb-12 md:w-[1400px] justify-center gap-8">
      {/* Project Component */}

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
    </div>
  );
}
