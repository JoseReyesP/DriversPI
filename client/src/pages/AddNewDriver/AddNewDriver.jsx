import React from "react";
import "./AddNewDriver.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewDriver = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:3001/drivers/teams");
        console.log(response.data);
      } catch (error) {
        console.log("Error al obtener datos", error.message);
      }
    };
    fetchData();
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let imagen =
      event.target.querySelector('input[name="imagen"]').value == ""
        ? "https://img.freepik.com/fotos-premium/piloto-f1-espera-que-comience-carrera-conceptualizacion-generativa-ai_666746-1409.jpg"
        : event.target.querySelector('input[name="imagen"]').value;
    ("https://img.freepik.com/fotos-premium/piloto-f1-espera-que-comience-carrera-conceptualizacion-generativa-ai_666746-1409.jpg");

    let nombre = event.target.querySelector('input[name="nombre"]').value;
    let apellido = event.target.querySelector('input[name="apellido"]').value;
    let descripcion = event.target.querySelector(
      'textarea[name="descripcion"]'
    ).value;
    let rating = event.target.querySelector('input[name="rating"]').value;
    let dateArray = event.target
      .querySelector('input[name="dob"]')
      .value.split("-");
    console.log(dateArray);
    dob = dateArray[0] + "-" + dateArray[1] + "-" + dateArray[2];
    let nacionalidad = event.target.querySelector(
      'input[name="nacionalidad"]'
    ).value;
    let teams = event.target.querySelector('textarea[name="teams"]').value;

    let caracteresEspeciales = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
    if (
      caracteresEspeciales.test(nombre) ||
      caracteresEspeciales.test(apellido) ||
      caracteresEspeciales.test(nacionalidad)
    ) {
      alert(
        "algunos campos contienen caracteres especiales. Por favor, corrígelos."
      );
      return false;
    }
    let data = {
      conductor: {
        Nombre: nombre,
        Apellido: apellido,
        Imagen: imagen,
        Descripcion: descripcion,
        Rating: rating,
        Fecha_nacimiento: dob,
        Nacionalidad: nacionalidad,
        Url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
        Origen: "DB",
      },
      teams: teams.split(", "),
    };
    try {
      const postData = async () => {
        let post = await axios.post("http://localhost:3001/drivers", data);
        console.log(post.data);
      };
      postData();
      navigate("/drivers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"containerNewDriver"}>
      <img
        src={
          "https://img.freepik.com/fotos-premium/piloto-f1-espera-que-comience-carrera-conceptualizacion-generativa-ai_666746-1409.jpg"
        }
      />
      <h2>🏁 Nuevo conductor 🏁</h2>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            placeholder="https://img.freepik.com/fotos-premium/piloto-f1-espera-que-comience-carrera-conceptualizacion-generativa-ai_666746-1409.jpg"
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        <div>
          <label>Descripcion:</label>
          <textarea name="descripcion" />
        </div>
        <div>
          <label>Fecha de nacimiento:</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div>
          <label>Nacionalidad:</label>
          <input type="text" id="nacionalidad" name="nacionalidad" />
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" id="rating" name="rating" />
        </div>
        <div>
          <label>equipos:</label>
          <textarea name="teams" />
        </div>
        <div>
          <label>Pagina web personal:</label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="http://en.wikipedia.org/wiki/Lewis_Hamilton"
          />
        </div>
        <input type="submit" value={"🏁 Guardar 🏁"} />
      </form>
    </div>
  );
};

export default AddNewDriver;
