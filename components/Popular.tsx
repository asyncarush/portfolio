import React from "react";

import Projects from "./Projects";
function Populars() {
  return (
    <div className="flex flex-col w-full mt-24 items-center">
      <h1 className="text-4xl font-bold underline">Popular Projects</h1>
      <Projects />
    </div>
  );
}

export default Populars;
