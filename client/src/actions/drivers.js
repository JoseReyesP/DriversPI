export const SET_DRIVERS = "SET_DRIVERS";

export const setDrivers = (drivers) => ({
  type: SET_DRIVERS,
  payload: drivers,
});

export const displayDriversData = () => (dispatch, getState) => {
  const driversData = getState().drivers;
  console.log("Drivers Data:", driversData.drivers[0].id);
};
