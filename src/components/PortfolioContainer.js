import React, { useState } from "react";
import Home from "./pages/Home";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";
import Resume from "./Resume";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "../styles/styles.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderpage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <ContactForm />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderpage()}
      <Footer />
    </div>
  );
}
