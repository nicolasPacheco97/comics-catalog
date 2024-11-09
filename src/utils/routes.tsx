import { Navigate } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from "../pages/home/Home"
import SearchCharacter from "../pages/search/Character"
import SearchComic from "../pages/search/Comic"

export const paths = {
    base: 'comics-catalog',
    home: '',
    searchCharacter: 'character',
    searchComic: 'comic',
} 

export const routes = {
    path: paths.base,
    element: <Layout />,
    children: [
        {
            path: paths.home,
            element: <Home />,
            id: "Home",
        },
        {
            path: paths.searchCharacter,
            element: <SearchCharacter />,
            id: "SearchCharacter",
        },
        {
            path: paths.searchComic,
            element: <SearchComic />,
            id: "SearchComic",
        },
    ],
    errorElement: <Navigate to={paths.home} />,
}


