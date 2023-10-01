import { SET_DRIVERS } from "../actions/drivers";

const driversReducer = (state = { drivers: [] }, action) => {
  console.log("fuera del switch", action.payload);
  switch (action.type) {
    case SET_DRIVERS:
      console.log("set drivers", action.payload[0]);
      return { ...state, drivers: action.payload };

    default: {
      return state;
    }
  }
};

export default driversReducer;
