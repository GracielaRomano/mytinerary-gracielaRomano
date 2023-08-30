import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import CityDetails from "./pages/CityDetails/CityDetails"
import MainLayout from "./layouts/MainLayout"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import NotFound from "./pages/NotFound"




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
          { path: "/", element: <Home /> },
          { path: "/index", element: <Home />},
          { path: "/home", element: <Home />},
          { path: "/*", element: <NotFound />}
      ],
    },
    {path: "/signin",element: <SignIn />},
    { path: "/signup", element: <SignUp />},
    { path: "/cities", element: <Cities /> },
    { path: "/city/:city_id", element: <CityDetails />},
    
]);

export default router;