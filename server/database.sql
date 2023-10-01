CREATE DATABASE driversDB

CREATE TABLE drivers (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL, 
    Descripcion TEXT, 
    Imagen VARCHAR(200),
    Rating VARCHAR(100),
    Fecha_nacimiento VARCHAR(100)
);

CREATE TABLE teams (
    ID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);