import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import './App.css'
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
   
      <Home />
     
      
    </>
  )
}
library.add( faFacebook)
export default App
