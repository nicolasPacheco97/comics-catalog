import { ResultComic } from "../../api/comic.request"
import CustomTag from "../button/CustomeTag"

interface Props{
    item: ResultComic | null
    visible: boolean
}
function CardComicTitle({item, visible}: Props) {
    return <article className={`w-full max-w-7xl bg-dark-carbon shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row p-5 z-0 gap-5 duration-500 origin-top ${item && visible ? 'scale-y-100': 'scale-y-0'}`}>
    <div className={`overflow-hidden rounded-xl h-[360px] w-full`}>
        <img className="object-cover w-full h-full" src={item?.thumbnail.path +"."+ item?.thumbnail.extension} alt={item?.title}/>
    </div>
    <div className="w-full relative">
        <CustomTag title={`#${item?.id}`}/>
        <p className="mt-5 p-4 w-full hidden md:block">{item?.description}</p>
        <span className="text-white font-marvel text-5xl md:text-[5rem] uppercase block text-center w-full" >{item?.title}</span>
    </div>
</article>
}

export default CardComicTitle