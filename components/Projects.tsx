import React, { useState } from "react";
import Project from "./Project";

import makematesThumbnail from "@/public/makematesThumbnail.png";
import chat from "@/public/chat.png";

export default function Projects() {
  const [allProject, setAllProject] = useState([
    {
      id: 1,
      mainImage: makematesThumbnail,
      desc: "Makemates Social media website",
      liveHref: "https://makemates-2024.vercel.app/",
      githubHref: "https://github.com/asyncarush/makemates",
    },
    {
      id: 2,
      mainImage: chat,
      desc: "Realtime Chat Application",
      liveHref: "https://codetonic.netlify.app/login",
      githubHref: "https://github.com/asyncarush/CodeTonic--Realtime-Chat-App",
    },
  ]);

  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-10">
      {/* Project Component */}

      {allProject.map((project) => (
        <Project
          key={project.id}
          mainImage={project.mainImage}
          desc={project.desc}
          liveHref={project.liveHref}
          githubHref={project.githubHref}
        />
      ))}
    </div>
  );
}
