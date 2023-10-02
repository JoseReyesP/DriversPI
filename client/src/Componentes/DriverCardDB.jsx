import React from "react";
import "./DriverCardDB.css";
import { useNavigate } from "react-router-dom";

const DriverCard = (props) => {
  const navigate = useNavigate();

  const onClickHandlerCard = () => {
    navigate(`/details/${props._id}`);
  };

  return (
    <>
      <div className="cardDB" key={props.id} onClick={onClickHandlerCard}>
        <img src={props.Imagen} />
        <div>
          <h3>
            <b>{props.Nombre} </b>
            <b>{props.Apellido}</b>
          </h3>
          <div>
            <b>Escuderias:</b>
            <br />
          </div>
          <div>
            {props.Teams.map((t) => (
              <p>{t.nombre},</p>
            ))}
          </div>
        </div>
        <small>id:{props.id}</small>
      </div>
    </>
  );
};

export default DriverCard;
