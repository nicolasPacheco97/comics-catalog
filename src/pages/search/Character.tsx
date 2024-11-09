import { useComicStore } from "../../api/store/useComicStore"
import CardCharacter from "../../components/card/CardCharacter"
import plus from '../../assets/icons/plus.svg'
import puff from '../../assets/icons/puff.svg'
import { useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import wall from '../../assets/images/bg.jpg'
import CardCharacterName from "../../components/card/CardCharacterName"

function SearchCharacter(){
    const {characters, addCharacter, loading, getCharacterByName, characterByName, getCharacterById} = useComicStore()
    const [search] = useSearchParams()
    const idHero = search.get('id') || null
    const input = useRef<HTMLInputElement>(null)
    const [alreadySearch, setAlreadySearch] = useState(false)

    const fr = useRef(true)
    useEffect(() => {
        if(fr){
            addCharacter()
        }
    },[addCharacter])

    const frh = useRef(true)
    useEffect(() => {
        if(idHero && frh){
            setAlreadySearch(true)
            window.scrollTo(0, 0);
            getCharacterById(idHero)
        }
    },[idHero, getCharacterById])

    function handleClick(){
        addCharacter()
    }

    function handleSearch(){
        getCharacterByName(input.current?.value as string)
        setAlreadySearch(true)
    }

    function handleChange(){
        if(!characterByName) setAlreadySearch(false)
    }

    return <>
        <section className="relative flex flex-col items-center px-5">
            <span className="h-full max-h-[720px] w-full absolute top-0 right-0 mask-image z-0 mt-[-130px]">
                <img className="object-cover object-center w-full h-full" alt="wallpaper" src={wall}/>
            </span>
            {alreadySearch && !characterByName && !loading && <p className="z-10">NOT MATCHES FOUNT</p>}
            {alreadySearch && loading && <img src={puff} alt="loader"/>}
            {alreadySearch && <CardCharacterName item={characterByName} visible={!loading}/>}
            <div className="w-full z-10 my-5 max-w-7xl flex items-center">
                <input placeholder="Search comic" className="bg-white rounded-l-2xl w-full px-5 py-2 text-carbon" ref={input} onChange={handleChange}/>
                <button className="uppercase bg-red-600 px-5 py-2" onClick={handleSearch}>search</button>
            </div>
            <div className="max-w-7xl w-full flex flex-wrap gap-3 md:gap-10 z-10 justify-center">
                {characters?.map((item) => (
                    <CardCharacter item={item} responsive={true} key={item.id}/>
                ))}
                <article onClick={handleClick} className="min-w-[min(390px,100%)] bg-dark-carbon shadow-2xl rounded-xl overflow-hidden cursor-pointer hover:scale-[1.01] duration-300  justify-center items-center flex md:flex-col md:min-h-[450px] p-2 md:p-5 gap-5">
                    {!loading ? <span className="p-5 bg-white bg-opacity-15 rounded-full hover:bg-opacity-50">
                        <img src={plus} alt="agregar más información" className="w-10"/>
                    </span> : <img src={puff} alt="loader"/>}
                </article>
            </div>
        </section>
    </>
}

export default SearchCharacter