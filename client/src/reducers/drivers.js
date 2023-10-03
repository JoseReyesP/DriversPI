import {
  SET_DRIVERS,
  FILTER_BY_NAME,
  SET_PAGINA,
  FILTER_BY_ORIGIN,
  FILTER_BY_TEAM,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DESC,
} from "../actions/drivers";

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
      state.drivers = Array.from(state.driversBuffer);
      return {
        ...state,
        pagina: 0,
        drivers: state.drivers.filter((driver) => {
          if (driver.Nombre) {
            return driver.Nombre.match(new RegExp(action.payload, "i"));
          } else {
            return driver.name.forename.match(new RegExp(action.payload, "i"));
          }
        }),
      };
    case FILTER_BY_ORIGIN:
      state.drivers = Array.from(state.driversBuffer);
      if (action.payload == "db") {
        return {
          ...state,
          pagina: 0,
          drivers: state.drivers.filter((driver) => {
            if (driver.Nombre) {
              return driver;
            }
          }),
        };
      } else {
        return {
          ...state,
          pagina: 0,
          drivers: state.drivers.filter((driver) => {
            if (driver.name) {
              return driver;
            }
          }),
        };
      }

    case FILTER_BY_TEAM:
      state.drivers = Array.from(state.driversBuffer);
      return {
        ...state,
        pagina: 0,
        drivers: state.drivers.filter((driver) => {
          if (driver.Nombre) {
            return driver.Teams.filter((t) => t.nombre == action.payload);
          } else {
            let teams = driver.teams.split(",");
            return teams.filter((t) => t == action.payload);
          }
        }),
      };
    case SORT_BY_NAME_ASC:
      state.drivers = Array.from(state.driversBuffer);
      return {
        ...state,
        pagina: 0,
        drivers: state.drivers.sort((a, b) => {
          const forenameA =
            a.name && a.name.forename ? a.name.forename.toLowerCase() : "";
          const forenameB =
            b.name && b.name.forename ? b.name.forename.toLowerCase() : "";

          if (forenameA < forenameB) {
            return -1;
          }
          if (forenameA > forenameB) {
            return 1;
          }
          return 0;
        }),
      };

    case SORT_BY_NAME_DESC:
      state.drivers = Array.from(state.driversBuffer);
      return {
        ...state,
        pagina: 0,
        drivers: state.drivers.sort((a, b) => {
          const forenameA =
            a.name && a.name.forename ? a.name.forename.toLowerCase() : "";
          const forenameB =
            b.name && b.name.forename ? b.name.forename.toLowerCase() : "";

          if (forenameA > forenameB) {
            return -1;
          }
          if (forenameA < forenameB) {
            return 1;
          }
          return 0;
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
