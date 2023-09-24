import React from "react";

import { NavbarProps, sections } from "../types";

const Navbar: React.FC<NavbarProps> = ({ section, setSection }) => {
  const handleClick = (section: sections) => {
    setSection(section);
  };
  return (
    <div className="flex w-full items-center justify-between px-5 py-2">
      <div
        className={`${
          section === "about" ? "text-green " : ""
        } cursor-pointer button-89 font-semibold`}
        onClick={() => handleClick("about")}
        role="button"
      >
        About
      </div>
      <div
        className={`${
          section === "projects" ? "text-green " : ""
        } cursor-pointer button-89 font-semibold`}
        onClick={() => handleClick("projects")}
        role="button"
      >
        Projects
      </div>
      <div
        className={`${
          section === "resume" ? "text-green " : ""
        } cursor-pointer button-89 font-semibold`}
        onClick={() => handleClick("resume")}
        role="button"
      >
        Resume
      </div>
    </div>
  );
};

export default Navbar;
