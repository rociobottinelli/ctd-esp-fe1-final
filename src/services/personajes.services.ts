import { Personaje } from "../types/personaje.types";

export const buscarPersonajes = async (nombre?: string): Promise<Personaje[]> => {
    let parametros = "?"
    if(nombre){
        parametros += `name=${nombre}`
    }

    return fetch(`https://rickandmortyapi.com/api/character/${parametros}`)
        .then(data => data.json())
        .then(data => data.results)
}