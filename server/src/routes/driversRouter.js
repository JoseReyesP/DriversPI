const { Router } = require("express");
const driversRouter = Router();

// obtener driver con ID en API
const findDriverById = require("../controllers/findDriverById");

module.exports = driversRouter;
