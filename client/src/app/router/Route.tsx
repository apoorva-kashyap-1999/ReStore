import { createBrowserRouter } from "react-router-dom"
import App from "../layout/App"
import { HomePage } from "../features/home/HomePage"
import { Catalog } from "../features/catalog/Catalog"
import { AboutPage } from "../features/about/AboutPage"
import { ContactPage } from "@mui/icons-material"
import { ProductDetail } from "../features/catalog/ProductDetail"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/catalog',
                element: <Catalog />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
            {
                path: '/catalog/:id',
                element: <ProductDetail />,
            }
        ]
    }
])
