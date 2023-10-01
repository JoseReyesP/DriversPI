const axios = require("axios");
const { Driver, Teams } = require("../db");

const findAllDrivers = async () => {
  const drivers = await axios.get("http://localhost:5000/drivers");
  const driversDB = await Driver.findAll({
    include: [
      {
        model: Teams,
        through: "DriverTeams", // Nombre de la tabla intermedia
      },
    ],
  });
  driversDB.map((e) => drivers.data.push(e));
  return drivers;
};

module.exports = findAllDrivers;
