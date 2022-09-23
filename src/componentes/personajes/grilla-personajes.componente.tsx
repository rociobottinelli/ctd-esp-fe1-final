import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { FC, useEffect } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { EstadoGlobal } from "../../store/store";
import { buscarPersonajesThunk } from "../../acciones/personajes.acciones";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarPersonajesThunk(""));
  }, [dispatch]);

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
    if (!personajes || personajes.length === 0) return <div className="div-not-found">Lo sentimos, no encontramos el personaje que estás buscando</div>;
  return (
    <div className="grilla-personajes">
      {personajes.map((personaje) => {
        return <TarjetaPersonaje personaje={personaje} />;
      })}
    </div>
  );
};

export default GrillaPersonajes;
