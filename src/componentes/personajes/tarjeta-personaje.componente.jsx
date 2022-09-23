import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import {Personaje} from "../../types/personaje.types"

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface PropsTarjetaPersonaje{
    personaje: Personaje;
}
const TarjetaPersonaje = ({personaje}: PropsTarjetaPersonaje) => {

    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={false} />
        </div>
    </div>
}

export default TarjetaPersonaje;