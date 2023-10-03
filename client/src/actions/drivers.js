export const SET_DRIVERS = "SET_DRIVERS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const SET_PAGINA = "SET_PAGINA";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_BY_TEAM = "FILTER_BY_TEAM";
export const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC";
export const SORT_BY_NAME_DESC = "SORT_BY_NAME_DESC";

export const sortNameAsc = () => ({ type: SORT_BY_NAME_ASC });
export const sortNameDesc = () => ({ type: SORT_BY_NAME_DESC });

export const setDrivers = (drivers) => ({
  type: SET_DRIVERS,
  payload: drivers,
});

export const setFilter = (filterName) => ({
  type: FILTER_BY_NAME,
  payload: filterName,
});

export const setFilterOrigin = (filterOrigin) => ({
  type: FILTER_BY_ORIGIN,
  payload: filterOrigin,
});

export const setFilterTeam = (filterTeam) => ({
  type: FILTER_BY_TEAM,
  payload: filterTeam,
});

export const setPagina = (page) => ({ type: SET_PAGINA, payload: page });

export const displayDriversData = () => (dispatch, getState) => {
  const driversData = getState().drivers;
  console.log("Drivers Data:", driversData.drivers);
};
