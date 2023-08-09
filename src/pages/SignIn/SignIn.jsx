import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavBar from "../../components/NavBar";
import './SignIn.css'


export default function SignIn() {
  return (
    <>
    <NavBar/>
    <main className='container-signIn fondo-signIn'>
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
      
  </main>
  </>
);
}
  

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