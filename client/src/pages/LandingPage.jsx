import React from "react";
import formulaImage from "../assets/F1.svg";

import "../pages/LandingPage.css";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main>
      <div className="center">
        <h1>PILOTOS FORMULA 1</h1>
      </div>
      <div>
        <img src={formulaImage} />
      </div>
      <div className="center">
        <h2>tu pagina informativa sobre la formula 1</h2>
      </div>
      <Link to="/drivers">
        <div className="center">
          <h1>CONTINUAR</h1>
        </div>
      </Link>
    </main>
  );
};

export default LandingPage;
