import row from '../../assets/icons/row.svg'
import plus from '../../assets/icons/plus.svg'
import { ReactNode, useRef, useState } from "react";
import { Link } from 'react-router-dom';

interface Props{
    children: ReactNode[]
    to: string
}

function MiniCarousel({ children, to }: Props){
    const carousel = useRef<HTMLDivElement>(null)
    const [activeSlide, setActiveSlide] = useState(0)
    const widthArticle = useRef<HTMLAnchorElement>(null)

    const clicks = {
        0: children.length,
        430: children.length,
        860: children.length - 1,
        1279: children.length - 2
    }

    function manageWidth(){
        const screenWidth = carousel.current?.offsetWidth || 1280 
        const widths = Object.keys(clicks).filter(click => Number(click) < (screenWidth + 40))
        const width = widths[widths.length - 1]
        return clicks[width as unknown as keyof typeof clicks]
    }

    const handleRight = () => {
        const manageWidths = manageWidth()
        if(activeSlide === manageWidths){
            carousel.current!.style.transform = `translateX(0px)`
            setActiveSlide(0)
        }else {
            const currentWidthCard = widthArticle.current?.offsetWidth || 390
            setActiveSlide(prev => ++prev)
            const nextSlide = (activeSlide + 1) * (currentWidthCard + 40)
            carousel.current!.style.transform = `translateX(-${nextSlide}px)`
        }
    }

    const handleLeft = () => {
        const manageWidths = manageWidth()
        const currentWidthCard = widthArticle.current?.offsetWidth || 390
        if(activeSlide === 0){
            const nextSlide = (currentWidthCard + 40) * (manageWidths)
            carousel.current!.style.transform = `translateX(-${nextSlide}px)`
            setActiveSlide(manageWidths)
        }else {
            setActiveSlide(prev => --prev)
            const nextSlide = (activeSlide - 1)  * (currentWidthCard + 40)
            carousel.current!.style.transform = `translateX(-${nextSlide}px)`
        }
    }

    return <>
        <span className="absolute p-5 bg-white bg-opacity-15 rounded-full hover:bg-opacity-50 top-[calc(50%-40px)] left-0 z-20" onClick={handleLeft}>
            <img src={row} alt="row to left" className="w-10 rotate-180"/>
        </span>
        <section className="relative w-full h-full z-10 duration-300" ref={carousel}>
            <div className="absolute top-0 left-0 flex flex-nowrap gap-10 w-full">
                {children}
                <Link to={to} state={'home'} ref={widthArticle} className="min-w-[min(390px,100%)] bg-dark-carbon min-h-[450px] shadow-2xl rounded-xl overflow-hidden p-5 cursor-pointer hover:scale-[1.01] duration-300 flex justify-center items-center">
                    <span className="p-5 bg-white bg-opacity-15 rounded-full hover:bg-opacity-50">
                        <img src={plus} alt="agregar más información" className="w-10"/>
                    </span>
                </Link>
            </div>
        </section>
        <span className="absolute p-5 bg-white bg-opacity-15 rounded-full hover:bg-opacity-50 top-[calc(50%-40px)] right-0 z-20" onClick={handleRight}>
            <img src={row} alt="row to right" className="w-10"/>
        </span>
    </>
}

export default MiniCarousel