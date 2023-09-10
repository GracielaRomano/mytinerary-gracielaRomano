import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as Anchor } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import user_actions from "../store/actions/users";
const { signout } = user_actions;



function NavbarTransparent() {
  const user = useSelector((store) => store.users.user);
  let dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signout());
  };
  return (
    <Navbar collapseOnSelect expand="xl" className=" navbar-transparent">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src="/img/logoTrave.png" alt="Logo"/>
          <span className='logo-transparent'>My Tinerary</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Anchor to='/' className='links-nav item'>Home</Anchor>
            <Anchor to='/Cities' className='links-nav item'>Cities</Anchor>
          </Nav>
          <Nav>
          { Object.keys(user).length > 0? (
              <>
                <img className="photo-user" src={user.photo} alt="User" />
                {/*<span className="name-user">{user.name}</span>*/}
                <span className="btn-signout" onClick={handleSignOut}>Sign Out</span>
              </>
            ) : (
            <Anchor to='/SignIn' className="btn btn-primary btn-login" type="submit">
              <Login/>
            </Anchor>
             )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTransparent;






