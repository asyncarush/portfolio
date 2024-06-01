import React from "react";
import { Badge } from "@/components/ui/badge";

function Skills() {
  const allSkils = ["HTML", "CSS", "TypeScript"];
  //   Languages: C++, Python, JavaScript, Typescript, HTML, CSS, Go Lang
  //   Frontend Frameworks: ReactJS, NextJS
  //   Backend Frameworks: NodeJS, Express
  //   Database: MongoDB, Firebase, MySQL, Redis, PostgreSQL
  //   Others: Git & GitHub, RESTful APIs, OOPS, MVC, Docker
  //   Soft skills: Technical Communication, Technical leadership, Team player
  //   Tools: Linux, Visual Studio Code, Figma for Web Design
  return (
    <div className="flex flex-col w-full items-center mt-24">
      <h1 className="text-4xl font-bold underline">Skills</h1>
      <div className="mt-8 flex gap-3 font-bold flex-wrap w-[800px]">
        <Badge variant={"default"} className="badgeSkills">
          Core C++
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          Python
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          TypeScript/JavaScript
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          HTML
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          CSS
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          Go
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          ReactJS
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          NextJS
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          MongoDB
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          MySQL
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          Firebase
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          Redis
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          Github & Git
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          RESTful APIs
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          Docker
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          Linux
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          VS Code
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          Model View Controller
        </Badge>
      </div>
    </div>
  );
}

export default Skills;
