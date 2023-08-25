import { Link as Anchor } from "react-router-dom"
import NavBar from "../../components/NavBar";
import google from "/img/google.png";
import facebook from "/img/facebook.png"
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";
import './SignUp.css'

export default function SignUp() {
  const name = useRef();
  const lastName = useRef();
  const photo = useRef();
  const country = useRef();
  const mail = useRef();
  const password = useRef();

 async function handleSignUp(){
  try{
    let data ={
      name:name.current.value,
      lastName: lastName.current.value,
      photo: photo.current.value,
      country: country.current.value,
      mail: mail.current.value,
      password: password.current.value
    }
   await axios.post(
      apiUrl+'users/',
      data
    )
    console.log(data);
  } catch(err){
    console.log(err)
  }
}
  return (
    <>
    <NavBar />
      <div className='container-signup'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
              <h1 className="signup-title">MyTynerary</h1>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='signup'>
              <div className='signup-content'>
                <h3 className="title-signup">Sign Up</h3>
                <form className="form-signup">
                  <div className="row">
                    <div className="grid-form">
                      <div className='grid input-field'>
                          <input ref={name} type="text" name='name' id='name' placeholder='Name' className='input'/>
                      </div>
                      <div className='grid input-field'>
                        <input ref={lastName} type="text" name='lastName' id='lastName' placeholder='Last Name' className='input'/>
                      </div>
                      <div className='grid input-field'>
                        <input ref={photo} type="text" name='photo' id='photo' placeholder='Photo' className='input'/>
                      </div>
                      <div className='grid input-field'>
                        <input ref={country} type="text" name='country' id='country' placeholder='country' className='password'/>
                      </div>
                      <div className='grid input-field'>
                        <input ref={mail} type="email" name='mail' id='mail' placeholder='Email' className='input'/>
                      </div>
                      <div className='grid input-field'>
                        <input ref={password} type="password" placeholder='Password' className='password'/>
                        <i className="bi bi-eye-slash eye-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className='grid button-field'>
                    <input className="buton-signup" type="button" value="Sign Up" onClick={handleSignUp}/>
                  </div>
                </form>
                <div className='form-link-signup'>
                    <span>Already have an account?</span><Anchor to='/SignIn' className='link-signup'>Login</Anchor>
                </div>
              </div>
              <div className='line'></div>
              
              <div className='media-options-signup'>
                <a href='#' className='grid google'>
                <img className="google-img" src ={google} />
                   <span> Continue with Google </span>
                </a>
              </div>
              <div className='media-options-signup'>
                <a href='#' className='grid facebook'>
                  <img className="facebook-icon" src ={facebook} />
                   <span> Continue with Facebook </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
