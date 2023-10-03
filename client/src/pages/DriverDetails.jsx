import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const DriverDetails = () => {
  const { driverId } = useParams();
  const drivers = useSelector((state) => state.drivers);
  let r = drivers.drivers.filter((d) => d.id == driverId);

  console.log(r[0]);

  return (
    <div>
      <img src={r[0].image.url} />
      <h3>Nombre: {r[0].name.forename}</h3>
      <h3>Apellido: {r[0].name.surname}</h3>
      <p>Nacionalidad: {r[0].nationality}</p>
      <p>Equipos: {r[0].teams}</p>
      <p>Descripcion: {r[0].description}</p>
      <br />
    </div>
  );
};

export default DriverDetails;
