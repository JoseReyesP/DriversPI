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

/* obtener el equipo de un driver en la base de datos */
SELECT "Teams".*
FROM "Teams"
INNER JOIN "DriverTeams" ON "Teams"."ID" = "DriverTeams"."TeamID"
INNER JOIN "Drivers" ON "DriverTeams"."DriverID" = "Drivers"."ID"
WHERE "Drivers"."Nombre" = 'Luis';