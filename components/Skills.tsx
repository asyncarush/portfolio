import React from "react";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faCss3,
  faDocker,
  faDropbox,
  faGolang,
  faHtml5,
  faJava,
  faPython,
  faReact,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="flex flex-col items-center mt-24">
      <h1 className="text-4xl font-bold underline">Skills</h1>
      <div className="mt-8 flex gap-3 font-bold flex-wrap flex-col px-12 md:flex-row w-full md:w-[1200px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "tween",
            damping: 50,
            duration: 0.1,
          }}
        >
          <Badge variant={"default"} className="badgeSkills">
            Core C++
          </Badge>
        </motion.div>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faPython} /> Python
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faJava} />
          TypeScript/JavaScript
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faHtml5} />
          HTML
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faCss3} />
          CSS
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faGolang} />
          Go
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faReact} />
          ReactJS
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          {/* <FontAwesomeIcon icon={} /> */}
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
          <FontAwesomeIcon icon={faGithub} />
          Github & Git
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          RESTful APIs
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faDocker} />
          Docker
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faUbuntu} />
          Linux
        </Badge>
        <Badge variant={"default"} className="badgeSkills">
          <FontAwesomeIcon icon={faCodepen} />
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
