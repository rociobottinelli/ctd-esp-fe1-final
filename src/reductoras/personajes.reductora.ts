import { Personaje } from "../types/personaje.types";
import { Reducer } from "@reduxjs/toolkit";
import { PersonajesAcciones } from "../acciones/personajes.acciones";

interface EstadoPersonajes {
  busqueda: string;
  status: "fetching" | "success" | "error";
  personajes: Personaje[];
  error: string | null;
}

const estadoInicial: EstadoPersonajes = {
  busqueda: "",
  status: "fetching",
  personajes: [],
  error: null,
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
