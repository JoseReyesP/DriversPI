import React from "react";
import "./DriverCard.css";
import { useNavigate } from "react-router-dom";

const DriverCard = (props) => {
  const navigate = useNavigate();

  const onClickHandlerCard = () => {
    navigate(`/details/${props.id}`);
  };

  return (
    <>
      <div className="card" key={props.id} onClick={onClickHandlerCard}>
        <img src={props.imagen} />
        <div>
          <h3>
            <b>{props.nombre} </b>
            <b>{props.apellido}</b>
          </h3>
          <div>
            <b>Escuderias:</b>
            <br />
            <div>
              {props.teams.map((t) => (
                <div>
                  <a>{t}</a>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
        <small>id:{props.id}</small>
      </div>
    </>
  );
};

export default DriverCard;
