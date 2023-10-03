import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterOrigin } from "../actions/drivers";

const FiltroOrigen = () => {
  const dispatch = useDispatch();

  const onChangeHandlerSelector = ({ target }) => {
    const nuevoFiltro = target.value;
    console.log(nuevoFiltro);
    dispatch(setFilterOrigin(nuevoFiltro));
  };

  return (
    <div>
      <select onChange={onChangeHandlerSelector}>
        <option value={"none"}>none</option>
        <option value={"db"}>Data Base</option>
        <option value={"api"}>API</option>
      </select>
    </div>
  );
};

export default FiltroOrigen;
