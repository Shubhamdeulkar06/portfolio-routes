import React from "react";
import avataaars from "./assets/img/avataaars.svg";

const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src={avataaars} alt="..." />

        <h1 className="masthead-heading text-uppercase mb-0">
          Welcome to My Portfolio
        </h1>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <p className="masthead-subheading font-weight-light mb-0">
          Frontend Developer || Full Stack Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
