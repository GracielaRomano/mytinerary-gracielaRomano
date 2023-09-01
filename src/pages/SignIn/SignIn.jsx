import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavBar from "../../components/NavBar";
import { Link as Anchor } from "react-router-dom"
import google from "/img/google.png";
import facebook from "/img/facebook.png"
import './SignIn.css'
import SignUp from '../SignUp/SignUp';


export default function SignIn() {
  return (
    <>
     <NavBar />
     < div className='container-signin'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
              <h1 className="title-signIn">MyTynerary</h1>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='form login'>
              <div className='form-content'>
                <h3 className='title-login'>Login</h3>
                <form className='form-login'>
                  <div className='field input-field'>
                    <input type="email" placeholder='Email' className='input'/>
                  </div>
                  <div className='field input-field'>
                    <input type="password" placeholder='Password' className='password'/>
                    <i className="bi bi-eye-slash eye-icon"></i>
                  </div>
                  <div className='form-link'>
                    <a href="#" className='forgot-pass'>Forgot password?</a>
                  </div>
                  <div className='field button-field'>
                    <button>Login</button>
                  </div>
                </form>
                <div className='form-link'>
                    <span>New user?</span><Anchor to={'/SignUp'} className='signup-link'>SignUp</Anchor>
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
      </div>
    </> 
  );
}
