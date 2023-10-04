import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const DriverDetails = () => {
  const { driverId } = useParams();
  const [driversData, setDriversData] = useState([]);
  let id = 0;
  let origen = "";
  [id, origen] = driverId.split("-");
  let index = origen == "API" ? 0 : 1;
  console.log(id, origen, index);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseDriverID = await axios.get(
          `http://localhost:3001/drivers/${id}`
        );
        console.log(responseDriverID.data);
        setDriversData(responseDriverID.data);
      } catch (error) {
        console.log("Error al obtener datos", error.message);
      }
    };
    fetchData();
  }, []);

  console.log(driversData);

  if (!driversData[index]) {
    return (
      <div>
        <h2>Cargando...</h2>
      </div>
    );
  }
  if (index > 0) {
    return (
      <div>
        <img src={driversData[index][0].Imagen} />
        <h3>Nombre: {driversData[index][0].Nombre}</h3>
        <h3>Apellido: {driversData[index][0].Apellido}</h3>
        <p>Nacionalidad: {driversData[index][0].Nacionalidad}</p>
        <p>Equipos: </p>
        <div>
          {driversData[index][0].Teams.map((t) => (
            <div>
              <b>{t.nombre}</b>
              <br />
            </div>
          ))}
        </div>
        <p>Descripcion: {driversData[index][0].Descripcion}</p>
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <img src={driversData[index].Imagen} />
        <h3>Nombre: {driversData[index].Nombre}</h3>
        <h3>Apellido: {driversData[index].Apellido}</h3>
        <p>Nacionalidad: {driversData[index].Nacionalidad}</p>
        <p>Equipos: </p>
        <div>
          {driversData[index].Teams.map((t) => (
            <div>
              <b>{t}</b>
              <br />
            </div>
          ))}
        </div>
        <p>Descripcion: {driversData[index].Descripcion}</p>
        <br />
      </div>
    );
  }
};

export default DriverDetails;
