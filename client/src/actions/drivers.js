export const SET_DRIVERS = "SET_DRIVERS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const SET_PAGINA = "SET_PAGINA";

export const setDrivers = (drivers) => ({
  type: SET_DRIVERS,
  payload: drivers,
});

export const setFilter = (filterName) => ({
  type: FILTER_BY_NAME,
  payload: filterName,
});

export const setPagina = (page) => ({ type: SET_PAGINA, payload: page });

export const displayDriversData = () => (dispatch, getState) => {
  const driversData = getState().drivers;
  console.log("Drivers Data:", driversData.drivers[0].id);
};
