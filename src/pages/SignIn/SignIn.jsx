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
                    <i class="bi bi-eye-slash eye-icon"></i>
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
{/* <main className='container-signIn fondo-signIn'>
      <Form className="form-signIn">
      <h3 className="title-signIn">Sign In</h3>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember"/> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
      
  </main>*/}
  
  

{/*<form className="form-signIn" action="/action_page.php">
        <h3 className="title-signIn">Sign In</h3>
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember"/> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
</form>*/}