const axios = require("axios");
const { Driver, Teams } = require("../db");

const findDriverById = async (id) => {
  const driver = await axios.get(`http://localhost:5000/drivers/${id}`);
  const driverDB = await Driver.findAll({
    where: {
      ID: id,
    },
    include: [
      {
        model: Teams,
        through: "DriverTeams", // Nombre de la tabla intermedia
      },
    ],
  });

  return { data: [driver.data, driverDB] };
};

module.exports = findDriverById;
