import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import {
  buscarPersonajes,
  cambioPagina,
} from "../services/personajes.services";
import { EstadoGlobal } from "../store/store";
import { InfoPag } from "../types/infoPag.types";
import { Personaje } from "../types/personaje.types";

export interface IsFetchingPersonajes extends Action {
  type: "IS_FETCHING_PERSONAJES";
  nombre: string;
}

export interface IsSuccessPersonajes extends Action {
  type: "IS_SUCCESS_PERSONAJES";
  personajes: Personaje[];
  infoPag: InfoPag;
}

export interface IsErrorPersonajes extends Action {
  type: "IS_ERROR_PERSONAJES";
  error: string;
}

export const isFetchingPersonajes: ActionCreator<IsFetchingPersonajes> = (
  nombre: string
) => {
  return {
    type: "IS_FETCHING_PERSONAJES",
    nombre: nombre,
  };
};

export const isSuccessPersonajes: ActionCreator<IsSuccessPersonajes> = (
  personajes: Personaje[],
  infoPag: InfoPag
) => {
  return {
    type: "IS_SUCCESS_PERSONAJES",
    personajes: personajes,
    infoPag: infoPag,
  };
};

export const isErrorPersonajes: ActionCreator<IsErrorPersonajes> = (
  error: string
) => {
  return {
    type: "IS_ERROR_PERSONAJES",
    error: error,
  };
};

export interface BuscarPersonajesThunk
  extends ThunkAction<void, EstadoGlobal, unknown, PersonajesAcciones> {}

export const buscarPersonajesThunk = (
  nombre: string
): BuscarPersonajesThunk => {
  return async (dispatch, getState) => {
    dispatch(isFetchingPersonajes(nombre));
    try {
      const response = await buscarPersonajes(nombre);
      const [personajes, info] = response;
      dispatch(isSuccessPersonajes(personajes, info));
    } catch (error) {
      dispatch(isErrorPersonajes(error));
    }
  };
};

export const cambioPaginaThunk = (url: string): BuscarPersonajesThunk => {
  return async (dispatch, getState) => {
    try {
      const [personajes, info] = await cambioPagina(url);
      dispatch(isSuccessPersonajes(personajes, info));
    } catch (error) {
      dispatch(isErrorPersonajes(error));
    }
  };
};

export type PersonajesAcciones =
  | ReturnType<typeof isFetchingPersonajes>
  | ReturnType<typeof isSuccessPersonajes>
  | ReturnType<typeof isErrorPersonajes>;
