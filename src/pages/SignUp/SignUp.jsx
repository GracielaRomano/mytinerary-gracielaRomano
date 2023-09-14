import { Link as Anchor, Navigate } from "react-router-dom"
import NavBar from "../../components/NavBar";
import facebook from "/img/facebook.png"
import { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignUpGoogle from "../../components/SignUpGoogle";
import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../../apiUrl";
import './SignUp.css'
import { useSelector } from 'react-redux';
import store from '../../store/store';

export default function SignUp() {
  const user = useSelector((store) => store.users.user);

  const [countries, setCountries] = useState([]);
  const [formSuccess,setFormSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?orderBy=name')  // Realiza una solicitud a la API de países ordenados alfabéticamente
      .then((response) => {
        // Extrae los nombres de los países de la respuesta
        const countryNames = response.data.map((country) => country.name.common);
        countryNames.sort()
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (event) => {
    setFile(event.currentTarget.files[0]);
  };
  
  return (
    <>
    {formSuccess && (
      <Navigate to="/SignIn" replace={true} />
    )}

    { Object.keys(user).length >0 && Swal.fire({
          title: 'Welcome to MyTinerary',
          html: '<img src="/img/viajes.gif" alt="Viajes">',
        }) && (
      <Navigate to="/" replace={true} />
    )}

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
                <Formik
                  initialValues={{
                    name:'',
                    lastName:'',
                    photo:'',
                    country:'',
                    mail:'',
                    password:''
                  }}
                  validate={(values) =>{
                    let errors = {};
                    console.log(values)
                    console.log(file)
                    if(!values.name){
                      errors.name = "Please enter a name"
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                      errors.name='The name can only contain letters and spaces'
                    }
                    if(!values.lastName){
                      values.lastName = ""
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)){
                      errors.lastName='The lastname can only contain letters and spaces'
                    }
                    if(!values.mail){
                      errors.mail = 'Please enter an email'
                    }else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
                      errors.mail = 'The email must have the format (algo@algo.com), it may contain letters, numbers,hyphens'
                    }
                    if(!values.password){
                      errors.password = 'Please enter a password'
                    }else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(values.password)){
                      errors.password = 'The password must be 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter,It may have other symbols'
                    }
                    if(!values.country){
                      errors.country='Please enter a country'
                    }
                    return errors;
                  }}
                  onSubmit={async (values, {resetForm}) =>{
                    try{
                      let fileExist = false
                      if (file && file.name){
                        values.photo = 'http://localhost:8080/uploads/'+file.name
                         fileExist = true
                      }
                      await axios.post(apiUrl+'auth/signup', values)

                      if (fileExist) {
                        const formData = new FormData();
                        formData.append('photo', file);
                        await axios.post(apiUrl+'auth/uploadphoto', formData);
                      }
                      resetForm();
                      Swal.fire({
                        title: 'You registered successfully, go to login',
                        width: 600,
                        padding: '3em',
                        color: '#716add',
                        background: '#fff url(/images/trees.png)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/img/valija.gif")
                          right top
                          no-repeat
                        `
                      })
                      console.log('Formulario enviado')
                      setFormSuccess(!formSuccess);
                      setTimeout(()=> setFormSuccess(false), 5000)
                    } catch(err){
                      console.log(err)
                      console.log(err.response.data.message)
                      let alertError = err.response.data.message
                      
                      Swal.fire({
                        title: 'Oops... something is not right!',
                        icon:'error' ,
                        html: '<img src="/img/error.gif" alt="Viajes"><br>'+alertError,
                      })
                    }
                  }}>
                  {( {errors} ) => (
                    <Form className="form-signup">
                      <div className="row">
                        <div className="grid-form">
                          <div className='grid input-field'>
                              <Field  type="text" name='name' id='name' placeholder='Name' className='input'/>
                              <ErrorMessage name='name' component={()=> (
                                <div className="errors">{errors.name}</div>
                              )}/>
                          </div>
                          <div className='grid input-field'>
                            <Field type="text" name='lastName' id='lastName' placeholder='Last Name' className='input'/>
                            <ErrorMessage name='lastName' component={()=> (
                                <div className="errors">{errors.lastName}</div>
                              )}/>
                          </div>
                          <div className='grid input-field'>
                            <input type="file" name="photo" id="photo" className="input" onChange={handleFileChange}/>
                            <ErrorMessage name='photo' component={()=> (
                                <div className="errors">{errors.photo}</div>
                              )}/>
                          </div>
                          <div className='grid input-field'>
                            <Field  name='country' id='country' as='select' className="select" >
                              <option value="">Country</option>
                              {countries.map((countryName) => (
                                <option key={countryName} value={countryName}>
                                  {countryName}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name='country' component={()=> (
                                <div className="errors">{errors.country}</div>
                                )}/>
                          </div>
                          <div className='grid input-field'>
                            <Field  type="email" name='mail' id='mail' placeholder='Email' className='input'/>
                            <ErrorMessage name='mail' component={()=> (
                                <div className="errors">{errors.mail}</div>
                              )}/>
                          </div>
                          <div className='grid input-field'>
                            <Field  type={showPassword ? "text" : "password"} 
                            name='password' id='password'placeholder='Password' className='password'/>
                            <ErrorMessage name='password' component={()=> (
                                <div className="errors">{errors.password}</div>
                              )}/>
                            <i className={`bi bi-eye${showPassword ? "" : "-slash"} eye-icon`}
                              onClick={handleTogglePassword}></i>
                          </div>
                        </div>
                      </div>
                      <div className='grid button-field'>
                        <input className="buton-signup" type="submit" value="Sign Up"/>
                        {formSuccess && <p className="exit">Form sent successfully!</p>}
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className='form-link-signup'>
                    <span>Already have an account?</span><Anchor to='/SignIn' className='link-signup'>Login</Anchor>
                </div>
              </div>
              <div className='line'></div>
              <div className="google-button">
                  <SignUpGoogle/>
              </div>
              
              {/* <div className='media-options-signup'>
                <a href='#' className='grid google'>
                  <img className="google-img" src ={google} />
                  <span> Continue with Google </span>
                </a>
              </div> */}
              <div className='media-options-signup'>
                <a href='#' className='signup-facebook'>
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

