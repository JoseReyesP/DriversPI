const { Router } = require("express");
const driversRouter = Router();

// ruta inicial que obtiene todos los drivers
const findAllDrivers = require("../controllers/findAllDrivers");
// obtener driver con ID en API
const findDriverById = require("../controllers/findDriverById");
// obtener driver con el nombre en API
const findDriverByName = require("../controllers/findDriverByName");
// Escribir nuevo driver
const createNewDriver = require("../controllers/createNewDriver");
// obtener todos los teams para poblar la base de datos
const findAllTeams = require("../controllers/findAllTeams");

// Rutas ******

// Funcion de formateo de datos, esto igualara el formato de la api con el formato de la base de datos
// de esta manera no habra distincion entre uno u otro excepto por un campo que especifica su origen {origen: db/api}
const dataFormatter = (rawData) => {
  let formattedData = [];
  let bufferObject = {};
  rawData.map((e) => {
    if (!e.Nombre) {
      const teamsArray = e.teams ? e.teams.split(", ") : [];
      bufferObject = {
        ID: e.id,
        Nombre: e.name.forename,
        Apellido: e.name.surname,
        Descripcion: e.description,
        Imagen: e.image.url,
        Rating: "desconocido",
        Fecha_nacimiento: e.dob,
        Nacionalidad: e.nationality,
        Url: e.url,
        Teams: teamsArray,
        Origen: "API",
      };
      formattedData.push(bufferObject);
    } else {
      let teams = e.Teams.map((t) => t.nombre);
      bufferObject = {
        ID: e.ID,
        Nombre: e.Nombre,
        Apellido: e.Apellido,
        Descripcion: e.descripcion,
        Imagen: e.Imagen,
        Rating: e.Rating,
        Fecha_nacimiento: e.Fecha_nacimiento,
        Nacionalidad: e.Nacionalidad,
        Url: e.Url,
        Teams: teams,
        Origen: e.Origen,
      };
      formattedData.push(bufferObject);
    }
  });
  return formattedData;
};

// Ruta default
driversRouter.get("/", async (req, res) => {
  try {
    const apiResponse = await findAllDrivers();
    let formatted = dataFormatter(apiResponse.data); // formateamos los datos recibidos para que sean mas faciles de leer por el cliente
    res.status(200).json(formatted);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// Ruta por nombre
driversRouter.get("/name", async (req, res) => {
  try {
    const { name } = req.query;
    const apiResponse = await findDriverByName(name);
    res.status(200).json(apiResponse.data);
  } catch (error) {
    console.log("no se encontro el nombre");
    console.error(error.message);
  }
});

// poblamos la base de datos con los teams
driversRouter.get("/teams", async (req, res) => {
  try {
    const apiResponse = await findAllTeams();
    res.status(200).json(apiResponse);
  } catch (error) {
    console.log("La api esta fuera de linea");
    console.error(error.message);
  }
});

// Ruta por ID (ruta dinamica siempre abajo de las rutas estaticas)
driversRouter.get("/:idDriver", async (req, res) => {
  try {
    const { idDriver } = req.params;
    const apiResponse = await findDriverById(idDriver);
    res.status(200).json(apiResponse.data);
  } catch (error) {
    console.log("no se encontro el driver con el ID indicado");
    console.error(error.message);
  }
});

// Ruta POST para aniadir a un nuevo driver
driversRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    if (!data.conductor.Nombre || !data.conductor.Apellido || !data.teams) {
      return res.status(400).json("data invalid");
    }
    const newDriver = await createNewDriver(data);
    res.status(200).json(newDriver);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = driversRouter;
