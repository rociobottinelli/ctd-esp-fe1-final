import { InfoPag } from "../types/infoPag.types";
import { Personaje } from "../types/personaje.types";

/**
 * Función buscarPersonajes() devuelve un array de personakes desde la API,
 * permitiendo el filtrado y orden según la query que se le concatene
 *
 * @author Bottinelli Rocio<rociobottinelli@gmail.com>
 * @param {string | undefined} nombre Nombre del personaje a buscar
 * @returns {Promise<Personaje[]>} retorna un array que contiene personajes
 */

export const buscarPersonajes = async (
  nombre?: string
): Promise<Personaje[]> => {
  let parametros = "?";
  if (nombre) {
    parametros += `name=${nombre}`;
  }

  return fetch(`https://rickandmortyapi.com/api/character/${parametros}`)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};

/**
 * Función cambioPagina() devuelve los personajes por página,
 * permitiendo el filtrado y orden según la query que se le concatene
 *
 * @author Bottinelli Rocio<rociobottinelli@gmail.com>
 * @param {string} url
 * @returns {Promise<[Personaje[], infoPag]>} retorna el array de personajes y data para manipular la paginacion
 */

export const cambioPagina = async (
  url: string
): Promise<[Personaje[], InfoPag]> => {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};
