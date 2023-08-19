import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-person img-login"
                viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
              Login
            </Anchor>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

