import { combineReducers } from "redux";
import driversReducer from "./drivers";
import searchbarReducer from "./searchbar";
import teamsReducer from "./teams";

const rootReducer = combineReducers({
  drivers: driversReducer,
  searchbar: searchbarReducer,
  teams: teamsReducer,
});

export default rootReducer;
