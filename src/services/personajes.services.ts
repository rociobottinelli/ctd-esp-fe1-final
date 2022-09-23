import { InfoPag } from "../types/infoPag.types";
import { Personaje } from "../types/personaje.types";


export const buscarPersonajes = async (nombre?: string): Promise<Personaje[]> => {
    let parametros = "?"
    if(nombre){
        parametros += `name=${nombre}`
    }

    return fetch(`https://rickandmortyapi.com/api/character/${parametros}`)
        .then(data => data.json())
        .then(data => [data.results, data.info])
}

export const cambioPagina = async(url:string): Promise<[Personaje[], InfoPag]> => {
    return fetch(url)
    .then((data) => data.json())
    .then((data) => [data.results, data.info])
};