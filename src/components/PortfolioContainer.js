import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "../styles/styles.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderpage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
  };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar />
      {renderpage()}
      <Footer />
    </div>
  );
}
