import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSide from '../LeftSide/LeftSide';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
const Header = () => {
  const {user,logOutUser}=useContext(AuthContext)
  const handlelogOut=()=>{
 logOutUser()
 .then(()=>{})
 .then(error=>{
  console.error(error)
})
  }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to="/">Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <>
                {
                  user?.uid ?
                  <>
                  <span>{user?.diplayName}</span>
                  <button onClick={handlelogOut}>signOut</button>
                  </>
                  :
                  <span>
                  <Link to="/login">login</Link> 
                  <Link to="/register">register</Link>
                  </span>
                }
              </>
              <Link to="/profile">
               {user?.photoURL? 
               <img  style={{height:'30px'}} roundedcircle="true"  src={user?.photoURL} alt="" />:<FaUser></FaUser>
               }
              </Link>
            </Nav>
            <div className='d-lg-none'>
         <LeftSide></LeftSide>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            );
};

export default Header;