import { combineReducers } from "redux";
import driversReducer from "./drivers";

const rootReducer = combineReducers({
  drivers: driversReducer,
});

export default rootReducer;
