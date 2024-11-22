import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Legal Inspector</div>
      <div className="navbar-links">
        <a href="#project-report">Home</a>
        <a href="#project-report">Project Report</a>
        <a href="#team">Our Team</a>
      </div>
    </nav>
  );
}

export default Navbar;
