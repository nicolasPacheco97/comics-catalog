import { useCallback, useEffect, useRef, useState } from "react"
import { popularCharacters } from "../../pages/home/home.constans"
import CustomTag from "../button/CustomeTag"
import wall from '../../assets/images/bg.jpg'
import { Link } from "react-router-dom"
import { paths } from "../../utils/routes"

interface Props {
    images: typeof popularCharacters
}

function Carousel({images}: Props) {
    const interval = useRef<ReturnType<typeof setTimeout> | number>(0)
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const startInterval = useCallback(() => {
        interval.current = setInterval(() => {
            const slideIndex = (currentSlide + 1) % images.length  
            setCurrentSlide(slideIndex)
        },5000)
    },[currentSlide, images])

    useEffect(() => {
        startInterval()
        return () => clearInterval(interval.current)
    },[startInterval])

    function showImage(index: number){
        clearInterval(interval.current)
        setCurrentSlide(index)
        startInterval()
    }

    return <div className='h-full w-full flex justify-center flex-col relative '>
    <div className="relative h-full w-full">
        <span className="h-full w-full absolute top-0 right-0 mask-image">
            <img className="object-cover object-center w-full h-full" alt="wallpaper" src={wall}/>
        </span>
      {images.map((item, inx) => (
          <div className=" w-full h-full absolute flex justify-center" key={item.name}>
            <div className={`w-full h-full max-w-7xl duration-[2000ms] ease-in-out relative ${inx === currentSlide ? 'opacity-100 z-10': 'opacity-0 z-0'}`}>
                <img src={item.thumbnail} alt={item.name} className="h-[min(500px,100%)] absolute top-[calc(50%-192px)] right-0 md:right-0 md:left-[10%] z-0"/>
                <span className="text-white font-marvel text-5xl md:text-[5rem] absolute bottom-[80px] z-10 uppercase block text-center w-full" >{item.name}</span>
                <div className="absolute top-1/3 w-[min(100%,500px)] left-0 md:left-1/3 text-left h-full">
                    <CustomTag title={`#${item.id}`}/>
                    <div className=" px-3 md:px-0 w-full min-h-[250px] flex flex-col justify-end gap-4">
                        <p className="glass p-4 w-full hidden md:block">{item.description}</p>
                        <div className="flex justify-center min-h-full">
                            <Link to={{
                                pathname: `/${paths.searchCharacter}`,
                                search: `?id=${item.id}`
                            }} className="uppercase bg-red-600 px-5 py-2">Show more</Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      ))}
      <div className="flex justify-center gap-5 mb-5 absolute bottom-5 w-full mt-[-40px] z-10 items-center">
      {images.map((_, inx) => (
          <button className={`border-none cursor-pointer rounded-full w-4 h-4 hover:bg-opacity-100 ${inx === currentSlide ? 'bg-white': 'bg-dark-carbon bg-opacity-10'}`} onClick={() => showImage(inx)} key={inx}></button>
      ))}
      </div>
    </div>
  </div>
}

export default Carousel