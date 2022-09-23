import { Action, ActionCreator } from "@reduxjs/toolkit";
import {Personaje} from "../types/personaje.types";

//crear interfaces
export interface AgregarFavAction extends Action {
  type: "AGREGAR_FAVORITO";
  personaje: Personaje;
}

export interface BorrarFavAction extends Action {
  type: "BORRAR_FAVORITO";
  personaje: Personaje;
}

export interface BorrarTodosFavAction extends Action {
  type: "ELIMINAR_TODOS_FAVORITOS";
}

export const agregarFav: ActionCreator<AgregarFavAction> = (
  personaje: Personaje
) => {
  return {
    type: "AGREGAR_FAVORITO",
    personaje,
  };
};

export const borrarFav: ActionCreator<BorrarFavAction> = (
  personaje: Personaje
) => {
  return {
    type: "BORRAR_FAVORITO",
    personaje,
  };
};

export const borrarTodosFavs: ActionCreator<
  BorrarTodosFavAction
> = () => {
  return {
    type: "ELIMINAR_TODOS_FAVORITOS",
  };
};

export type FavoritosAction =
  | AgregarFavAction
  | BorrarFavAction
  | BorrarTodosFavAction
