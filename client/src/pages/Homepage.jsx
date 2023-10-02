import React from "react";
// tools
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//actions
import { setDrivers, displayDriversData } from "../actions/drivers";

//Componentes
import DriversList from "../Componentes/DriversList";
import SearchBar from "../Componentes/SearchBar";

const Homepage = () => {
  const dispatch = useDispatch();
  const [forzarRenderizacion, setForzarRenderizacion] = useState(false);
  // obtenemos todos los drivers antes de que cualquier elemento se rederize
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:3001/drivers");
        const driverData = response.data;
        dispatch(setDrivers(driverData));
      } catch (error) {
        console.log("Error al obtener datos", error.message);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleBotonClickRenderize = () => {
    setForzarRenderizacion(!forzarRenderizacion);
  };

  return (
    <div>
      <SearchBar onClickButtonRenderize={handleBotonClickRenderize} />
      <DriversList />
    </div>
  );
};

export default Homepage;
