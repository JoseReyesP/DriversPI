const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Driver", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Fecha_nacimiento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Nacionalidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Origen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
