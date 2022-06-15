import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <footer>
      <h4>Made by Andrew Banagas</h4>
      <div className="icons-display">
        <IconContext.Provider value={{ size: "2em" }}>
          <a
            href="https://github.com/drew990"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-banagas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </IconContext.Provider>
      </div>
    </footer>
  );
}
