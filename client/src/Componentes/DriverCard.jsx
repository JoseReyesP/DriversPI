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
        <img src={props.image} />
        <div>
          <h3>
            <b>{props.name.forename} </b>
            <b>{props.name.surname}</b>
          </h3>
          <div>
            <b>Escuderias:</b>
            <br />
            <div>{props.teams}</div>
          </div>
        </div>
        <small>id:{props.id}</small>
      </div>
    </>
  );
};

export default DriverCard;
