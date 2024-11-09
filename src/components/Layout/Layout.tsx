import { Outlet, useLocation } from 'react-router-dom'
import Header from '../header/Header'
import { useEffect } from 'react';


function Layout (){
    const location = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
    return <section className='relative min-h-screen'>
        <Header/>
        <Outlet />
    </section>
}

export default Layout