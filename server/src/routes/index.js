const { Router } = require("express");
const driversRouter = require("./driversRouter");

const router = Router();

router.use("drivers", driversRouter);

module.exports = router;
