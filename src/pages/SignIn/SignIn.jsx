import { useRef, useState} from "react";
import { Link as Anchor, useNavigate, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import facebook from "/img/facebook.png"
import NavBar from "../../components/NavBar";
import SignInGoogle from "../../components/SignInGoogle";
import './SignIn.css'
import Swal from "sweetalert2";
import user_actions from "../../store/actions/users"
const { signin } = user_actions;

import store from '../../store/store';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const pass_signin = useRef("");
  const dispatch = useDispatch();
 
  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: pass_signin.current.value,
    };

    dispatch(signin({ data }))
    .then( (result)=>{
      if (result.payload.token){
        Swal.fire({
          title: 'Welcome to MyTinerary',
          html: '<img src="/img/viajes.gif" alt="Viajes">',
        })
        navigate('/')
      } else {
        console.log( result.payload.messages)
        let message = result.payload.messages[0]
        let html =""
        if (message.constructor === Array){
           html = result.payload.messages[0].map(each=>`<p>${each[0].toUpperCase() + each.substr(1)}</p>`).join("") 
        } else {
           html =`<p>${message[0].toUpperCase() + message.substr(1)}</p>`
        }

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          html: '<img src="/img/error.gif" alt="Viajes"><br>' +html
        })
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  let user = useSelector(store=>store.users.user)
  console.log(user);
  
  return (
    <>
    { Object.keys(user).length >0 && Swal.fire({
          title: 'Welcome to MyTinerary',
          html: '<img src="/img/viajes.gif" alt="Viajes">',
        }) && (
      <Navigate to="/" replace={true} />
    )}

     <NavBar />
     < div className='container-signin'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
              <h1 className="title-signIn">MyTynerary</h1>
          </div>
            <div className='form login'>
              <div className='form-content'>
                <h3 className='title-login'>Login</h3>
                <form className='form-login'>
                  <div className='field input-field'>
                    <input ref={mail_signin} type="email" name="mail_signin" id="mail_signin" defaultValue="" placeholder='Email' className='input'/>
                  </div>
                  <div className='field input-field'>
                   <input ref={pass_signin} type={showPassword ? "text" : "password"} 
                        name='password' id='password'placeholder='Password' className='password'/>
                        <i className={`bi bi-eye${showPassword ? "" : "-slash"} eye-icon`}
                          onClick={handleTogglePassword}></i>
                      </div>
                  <div className='form-link'>
                    <a href="#" className='forgot-pass'>Forgot password?</a>
                  </div>
                  <div className=' button-field'>
                    <input type="button" className="button-login" value="Login"  onClick={handleSignIn}></input>
                  </div>
                </form>
                <div className='form-link'>
                    <span>New user?</span><Anchor to={'/SignUp'} className='signup-link' >SignUp</Anchor>
                </div>
              </div>
              <div className='line'></div>
              <SignInGoogle/>
               {/* <div className='media-options'>
               
                 <a href='#' className='field google'>
                <img className="google-img" src ={google} />
                   <span> Continue with Google </span>
                </a>
              </div>  */}
              <div className='media-options'>
                <a href='#' className='facebook'>
                  <img className="facebook-icon" src ={facebook} />
                   <span> Continue with Facebook </span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </> 
  );
}
