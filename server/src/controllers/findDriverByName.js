const axios = require("axios");

const findDriverByName = async (name) => {
  const driver = await axios.get(
    `http://localhost:5000/drivers?name.forename=${name}`
  );
  return driver;
};

module.exports = findDriverByName;
