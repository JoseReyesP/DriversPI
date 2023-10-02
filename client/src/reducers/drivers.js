import { SET_DRIVERS, FILTER_BY_NAME, SET_PAGINA } from "../actions/drivers";

const driversReducer = (
  state = { drivers: [], driversBuffer: [], pagina: 0 },
  action
) => {
  switch (action.type) {
    case SET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        driversBuffer: action.payload,
      };
    case FILTER_BY_NAME:
      state.drivers = state.driversBuffer;
      return {
        ...state,
        pagina: 0,
        drivers: state.drivers.filter((driver) => {
          return driver.name.forename.match(new RegExp(action.payload, "i"));
        }),
      };
    case SET_PAGINA:
      return { ...state, pagina: action.payload };

    default: {
      return state;
    }
  }
};

export default driversReducer;
