const axios = require("axios");
const { Teams } = require("../db");

const findAllTeams = async () => {
  const t = [];
  // tenemos que filtrar atravez de una expresion regular
  const expresionRegular = /\s*,\s*/;
  const data = await axios.get("http://localhost:5000/drivers");
  data.data.map((e) => {
    if (e.teams) {
      e.teams.split(expresionRegular).map((e) => t.push(e));
    }
  });
  // eliminamos elementos repetidos
  tList = [...new Set(t)];

  // verificamos si la tabla ya ha sido poblada anteriormente
  const teamsDB = await Teams.count();

  if (teamsDB > 0) {
    return "full";
  } else {
    //poblamos la tabla teams
    Promise.all(
      // usamos Promise.all para asegurarnos que se completen todas las tareas antes de enviar algun mensaje
      tList.map(async (teamName) => {
        try {
          const newTeam = await Teams.create({
            nombre: teamName,
          });
          newTeam.save();
        } catch (error) {
          console.error(
            `Error al crear el equipo ${teamName}: ${error.message}`
          );
        }
      })
    )
      .then(() => {
        console.log("Todos los equipos se han creado exitosamente.");
      })
      .catch((error) => {
        console.error("Error al crear equipos:", error.message);
      });

    return tList;
  }
};

module.exports = findAllTeams;
