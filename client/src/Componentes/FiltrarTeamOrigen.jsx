import React from "react";
import "./FiltrarTeamOrigen.css";
import { useState } from "react";
import FiltroOrigen from "./FiltroOrigen";
import FiltroTeams from "./FiltroTeams";

//Botones/Opciones para filtrar por team,
//y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).

const FiltrarTeamsOrigen = () => {
  const [filtro, setFiltro] = useState("none");

  const onChangeHandlerSelector = (event) => {
    const nuevoFiltro = event.target.value;
    console.log(nuevoFiltro);
    setFiltro(nuevoFiltro);
  };
  return (
    <div className="contenedorFiltro">
      <div className="filtro">
        <p>Filtrar por: </p>
        <select onChange={onChangeHandlerSelector}>
          <option value={"none"}>none</option>
          <option value={"teams"}>Team</option>
          <option value={"origen"}>Origen</option>
        </select>
        {filtro === "teams" ? <FiltroTeams /> : null}
        {filtro === "origen" ? <FiltroOrigen /> : null}
      </div>
    </div>
  );
};

export default FiltrarTeamsOrigen;
