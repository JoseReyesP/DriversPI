import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterTeam } from "../../actions/drivers";
import "./FiltroTeams.css";

const FiltroTeams = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let team = event.target.querySelector('input[name="team"]').value;
    console.log(team);
    dispatch(setFilterTeam(team));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Teams..." name="team"></input>
      </form>
    </div>
  );
};

export default FiltroTeams;
