import React from "react";
import "./OrdenarNombreFecha.css";
import { useDispatch } from "react-redux";
import { sortNameAsc, sortNameDesc } from "../../actions/drivers";

const OrdenarNombreFecha = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    switch (event.target.value) {
      case "nombre_asc":
        dispatch(sortNameAsc());
      case "nombre_desc":
        dispatch(sortNameDesc());
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
