import "./paginacion.css";
import { FC } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { EstadoGlobal } from "../../store/store";
import { cambioPaginaThunk } from "../../acciones/personajes.acciones";
/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion: FC = () => {
  const useSelector: TypedUseSelectorHook<EstadoGlobal> = useReduxSelector;
  const dispatch = useDispatch();

  const infoPag = useSelector((state) => state.personajes.infoPag);
  const { next, prev, count, pages } = infoPag;

  const paginaSiguiente = () => {
    dispatch(cambioPaginaThunk(next));
  };
  const paginaAnterior = () => {
    dispatch(cambioPaginaThunk(prev));
  };

  return (
    <div className="paginacion">
      <button
        disabled={prev === null ? true : false}
        className={"primary"}
        onClick={paginaAnterior}
      >
        Anterior
      </button>
      <button
        disabled={next === null ? true : false}
        className={"primary"}
        onClick={paginaSiguiente}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
