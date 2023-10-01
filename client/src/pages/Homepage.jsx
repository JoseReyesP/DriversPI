import React from "react";
// tools
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//actions
import { setDrivers, displayDriversData } from "../actions/drivers";

//Componentes
import DriversList from "../Componentes/DriversList";

const Homepage = () => {
  const dispatch = useDispatch();

  // obtenemos todos los drivers antes de que cualquier elemento se rederize
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:3001/drivers");
        const driverData = response.data;

        console.log("Data from server: ", driverData);

        dispatch(setDrivers(driverData));
      } catch (error) {
        console.log("Error al obtener datos", error.message);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>LIST OF DRIVERS. WORKING ON IT</h1>
      <DriversList />
    </div>
  );
};

export default Homepage;
