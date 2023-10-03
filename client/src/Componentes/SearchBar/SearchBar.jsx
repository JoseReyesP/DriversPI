import React from "react";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setInput, resetInput } from "../../actions/searchbar";
import { setDrivers, setFilter } from "../../actions/drivers";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchBar = (onClickButtonRenderize) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchbar.input);

  const onChangeHandlerSearch = ({ target }) => {
    console.log(searchValue);
    dispatch(setInput(target.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(setFilter(searchValue));
    dispatch(resetInput());
  };

  return (
    <div className="topnav" onClick={onClickButtonRenderize}>
      <Link to="/drivers">
        <a className="active">Home</a>
      </Link>
      <Link to="/addNewDriver">
        <a className="active">Add New Driver</a>
      </Link>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Search.."
          onChange={onChangeHandlerSearch}
          value={searchValue}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
