import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { Personaje } from "../../types/personaje.types";
import { useDispatch } from "react-redux";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { EstadoGlobal } from "../../store/store";
import {
  agregarFav,
  borrarFav,
} from "../../acciones/favoritos.acciones";
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

interface PropsTarjetaPersonaje {
  personaje: Personaje;
}

const useSelector: TypedUseSelectorHook<EstadoGlobal> = useReduxSelector;

const TarjetaPersonaje = ({
  personaje,
}: PropsTarjetaPersonaje): JSX.Element => {
  const dispatch = useDispatch();

  const favoritos = useSelector((state) => state.personajesFavoritos.favoritos);
  let esFavorito = favoritos.some((fav) => fav.id === personaje.id);

  const toggleFavs = () => {
    if (esFavorito == false) {
      dispatch(agregarFav(personaje));
    } else {
      dispatch(borrarFav(personaje));
    }
  };

  return (
    <div className="tarjeta-personaje">
      <img src={personaje.image} alt={personaje.name} />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito onClick={toggleFavs} esFavorito={esFavorito} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
