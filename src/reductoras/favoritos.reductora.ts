import { Reducer } from "@reduxjs/toolkit";
import { FavoritosAction } from "../acciones/favoritos.acciones";
import { Personaje } from "../types/personaje.types";

export interface FavoritosState {
  favoritos: Personaje[];
}

const initialState: FavoritosState = {
  favoritos: [],
};

const favoritosReducer: Reducer<FavoritosState, FavoritosAction> = (
  state = initialState,
  action
): FavoritosState => {
  switch (action.type) {
    case "AGREGAR_FAVORITO":
      return {
        ...state,
        favoritos: [...state.favoritos, action.personaje],
      };
    case "BORRAR_FAVORITO":
      return {
        ...state,
        favoritos: state.favoritos.filter(
          (favorito: Personaje) => favorito.id !== action.personaje.id
        ),
      };
    case "ELIMINAR_TODOS_FAVORITOS":
      return {
        ...state,
        favoritos: [],
      };
    default:
      return state;
  }
};

export default favoritosReducer;
