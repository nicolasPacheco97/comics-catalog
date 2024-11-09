import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { paths } from '../../utils/routes'
import menu from '../../assets/icons/menu.svg'
import close from '../../assets/icons/close.svg'

function Header(){
    return <header className='sticky my-3 top-0 p-5 z-50 flex justify-center px-10'>
        <section className="bg-light-carbon shadow-xl rounded-3xl p-4 flex justify-between items-center w-full max-w-7xl relative">
            <Link to={paths.home}>
                <picture>
                    <img src={logo} alt='Marvel Comics' width='150'/>
                </picture>
            </Link>
            <label htmlFor='menu' className='px-5 md:hidden'>
                <img alt='menu' src={menu} width={30} />
            </label>
            <input type='checkbox' id='menu' className='hidden [&:checked~nav]:scale-y-100'/>
            <nav className='text-carbon w-full top-0 right-0 font-marvel flex flex-col md:flex-row gap-5 md:gap-10 text-lg justify-center tracking-wider uppercase px-5 absolute md:relative bg-light-carbon p-5 pt-20 md:p-0 rounded-2xl scale-y-0 md:scale-100 origin-top duration-300'>
                <label htmlFor='menu' className='px-5 md:hidden absolute top-5 right-3'>
                    <img alt='menu' src={close} width={40} />
                </label>
                <Link to={`/${paths.base}/${paths.searchComic}`}>Comics</Link>
                <Link to={`/${paths.base}/${paths.searchCharacter}`}>Characters</Link>
            </nav>
        </section>
    </header>
}

export default Header