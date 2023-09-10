import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot} from'@fortawesome/free-solid-svg-icons'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import user_actions from "./store/actions/users";
const { signin_token } = user_actions;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      dispatch(signin_token());
    }
  }, []);

  return (
      <RouterProvider router={router} />
  )
}
library.add( faFacebook,faXTwitter, faInstagram,faLocationDot )
export default App
