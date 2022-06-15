import React from "react";
import NoteTaker from "../images/Git-Projects/NoteTaker.png";
import workDay from "../images/Git-Projects/workDay.png";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Portfolio() {
  return (
    <div className="component-container">
      <h1>Github Projects</h1>
      <div className="grid-display">
        <div className="grid-container">
          <a
            href="https://github.com/drew990/note-taker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article
              className="github-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${NoteTaker})   `,
              }}
            >
              <div className="github-display">
                <IconContext.Provider value={{ size: "2em" }}>
                  <BsGithub />
                </IconContext.Provider>
                <h4>Note Taker</h4>
              </div>
            </article>
          </a>
        </div>
        <div className="grid-container">
          <a
            href="https://github.com/drew990/WorkDayCalender"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article
              className="github-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${workDay})   `,
              }}
            >
              <div className="github-display">
                <IconContext.Provider value={{ size: "2em" }}>
                  <BsGithub />
                </IconContext.Provider>
                <h4>Work Day Calender</h4>
              </div>
            </article>
          </a>
        </div>
        <div className="grid-container"></div>
        <div className="grid-container">
          <h4>Test</h4>
        </div>
        <div className="grid-container">
          <h4>Test</h4>
        </div>
        <div className="grid-container">
          <h4>Test</h4>
        </div>
      </div>
    </div>
  );
}
