import React from "react";
import { useState, useEffect } from "react";
import DriverCard from "../DriverCard/DriverCard";
import DriverCardDB from "../DriverCardDB/DriverCardDB";
import "./DriverList.css";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import { setPagina } from "../../actions/drivers";
import paginador from "./Paginador";

import { displayDriversData } from "../../actions/drivers";

const DriversList = () => {
  const pagina = useSelector((state) => state.drivers.pagina);
  const driversState = useSelector((state) => state.drivers);

  // Guardamos los drivers que estan en el estado en una variable que se pueda usar de forma mas sencilla
  const drivers = driversState.drivers;
  //console.log("DriversList", drivers);
  const dispatch = useDispatch();

  if (drivers.length === 0) {
    console.log("cargando...");
    return (
      <div>
        <h1>Conductor no encontrado</h1>
      </div>
    );
  }

  // paginador retorna un array que contiene los arrays necesarios para tener 9 drivers por array
  let driverPages = paginador(drivers, 9);

  // contamos las paginas para tener un buen formato
  const paginas = driverPages.length;

  // handlers que cambiaran el estado pagina, y al hacerlo este componente se re-renderiza pero esta vez usara un nuevo index
  // para acceder a los drivers que estan en driverPages
  const onClickNextPage = () => {
    if (pagina <= driverPages.length - 2) {
      dispatch(setPagina(pagina + 1));
    }
  };
  const onClickPreviousPage = () => {
    if (pagina >= 1) {
      dispatch(setPagina(pagina - 1));
    }
  };
  const goToPage = (page) => {
    if (page >= 0 && page <= driverPages.length) {
      dispatch(setPagina(pagina));
    }
  };

  return (
    <div>
      <div className="wrapper">
        {driverPages[pagina].map((d) => (
          <DriverCard
            id={d.ID}
            nombre={d.Nombre}
            apellido={d.Apellido}
            imagen={d.Imagen}
            teams={d.Teams}
          />
        ))}
      </div>

      <Paginado
        onClickNextPage={onClickNextPage}
        onClickPreviousPage={onClickPreviousPage}
        goToPage={goToPage}
        paginas={paginas}
        pagina={pagina}
      />
    </div>
  );
};

export default DriversList;
