import React from "react";
import { useState } from "react";
import DriverCard from "./DriverCard";
import "./DriverList.css";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "./Paginado";
import { setPagina } from "../actions/drivers";

const DriversList = () => {
  const pagina = useSelector((state) => state.drivers.pagina);
  const drivers = useSelector((state) => state.drivers);
  const dispatch = useDispatch();

  if (drivers.drivers.length === 0) {
    console.log("cargando...");
    return (
      <div>
        <h1>Conductor no encontrado</h1>
      </div>
    );
  }
  let arrayOriginal = Array.from(drivers.drivers);
  let arraysDivididos = [];
  const tamanoSubArray = 9;
  for (let i = 0; i < arrayOriginal.length; i += tamanoSubArray) {
    const subArray = arrayOriginal.slice(i, i + tamanoSubArray);
    arraysDivididos.push(subArray);
  }

  const paginas = arraysDivididos.length;
  console.log(paginas, " === ", pagina);

  const onClickNextPage = () => {
    if (pagina != arraysDivididos.length - 1) {
      console.log(pagina, "++++", paginas);
      dispatch(setPagina(pagina + 1));
    }
  };
  const onClickPreviousPage = () => {
    if (pagina >= 1) {
      dispatch(setPagina(pagina - 1));
    }
  };
  const goToPage = (page) => {
    if (page >= 0 && page <= arraysDivididos.length) {
      dispatch(setPagina(pagina));
    }
  };

  return (
    <div>
      <div className="wrapper">
        {arraysDivididos[pagina].map((driver) => (
          <DriverCard
            key={driver.id}
            id={driver.id}
            name={driver.name}
            image={driver.image.url}
            teams={driver.teams}
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
