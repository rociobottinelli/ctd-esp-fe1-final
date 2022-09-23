import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { FC } from "react";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { EstadoGlobal } from "../../store/store";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */

export const useSelector: TypedUseSelectorHook<EstadoGlobal> = useReduxSelector;

const GrillaPersonajes: FC = () => {
  const { personajes, status } = useSelector((state) => state.personajes);

  if (status === "fetching")
    return (
      <div className="div-carga">
        {" "}
        <div className="lds-circle">
          <div></div>
        </div>{" "}
        Todo listo para buscar a tu personaje favorito!{" "}
      </div>
    );

  return (
    <div className="grilla-personajes">
      {personajes.map((personaje) => {
        return <TarjetaPersonaje personaje={personaje} />;
      })}
    </div>
  );
};

export default GrillaPersonajes;
