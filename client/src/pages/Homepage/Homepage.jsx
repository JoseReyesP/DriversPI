import React from "react";
import "./Homepage.css";
// tools
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//actions
import { setDrivers, displayDriversData } from "../../actions/drivers";
import { setTeams } from "../../actions/teams";

//Componentes
import DriversList from "../../Componentes/DriverList/DriversList";
import SearchBar from "../../Componentes/SearchBar/SearchBar";
import FiltrarTeamsOrigen from "../../Componentes/FiltrarTeamOrigen/FiltrarTeamOrigen";
import OrdenarNombreFecha from "../../Componentes/OrdenarNombreFecha/OrdenarNombreFecha";

const Homepage = () => {
  // dispatcher
  const dispatch = useDispatch();

  // usamos este estado para forzar la re-renderizacion (es necesario)
  const [forzarRenderizacion, setForzarRenderizacion] = useState(false);

  //usaremos un state para rederizar el mensaje cargado
  const [loading, setloading] = useState(true);

  // obtenemos todos los drivers antes de que cualquier elemento se rederize
  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseDriver = await axios.get("http://localhost:3001/drivers");
        const driversData = responseDriver.data;
        dispatch(setDrivers(driversData));
      } catch (error) {
        console.log("Error al obtener datos", error.message);
      }
    };
    fetchData();
    setloading(false);
  }, [dispatch]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  const handleBotonClickRenderize = () => {
    setForzarRenderizacion(!forzarRenderizacion);
  };

  dispatch(displayDriversData());
  return (
    <div>
      <div className="appWrapper">
        <SearchBar onClickButtonRenderize={handleBotonClickRenderize} />
      </div>

      <div className="filtros">
        <div className="teamsorigen">
          <FiltrarTeamsOrigen />
        </div>
        <div className="ordenar">
          <OrdenarNombreFecha />
        </div>
      </div>

      <div className="driverlist">
        <DriversList />
      </div>
    </div>
  );
};

export default Homepage;
