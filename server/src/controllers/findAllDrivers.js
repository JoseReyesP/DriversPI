const axios = require("axios");

const findAllDrivers = async () => {
  const drivers = await axios.get("http://localhost:5000/drivers");
  return drivers;
};

module.exports = findAllDrivers;
