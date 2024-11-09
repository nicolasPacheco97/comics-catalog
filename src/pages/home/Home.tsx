// import video from '../../assets/video/video-marvel.webm'
import {useLayoutEffect, useRef } from 'react'
import Carousel from '../../components/carousel/Carousel'
import { popularCharacters } from './home.constans'
import { useComicStore } from '../../api/store/useComicStore'
import MiniCarousel from '../../components/carousel/MiniCarousel'
import CardCharacter from '../../components/card/CardCharacter'
import CardComic from '../../components/card/CardComic'
import { paths } from '../../utils/routes'
import loader from '../../assets/icons/puff.svg'

function Home(){
    const {addCharacter, addComics, characters, comics, loading} = useComicStore()

    const frc = useRef(true)
    useLayoutEffect(() => {
        if(frc && !characters.length) {
            frc.current = false
            addCharacter()
        }
    },[addCharacter, characters])

    const frcs = useRef(true)
    useLayoutEffect(() => {
        if(frcs && !comics.length) {
            frc.current = false
            addComics()
        }
    },[addComics, comics])

    return <main className='relative mt-[-150px]'>
        <div className='h-screen max-h-[780px] w-full'>
            <Carousel images={popularCharacters}/>
        </div>
        <div className='flex flex-col items-center my-20'>
            <h2 className='text-7xl font-marvel'>Characters Essentials</h2>
            <div className='max-w-7xl w-full p-5 overflow-hidden h-[550px] relative flex justify-center'>
                {!loading && characters.length? <MiniCarousel to={paths.searchCharacter}>
                {characters.map(item => (
                    <CardCharacter item={item} key={item.id}/>
                ))}
                </MiniCarousel>: <img src={loader} alt='loader'/>}
            </div>
        </div>
        <div className='flex flex-col items-center my-20'>
            <h2 className='text-7xl font-marvel'>Your favourite Comic</h2>
            <div className='max-w-7xl w-full p-5 overflow-hidden h-[650px] relative  flex justify-center'>
            {!loading && comics.length ?<MiniCarousel to={paths.searchComic}>
                {comics.map(item => (
                    <CardComic item={item} key={item.id}/>
                ))}
                </MiniCarousel>: <img src={loader} alt='loader'/>}
            </div>
        </div>
            {/* <video autoPlay muted loop controls={false} className='h-full w-full object-fill '>
                <source src={video} type="video/webm" />
                Your browser does not support the video tag.
            </video> */}
    </main>
}

export default Home