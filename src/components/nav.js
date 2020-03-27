import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>45</h1>
      </Link>

      <div className="nav-right">
        <Link style={{ textDecoration: "none" }} to="/">
          <h3>HOME</h3>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about-us">
          <h3>ABOUT US</h3>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/projects">
          <h3> PROJECTS</h3>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/services">
          <h3>SERVICES</h3>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/contact">
          <h3>CONTACT US</h3>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
