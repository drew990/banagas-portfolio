import React from "react";
import ProfilePic from "../images/ProfilePic2.png";

export default function AboutMe() {
  return (
    <div className="component-container">
      <h1>About Me 😄</h1>
      <div>
        <img src={ProfilePic} alt="Frame 1" className="aboutMe-img" />
      </div>
      <p>
        Since college, I have been practicing coding for years for better coding
        practice and to improve my skills to give back. Starting from a simple
        Hello World in C++, to Perl for better understanding, to making my
        website with HTML, CSS, Node, and Javascript is very amazing. I have
        continuously improved my skills and knowledge ever since.
        <br /> <br />I do this because I am a very driven, passionate person
        that loves to help people achieve their dreams and I love to help them
        get there. Whether it be a small business they just started up,
        portfolio, or expanding, I'll make sure that they will grow
        <br /> <br />
        A little bit about me is that I spent 4 years at California State
        University - San Marcos. I first was majoring in Computer Science but
        switch to Physics and added a minor in mathematics.
        <br /> <br />I hope to hear from you soon!
      </p>
    </div>
  );
}
