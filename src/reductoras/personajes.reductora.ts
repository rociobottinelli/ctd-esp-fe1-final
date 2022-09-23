import { Personaje } from "../types/personaje.types";
import { Reducer } from "@reduxjs/toolkit";
import { PersonajesAcciones } from "../acciones/personajes.acciones";
import { InfoPag } from "../types/infoPag.types";

interface EstadoPersonajes {
  busqueda: string;
  status: "fetching" | "success" | "error";
  personajes: Personaje[];
  error: string | null;
  infoPag: InfoPag;
}

const estadoInicial: EstadoPersonajes = {
  busqueda: "",
  status: "fetching",
  personajes: [],
  error: null,
  infoPag: { count: 0, pages: 0, next: "", prev: "" },
};

const personajesReductora: Reducer<EstadoPersonajes, PersonajesAcciones> = (
  estado = estadoInicial,
  action
) => {
  switch (action.type) {
    case "IS_FETCHING_PERSONAJES":
      return {
        ...estado,
        busqueda: action.nombre,
        status: "fetching",
        error: null,
      };
    case "IS_SUCCESS_PERSONAJES":
      return {
        ...estado,
        status: "success",
        personajes: action.personajes,
        error: null,
        infoPag: action.infoPag,
      };
    case "IS_ERROR_PERSONAJES":
      return {
        ...estado,
        status: "error",
        personajes: [],
        error: action.error,
      };

    default:
      return estado;
  }
};

export default personajesReductora;
