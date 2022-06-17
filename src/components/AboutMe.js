import React from "react";
import ProfilePic from "../images/ProfilePic2.png";

export default function AboutMe() {
  return (
    <div className="component-container">
      <h1>About Me section</h1>
      <img src={ProfilePic} alt="Frame 1" className="aboutMe-img" />
      <p>
        Greetings! My name is Andrew and I'm the owner of Banagas Tech. I'm a
        web developer with a passion for coding. I started Banagas Tech with the
        idea of helping small business owners like yourself, by offering
        websites. If you are like me then you like growing your business too.
        Don't worry I have got you covered! I promise to do my best to provide
        quality service customer service helping your business. If there is
        anything you need, I'll be happy to help if I can!
      </p>
    </div>
  );
}
