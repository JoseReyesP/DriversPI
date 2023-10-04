import {
  SET_DRIVERS,
  FILTER_BY_NAME,
  SET_PAGINA,
  FILTER_BY_ORIGIN,
  FILTER_BY_TEAM,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DESC,
  SORT_BY_DOB,
  RESET_FILTER,
} from "../actions/drivers";

const driversReducer = (
  state = { drivers: [], driversBuffer: [], pagina: 0 },
  action
) => {
  switch (action.type) {
    case SET_DRIVERS:
      //console.log("Reducer: ", action.payload);
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
        drivers: state.drivers.filter((d) =>
          d.Nombre.match(new RegExp(action.payload, "i"))
        ),
      };
    case FILTER_BY_ORIGIN:
      state.drivers = Array.from(state.driversBuffer);
      console.log(action.payload);
      switch (action.payload) {
        case "none":
          console.log("deberia volver a origen");
          return { ...state.drivers };
        case "db":
          return {
            ...state,
            drivers: state.drivers.filter((d) => d.Origen == "DB"),
          };
        case "api":
          return {
            ...state,
            drivers: state.drivers.filter((d) => d.Origen == "API"),
          };
      }

    case FILTER_BY_TEAM:
      state.drivers = Array.from(state.driversBuffer);
      const regex = new RegExp(action.payload, "i");
      const resultadoFiltrado = state.drivers.filter((item) =>
        item.Teams.some((team) => regex.test(team))
      );
      return { ...state, drivers: resultadoFiltrado, pagina: 0 };

    case SORT_BY_NAME_ASC:
      state.drivers = Array.from(state.driversBuffer);
      return {
        ...state,
        pagina: 0,
        drivers: state.drivers.sort((a, b) => {
          const forenameA = a.Nombre ? a.Nombre.toLowerCase() : "";
          const forenameB = b.Nombre ? b.Nombre.toLowerCase() : "";

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
          const forenameA = a.Nombre ? a.Nombre.toLowerCase() : "";
          const forenameB = b.Nombre ? b.Nombre.toLowerCase() : "";

          if (forenameA > forenameB) {
            return -1;
          }
          if (forenameA < forenameB) {
            return 1;
          }
          return 0;
        }),
      };

    case SORT_BY_DOB:
      console.log("Sorting DOB");
      state.drivers = Array.from(state.driversBuffer);
      return {
        ...state,
        pagina: 0,
        drivers: state.drivers.sort((a, b) => {
          const forenameA = a.Fecha_nacimiento
            ? a.Fecha_nacimiento.toLowerCase()
            : "";
          const forenameB = b.Fecha_nacimiento
            ? b.Fecha_nacimiento.toLowerCase()
            : "";

          if (forenameA < forenameB) {
            return -1;
          }
          if (forenameA > forenameB) {
            return 1;
          }
          return 0;
        }),
      };

    case RESET_FILTER:
      return { ...state, drivers: state.driversBuffer };

    case SET_PAGINA:
      return { ...state, pagina: action.payload };

    default: {
      return state;
    }
  }
};

export default driversReducer;
