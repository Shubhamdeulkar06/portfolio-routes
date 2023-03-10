import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#top">
          Shubham Deulkar
        </a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/PortfolioSection"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/AboutSection"
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/ContactSection"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
