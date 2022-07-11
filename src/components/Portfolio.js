import React from "react";
import NoteTaker from "../images/Git-Projects/NoteTaker.png";
import workDay from "../images/Git-Projects/workDay.png";
import Weather from "../images/Git-Projects/Weather.png";
import Josh from "../images/Git-Projects/JoslyneKeehmer.png";
import SocialMediaAPI from "../images/Git-Projects/SocialMediaAPI.png";
import Yummy from "../images/Git-Projects/Mern.png";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Portfolio() {
  return (
    <div className="component-container">
      <h1>Github Projects 👨‍💻</h1>
      <div className="row">
        <div className="column">
          <a
            href="https://drew-note-taker.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article
              className="github-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${NoteTaker})   `,
              }}
            >
              <a
                href="https://github.com/drew990/note-taker"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                <div className="github-display">
                  <IconContext.Provider
                    value={{ size: "2em", className: "github-hov" }}
                  >
                    <BsGithub />
                  </IconContext.Provider>

                  <h4>Note Taker</h4>
                </div>
              </a>
            </article>
          </a>
        </div>
        <div className="column">
          <a
            href="https://drew-note-taker.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article
              className="github-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${workDay})   `,
              }}
            >
              <a
                href="https://github.com/drew990/WorkDayCalender"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                <div className="github-display">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <BsGithub />
                  </IconContext.Provider>
                  <h4>Work Day Calender</h4>
                </div>
              </a>
            </article>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <a
            href="https://drew990.github.io/weather-website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article
              className="github-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${Weather})   `,
              }}
            >
              <a
                href="https://github.com/drew990/weather-website"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                <div className="github-display">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <BsGithub />
                  </IconContext.Provider>
                  <h4>Weather Website</h4>
                </div>
              </a>
            </article>
          </a>
        </div>
        <div className="column">
          <a
            href="https://www.joslynekeehmer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article
              className="github-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${Josh})   `,
              }}
            >
              <a
                href="https://github.com/drew990/joslyneportfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                <div className="github-display">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <BsGithub />
                  </IconContext.Provider>
                  <h4>Joslyne Portfolio</h4>
                </div>
              </a>
            </article>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <a
            href="https://github.com/drew990/Basic-Social-Media-API"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article
              className="github-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${SocialMediaAPI})   `,
              }}
            >
              <a
                href="https://github.com/drew990/Basic-Social-Media-API"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                <div className="github-display">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <BsGithub />
                  </IconContext.Provider>
                  <h4>Social Media API</h4>
                </div>
              </a>
            </article>
          </a>
        </div>
        <div className="column">
          <a
            href="https://blooming-escarpment-45652.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article
              className="github-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${Yummy})   `,
              }}
            >
              <a
                href="https://github.com/StephenWDickey/yummy-grocery/tree/readySubmit"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                <div className="github-display">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <BsGithub />
                  </IconContext.Provider>
                  <h4>Yummy Gsrocery</h4>
                </div>
              </a>
            </article>
          </a>
        </div>
      </div>
    </div>
  );
}
