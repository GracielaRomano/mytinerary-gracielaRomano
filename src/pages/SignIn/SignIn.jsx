import { useRef, useState} from "react";
import { Link as Anchor, useNavigate } from "react-router-dom"
import google from "/img/google.png";
import facebook from "/img/facebook.png"
import './SignIn.css'
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import user_actions from "../../store/actions/users"
const { signin } = user_actions;



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
        let html = result.payload.messages[0].map(each=>`<p>${each[0].toUpperCase() + each.substr(1)}</p>`).join("") 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          html: html
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
                  <div className='field button-field'>
                    <input type="button" className="button-login" value="Login"  onClick={handleSignIn}></input>
                  </div>
                </form>
                <div className='form-link'>
                    <span>New user?</span><Anchor to={'/SignUp'} className='signup-link' >SignUp</Anchor>
                </div>
              </div>
              <div className='line'></div>
              
              <div className='media-options'>
                <a href='#' className='field google'>
                <img className="google-img" src ={google} />
                   <span> Continue with Google </span>
                </a>
              </div>
              <div className='media-options'>
                <a href='#' className='field facebook'>
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
