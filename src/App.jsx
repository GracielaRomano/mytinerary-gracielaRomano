import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router";


function App() {
  

  return (
    <>
   
   <RouterProvider router={router} />
      
    </>
  )
}
library.add( faFacebook,faXTwitter, faInstagram)
export default App
