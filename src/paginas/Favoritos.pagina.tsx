import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { EstadoGlobal } from "../store/store";
import { borrarTodosFavs } from "../acciones/favoritos.acciones";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */

const useSelector: TypedUseSelectorHook<EstadoGlobal> = useReduxSelector;
const PaginaFavoritos = () => {
  const favoritos = useSelector((state) => state.personajesFavoritos.favoritos);
  const dispatch = useDispatch();

  /**
   * Función eliminarTodosFav() va a encargarse de despachar la accion que vacía el array de personajes favoritos, borrando todos los seleccionados
   *
   * @author Bottinelli Rocio<rociobottinelli@gmail.com>
   */
  const eliminarTodosFavs = () => {
    dispatch(borrarTodosFavs());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={eliminarTodosFavs}>
          Borrar Todos
        </button>
      </div>
      <div className="grilla-personajes">
        {favoritos.map((fav) => {
          return <TarjetaPersonaje personaje={fav} />;
        })}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
