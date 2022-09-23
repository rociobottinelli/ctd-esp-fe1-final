import "./filtros.css";
import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../../acciones/personajes.acciones";
import { useSelector } from "./grilla-personajes.componente";

const Filtros: FC = () => {
  const dispatch = useDispatch();
  const {busqueda} = useSelector((state) => state.personajes)

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
