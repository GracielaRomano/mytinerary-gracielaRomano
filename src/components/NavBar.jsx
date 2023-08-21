import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import { Link as Anchor } from "react-router-dom"


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="xl" className=" navbar-background">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src="img/logoTrave.png" alt="Logo"/>
          <span className='logo-font'>My Tinerary</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Anchor to='/' className='links-nav'>Home</Anchor>
            <Anchor to='/Cities' className='links-nav'>Cities</Anchor>
          </Nav>
          <Nav>
            <Anchor to='/SignIn' className="btn btn-primary btn-login" type="submit">
              <Login/>
              Login
            </Anchor>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

