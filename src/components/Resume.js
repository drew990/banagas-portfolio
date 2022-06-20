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
import resumeFile from "../files/AndrewBanagasResume.zip";

// function ContactForm() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   // const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === "email") {
//       setEmail(inputValue);
//     } else if (inputType === "name") {
//       setName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   return (
//     <div>
//       <form className="container">
//         <div>
//           <label className="field field_v1">
//             <input
//               value={email}
//               onChange={handleInputChange}
//               type="email"
//               name="email"
//               placeholder="email"
//               className="field__input"
//               required
//             />
//             <span className="field__label-wrap">
//               <span className="field__label">Email</span>
//             </span>
//           </label>
//         </div>
//         <div>
//           <label className="field field_v1">
//             <input
//               value={name}
//               onChange={handleInputChange}
//               type="name"
//               name="name"
//               placeholder="name"
//               className="field__input"
//               required
//             />
//             <span className="field__label-wrap">
//               <span className="field__label">Name</span>
//             </span>
//           </label>
//         </div>
//         <div>
//           <label className="field field_v1">
//             <textarea
//               value={message}
//               onChange={handleInputChange}
//               type="message"
//               name="message"
//               placeholder="message"
//               className="field__input"
//               style={{ height: "4rem", width: "253.33px" }}
//               required
//             />
//             <span className="field__label-wrap">
//               <span className="field__label">Message</span>
//             </span>
//           </label>
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

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
                    Helped members with changing their tires, Batteries,
                    jumpstarting cars, and getting keys out of their locked car
                  </li>
                  <li>Independently self-identify the problem of the car</li>
                  <li>
                    Help coworkers with issues that'll give better customer
                    service or able to help members with their cars
                  </li>
                  <li>
                    Always showed up with an open mindset because each problem
                    is different
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
                {/* <p className="resume-work-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p> */}
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
          <a href="path_to_file" download={resumeFile}>
            <button>Download My Resume! 📔</button>
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
