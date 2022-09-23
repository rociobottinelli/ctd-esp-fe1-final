import "./filtros.css";
import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../../acciones/personajes.acciones";
import { useSelector } from "./grilla-personajes.componente";

/**
 * Componente funcional Filtros() va a procesar el ingreso de datos en el input para poder pedir data a la API
 *
 * @author Bottinelli Rocio<rociobottinelli@gmail.com>
 * @returns {JSX.Element} retorna un array que contiene personajes
 */

const Filtros: FC = () => {
  const dispatch = useDispatch();
  const { busqueda } = useSelector((state) => state.personajes);

  /**
   * Función buscarPersonajesTodos() va a despachar una nueva accion con la llamada a la api informando sobre los nuevos datos
   *
   * @author Bottinelli Rocio<rociobottinelli@gmail.com>
   * @returns {Event} e
   */
  const buscarPersonajesTodos = async (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(buscarPersonajesThunk(e.target.value));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        autoFocus={true}
        name="nombre"
        value={busqueda}
        onChange={(e) => buscarPersonajesTodos(e)}
      />
    </div>
  );
};

export default Filtros;
