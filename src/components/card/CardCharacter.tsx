import { Link } from "react-router-dom"
import { Result } from "../../api/charecter.request"
import { paths } from "../../utils/routes"

interface Props {
    item: Result,
    responsive?:boolean
}

function CardCharacter({item, responsive=false}: Props){
    return <Link to={{
        pathname: `/${paths.base}/${paths.searchCharacter}`,
        search: `?id=${item.id}`
    }} className={`min-w-[min(390px,100%)] max-w-[min(390px,100%)] bg-dark-carbon shadow-2xl rounded-xl overflow-hidden cursor-pointer hover:scale-[1.01] duration-300 
    ${responsive?'flex md:flex-col md:min-h-[450px] p-2 md:p-5 gap-5':'flex flex-col min-h-[450px] p-5'}`}>
    <div className={`overflow-hidden rounded-xl ${responsive?'h-[88px] min-w-[100px] md:h-[360px] md:w-full md:mb-5 ':'h-[360px] w-full mb-5 '}`}>
        <img className="object-cover w-full h-full" src={item.thumbnail.path +"."+ item.thumbnail.extension} alt={item.name}/>
    </div>
    <div className="w-full">
        <h3 className="font-marvel text-3xl text-carbon text-left uppercase tracking-wider">{item.name}</h3>
        <span className="block text-left text-carbon">#{item.id}</span>
    </div>
</Link>
}

export default CardCharacter