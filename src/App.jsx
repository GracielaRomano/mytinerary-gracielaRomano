import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

import './App.css'
import Home from './pages/Home';



function App() {
  

  return (
    <>
   
      <Home />
      
      
    </>
  )
}
library.add( faChevronRight, faChevronLeft)
export default App
