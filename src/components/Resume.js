import React from "react";
import "../styles/form.css";
import ProfilePic from "../images/ProfilePic.png";
import {
  BsFillBriefcaseFill,
  BsFillHouseFill,
  BsFillGearFill,
  BsBriefcase,
  BsFillCalendarFill,
} from "react-icons/bs";
import { MdEmail, MdSchool } from "react-icons/md";
import { IconContext } from "react-icons";
// import resumeFile from "../files/AndrewBanagas.pdf";

function Resume() {
  return (
    <div>
      <section>
        <h1 style={{ textAlign: "center", margin: "2rem auto" }}>Resume</h1>

        <div className="resume-container">
          <aside className="resume-aside">
            <div className="resume-img-container">
              <img
                src={ProfilePic}
                alt="Profile Pic"
                className="resume-img"
                // style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className="resume-skills">
              <div>
                <BsFillBriefcaseFill />
                <p>Battery Service Provider</p>
              </div>
              <div>
                <BsFillHouseFill />
                <p>Whittier, CA</p>
              </div>
              <div>
                <MdEmail />
                <p>andrewbanagas40@gmail</p>
              </div>
            </div>
            <div className="divider" />
            <div className="resume-skills">
              <div>
                <BsFillGearFill />
                <h4>Skills</h4>
              </div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>JQuery</li>
                <li>MySQL</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>APIs</li>
              </ul>
            </div>
          </aside>
          <div className="resume-section">
            <section>
              <div className="resume-work">
                <div>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <BsBriefcase />
                  </IconContext.Provider>
                  <h2>Work Experience</h2>
                </div>
              </div>
              <div className="resume-work-history">
                <div>
                  <h4>Battery Service Provider / Hadley Tow</h4>
                </div>
                <div>
                  <BsFillCalendarFill />
                  <p>
                    Feb 2022 - <span className="current">Current</span>
                  </p>
                </div>
                <ul className="resume-work-para">
                  <li>
                    Provide services to members such as installing batteries,
                    changing tires, and unlocking cars so members can get their
                    keys again
                  </li>
                  <li>
                    Critically analyze the situation, as every car has its own
                    unique features
                  </li>
                  <li>
                    Tested batteries and gathered info to determine the results
                    and the state of a battery
                  </li>
                  <li>
                    Work with coworkers to provide backup if a member's car gets
                    too hard for one person to work on
                  </li>
                </ul>

                <div style={{ marginTop: "2rem" }}>
                  <h4> Warehouse Material Handler / Windsor</h4>
                </div>
                <div>
                  <BsFillCalendarFill />
                  <p>Dec 2021 - Jan 2022</p>
                </div>
                <ul className="resume-work-para">
                  <li>Track over 15,000 units in inventory</li>
                  <li>
                    Responsible for separating units into the correct
                    departments
                  </li>
                  <li>
                    Communicated with coworkers to work as efficiently as
                    possible
                  </li>
                  <li>
                    Emailed messages back to departments that required us to
                    change or update units from inventory
                  </li>
                </ul>
              </div>
            </section>
            <section className="resume-work">
              <div>
                <div>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <MdSchool />
                  </IconContext.Provider>
                  <h2>Education</h2>
                </div>
              </div>
              <div style={{ display: "block" }}>
                <h4>Full Stack Web Development Certificate (in progress)</h4>
                <p>UC Berkeley Coding Boot Camp</p>
                <p>Expected date of completion: July 7th, 2022</p>
              </div>
              <div style={{ display: "block", marginTop: "1rem" }}>
                <h4>
                  Applied Physics / California State University - San Marcos
                </h4>
                <p>April 2017 - March 2021 (Unfinish)</p>
                <ul>
                  <li>Cumulative GPA: 3.132</li>
                  <li>Skills Completed: C++</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            href="https://docs.google.com/document/d/1nsqN7uaS06EWy09-NgzkHPh11peFZq7OUwPUsDLEHQc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ cursor: "pointer" }}>
              Download My Resume! 📔
            </button>
          </a>
        </div>
      </section>
      <section id="contact" className="component-container">
        {/* <ContactForm /> */}
      </section>
    </div>
  );
}

export default Resume;
