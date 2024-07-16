import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import App from "../components/templates/App";
import Login from "../components/pages/Login";

const router = createBrowserRouter([ //recibe un array de todas las rutas del app
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home/> //pagina que se va renderizar
            },
            {
                path: "/productos",
                element: <Products/>
            }
        ]
    },
    {
        path:"/login",
        element: <Login/>
    }  
])

export default router