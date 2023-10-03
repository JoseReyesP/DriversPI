import React from "react";
import formulaImage from "../assets/F1.svg";

import "../pages/LandingPage.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTeams } from "../actions/teams";
import axios from "axios";

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseTeams = await axios.get(
          "http://localhost:3001/drivers/teams"
        );
        const teamsData = responseTeams.data;
        dispatch(setTeams(teamsData));
      } catch (error) {
        console.log("Error al obtener datos", error.message);
      }
    };
    fetchData();
  }, [dispatch]);
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
