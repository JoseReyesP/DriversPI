const { Driver, Teams } = require("../db");

const createNewDriver = async (data) => {
  const team = await Teams.findAll({ where: { nombre: data.teams } });
  let newDriver = {};
  if (team) {
    // Si se encontró el equipo existente, crea un nuevo conductor
    newDriver = await Driver.create(data.conductor);
    // Relacionar el nuevo conductor con el equipo existente
    await newDriver.addTeams(team);
  } else {
    console.log("El equipo no se encontró en la base de datos.");
  }
  newDriver.save();
  return newDriver;
};

module.exports = createNewDriver;
