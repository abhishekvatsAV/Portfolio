import React from "react";

import { NavbarProps, sections } from "../types";

const Navbar: React.FC<NavbarProps> = ({ section, setSection }) => {
  const handleClick = (section: sections) => {
    setSection(section);
  };
  return (
    <nav className="nav-bar" aria-label="Primary navigation">
      <span className="eyebrow">Captain's log / 2026</span>
      <div className="flex gap-1">
        {(["about", "projects", "resume"] as sections[]).map((item) => (
          <button
            className={`nav-link ${section === item ? "active" : ""}`}
            onClick={() => handleClick(item)}
            key={item}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
