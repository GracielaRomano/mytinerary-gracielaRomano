import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebook, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './App.css'
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
   
      <Home />
     <Footer />
      
    </>
  )
}
library.add( faFacebook,faXTwitter, faInstagram)
export default App
