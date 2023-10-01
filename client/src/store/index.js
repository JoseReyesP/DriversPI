import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

// Botones/Opciones para filtrar por team, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los drivers por orden alfabético y por fecha año de nacimiento.
// Paginado: el listado de drivers se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 9 drivers por página.

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
