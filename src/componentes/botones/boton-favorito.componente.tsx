import { Personaje } from "../../types/personaje.types";
import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 * @author Bottinelli Rocio <rociobottinelli@gmail.com>
 * @param {Personaje} personaje
 * @returns un JSX element
 */

interface PropsBotonFavorito {
  onClick: any;
  esFavorito: boolean;
}

const BotonFavorito = ({
  esFavorito,
  onClick,
}: PropsBotonFavorito): JSX.Element => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
  );
};

export default BotonFavorito;
