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
import Image from "next/image";
import cpp from "@/public/cpp.png";
import html from "@/public/html.png";
import css from "@/public/css.png";
import typescript from "@/public/typescript.png";
import go from "@/public/go.png";
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

function Skills() {
  return (
    <div className="flex flex-col items-center mt-24">
      <h1 className="text-4xl font-bold underline">Skills</h1>
      <div className="mt-8 items-center justify-center flex gap-8 flex-wrap flex-col px-12 md:flex-row w-full md:w-[1400px]">
        <Image src={cpp} alt="cpp" width="80" height="80" />
        <Image src={html} alt="html" width="80" height="80" />
        <Image src={css} alt="css" width="80" height="80" />
        <Image src={python} alt="python" width="80" height="80" />
        <Image src={typescript} alt="typescript" width="80" height="80" />
        <Image src={go} alt="go" width="80" height="80" />
        <Image src={react} alt="react" width="80" height="80" />
        <Image src={next} alt="next" width="80" height="80" />
        <Image src={redis} alt="redis" width="250" height="80" />
        <Image src={firebase} alt="firebase" width="80" height="80" />
        <Image src={ubuntu} alt="ubuntu" width="100" height="80" />
        <Image src={docker} alt="docker" width="80" height="80" />
        <Image src={github} alt="github" width="80" height="80" />
        <Image src={mongodb} alt="mongodb" width="80" height="80" />
        <Image src={api} alt="api" width="80" height="80" />
      </div>
    </div>
  );
}

export default Skills;
