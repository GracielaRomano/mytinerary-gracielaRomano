import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot} from'@fortawesome/free-solid-svg-icons'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router";
import { Provider} from 'react-redux';
import store from './store/store';

function App() {
  

  return (
    <Provider store={store}>
   
      <RouterProvider router={router} />
      
    </Provider>
  )
}
library.add( faFacebook,faXTwitter, faInstagram,faLocationDot )
export default App
