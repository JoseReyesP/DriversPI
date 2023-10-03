import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterTeam } from "../../actions/drivers";
import axios from "axios";

const FiltroTeams = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    //dispatch(setFilterTeam(event.target.value));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Teams..."></input>
      </form>
    </div>
  );
};

export default FiltroTeams;
