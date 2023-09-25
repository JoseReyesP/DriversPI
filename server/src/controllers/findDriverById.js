const axios = require("axios");

const findDriverById = async (id) => {
  const driver = await axios.get(`http://localhost:5000/drivers/${id}`);
  return driver;
};

module.exports = findDriverById;
