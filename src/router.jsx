import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Cities from './pages/Cities'
import CityDetails from "./pages/CityDetails"


const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/home", element:<Home/>},
    { path: "/cities", element: <Cities/>},
    { path: "/city/:city_id", element: <CityDetails/>}
]);

export default router;