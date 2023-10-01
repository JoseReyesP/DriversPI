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

// Ruta default
driversRouter.get("/", async (req, res) => {
  try {
    const apiResponse = await findAllDrivers();
    res.status(200).json(apiResponse.data);
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
