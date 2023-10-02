import React from "react";
import { useState } from "react";
import "./Paginado.css";

const Paginado = (props) => {
  return (
    <div className="contenedor">
      <div>
        <button onClick={props.onClickPreviousPage}>{"<-"}</button>
      </div>
      <div>
        <p>
          {props.pagina + 1}/{props.paginas}
        </p>
      </div>

      <div>
        <button onClick={props.onClickNextPage}>{"->"}</button>
      </div>
    </div>
  );
};

export default Paginado;
