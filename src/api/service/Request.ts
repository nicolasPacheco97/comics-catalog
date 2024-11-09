import { CharacterType } from "../charecter.request";
import { ComicRequest } from "../comic.request";

export class Request {
    static async getCharacters(offset: string): Promise<CharacterType>{
        return fetch('https://gateway.marvel.com:443/v1/public/characters?' + new URLSearchParams({
            apikey: import.meta.env.VITE_API_PUBLIC_KEY || '',
            limit: '10',
            offset
        })).then(response => response.json()).then(json => json.data)
    }

    static async getComics(offset: string): Promise<ComicRequest>{
        return fetch('https://gateway.marvel.com:443/v1/public/comics?' + new URLSearchParams({
            apikey: import.meta.env.VITE_API_PUBLIC_KEY || '',
            limit: '10',
            offset
        })).then(response => response.json()).then(json => json.data)
    }

    static async getCharacterByName(name: string): Promise<CharacterType>{
        return fetch('https://gateway.marvel.com:443/v1/public/characters?' + new URLSearchParams({
            apikey: import.meta.env.VITE_API_PUBLIC_KEY || '',
            name
        })).then(response => response.json()).then(json => json.data)
    }

    static async getCharacterById(id: string): Promise<CharacterType>{
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?` + new URLSearchParams({
            apikey: import.meta.env.VITE_API_PUBLIC_KEY || '',
        })).then(response => response.json()).then(json => json.data)
    }

    static async getComicByTitle(title: string): Promise<ComicRequest>{
        return fetch('https://gateway.marvel.com:443/v1/public/comics?' + new URLSearchParams({
            apikey: import.meta.env.VITE_API_PUBLIC_KEY || '',
            title
        })).then(response => response.json()).then(json => json.data)
    }

    static async getComicById(id: string): Promise<ComicRequest>{
        return fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?` + new URLSearchParams({
            apikey: import.meta.env.VITE_API_PUBLIC_KEY || '',
        })).then(response => response.json()).then(json => json.data)
    }
    
}