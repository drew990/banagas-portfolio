import React from "react";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import ContactForm from "../ContactForm";

function Home() {
  return (
    <div>
      <AboutMe />
      <Portfolio />
      <Resume />
      <ContactForm />
    </div>
  );
}

export default Home;
