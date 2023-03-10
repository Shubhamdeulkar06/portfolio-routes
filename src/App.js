import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CopyrightSection from "./CopyrightSection";
import PortfolioModal from "./PortfolioModal";
import cabin from "./assets/img/portfolio/cabin.png";
import cake from "./assets/img/portfolio/cake.png";
import circus from "./assets/img/portfolio/circus.png";
import game from "./assets/img/portfolio/game.png";
import safe from "./assets/img/portfolio/safe.png";
import submarine from "./assets/img/portfolio/submarine.png";

const App = () => {
  return (
    <div>
      <h1>Shubham</h1>
      <NavBar />
      <Outlet />
      <Footer />
      <CopyrightSection />
      <PortfolioModal id="portfolioModal1" src={cabin} />
      <PortfolioModal id="portfolioModal2" src={cake} />
      <PortfolioModal id="portfolioModal3" src={circus} />
      <PortfolioModal id="portfolioModal4" src={game} />
      <PortfolioModal id="portfolioModal5" src={safe} />
      <PortfolioModal id="portfolioModal6" src={submarine} />
    </div>
  );
};

export default App;
