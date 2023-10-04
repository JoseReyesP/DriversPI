import React from "react";
import "./OrdenarNombreFecha.css";
import { useDispatch } from "react-redux";
import {
  sortDOB,
  sortNameAsc,
  sortNameDesc,
  resetFilter,
} from "../../actions/drivers";

const OrdenarNombreFecha = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    switch (event.target.value) {
      case "nombre_asc":
        dispatch(sortNameAsc());
        break;
      case "nombre_desc":
        dispatch(sortNameDesc());
        break;
      case "fecha":
        console.log("deberia despachar fecha");
        dispatch(sortDOB());
        break;
      case "none":
        console.log("deberia despachar fecha");
        dispatch(resetFilter());
        break;
      default:
        null;
    }
  };
  return (
    <div className="contenedorOrdenar">
      <div className="Ordenar">
        <p>Ordenar por: </p>
        <select onChange={onChangeHandler}>
          <option value={"none"}>none</option>
          <option value={"nombre_asc"}>Nombre ascendente</option>
          <option value={"nombre_desc"}>Nombre descendente</option>
          <option value={"fecha"}>Fecha Nacimiento</option>
        </select>
      </div>
    </div>
  );
};

export default OrdenarNombreFecha;
