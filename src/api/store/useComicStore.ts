import { create } from "zustand";
import { Request } from "../service/Request";
import { Result } from '../charecter.request';
import { ResultComic } from "../comic.request";

export interface ComicStore {
    comics: ResultComic[]
    characters: Result[]
    addCharacter: () => void
    addComics: () => void
    offsetCharacter: number
    offsetComic: number
    loading: boolean
    loadingComic: boolean
    comicByTitle: ResultComic | null,
    characterByName: Result | null,
    getCharacterByName: (name: string) => void
    getCharacterById: (id: string) => void
    getComicByTitle: (title: string) => void
    getComicById: (id: string) => void
}

const useComicStore = create<ComicStore>()((set, get) => ({
    comics: [],
    characters: [],
    comicByTitle: null,
    characterByName: null,
    offsetComic: 0,
    offsetCharacter: 0,
    loading: false,
    loadingComic: false,
    addCharacter: async function(){
        const offset = get().offsetCharacter.toString()
        set(() => ({loading: true}))
        Request.getCharacters(offset).then( response => {
            set((state) => ({
                characters: state.characters.concat(response.results),
                offsetCharacter: state.offsetCharacter+=10,
                loading: false
            }))
        })
    },
    getCharacterByName: async function(name: string){
        set(() => ({loading: true}))
        Request.getCharacterByName(name).then( response => {
            set(() => ({
                characterByName: response.results[0] || null,
                loading: false
            }))
        })
    },

    getCharacterById: async function(id: string){
        set(() => ({loading: true}))
        Request.getCharacterById(id).then( response => {
            set(() => ({
                characterByName: response.results[0] || null,
                loading: false
            }))
        })
    },
    addComics: async function(){
        const offset = get().offsetComic.toString()
        set(() => ({loadingComic: true}))
        Request.getComics(offset).then(response => {
            set((state) => ({
                comics: state.comics.concat(response.results),
                offsetComic: state.offsetCharacter+=10,
                loadingComic: false
            }))
        })
    },
    getComicByTitle: async function(title: string){
        set(() => ({loadingComic: true}))
        Request.getComicByTitle(title).then( response => {
            set(() => ({
                comicByTitle: response.results[0] || null,
                loadingComic: false
            }))
        })
    },

    getComicById: async function(id: string){
        set(() => ({loadingComic: true}))
        Request.getComicById(id).then( response => {
            set(() => ({
                comicByTitle: response.results[0] || null,
                loadingComic: false
            }))
        })
    },
}))

export{useComicStore}