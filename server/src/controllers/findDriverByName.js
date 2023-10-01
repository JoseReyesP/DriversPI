const axios = require("axios");
const { Driver, Teams } = require("../db");

const findDriverByName = async (name) => {
  const driver = await axios.get(
    `http://localhost:5000/drivers?name.forename=${name}`
  );
  const driversDB = await Driver.findAll({
    where: {
      Nombre: name,
    },
    include: [
      {
        model: Teams,
        through: "DriverTeams", // Nombre de la tabla intermedia
      },
    ],
  });
  driversDB.map((e) => driver.data.push(e));

  return driver;
};

module.exports = findDriverByName;
