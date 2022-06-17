import React from "react";

function navbar({ currentPage, handlePageChange }) {
  return (
    <nav>
      <a href="#home" onClick={() => handlePageChange("Home")}>
        <h2 className={currentPage === "Home" ? "active" : ""}>
          Andrew Banagas
        </h2>
      </a>
      <div className="navigation-links">
        <a href="#about" onClick={() => handlePageChange("About")}>
          <p className={currentPage === "About" ? "active" : ""}>About Me</p>
        </a>
        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
          <p className={currentPage === "Portfolio" ? "active" : ""}>
            Portfolio
          </p>
        </a>
        <a href="#contact" onClick={() => handlePageChange("Contact")}>
          <p className={currentPage === "Contact" ? "active" : ""}>Contact</p>
        </a>
        <a href="#resume" onClick={() => handlePageChange("Resume")}>
          <p className={currentPage === "Resume" ? "active" : ""}>Resume</p>
        </a>
      </div>
    </nav>
  );
}

export default navbar;
