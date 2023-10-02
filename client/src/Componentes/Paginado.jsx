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
          {props.pagina}/{props.paginas - 1}
        </p>
      </div>

      <div>
        <button onClick={props.onClickNextPage}>{"->"}</button>
      </div>
    </div>
  );
};

export default Paginado;
