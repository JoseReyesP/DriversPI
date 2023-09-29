const { Router } = require("express");
const driversRouter = Router();

// ruta inicial que obtiene todos los drivers
const findAllDrivers = require("../controllers/findAllDrivers");
// obtener driver con ID en API
const findDriverById = require("../controllers/findDriverById");
// obtener driver con el nombre en API
const findDriverByName = require("../controllers/findDriverByName");

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
// Ruta por ID
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

module.exports = driversRouter;
