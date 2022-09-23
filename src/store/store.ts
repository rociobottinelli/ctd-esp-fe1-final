import { combineReducers } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import personajesReductora from "../reductoras/personajes.reductora";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import favoritosReducer from "../reductoras/favoritos.reductora";
const rootReducer = combineReducers({
 

  // Acá van todas las funciones reductoras
  personajes: personajesReductora,
  personajesFavoritos: favoritosReducer
});

// solo para Typescript - Nos va a conseguir el tipado de cada reducer
export type EstadoGlobal = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<EstadoGlobal> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
