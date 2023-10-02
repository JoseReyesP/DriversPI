import { combineReducers } from "redux";
import driversReducer from "./drivers";
import searchbarReducer from "./searchbar";

const rootReducer = combineReducers({
  drivers: driversReducer,
  searchbar: searchbarReducer,
});

export default rootReducer;
