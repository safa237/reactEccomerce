import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Navbar.css';
import logoImg from './Images/logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function NavbarCom() {
  const cart = useSelector(state => state.cart);
 

  return(
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logoImg} className="logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Link class="nav-link active" aria-current="page" to={"/"}>
             <p> Home </p>
            </Link>
            <Link class="nav-link" to="/about">
             <p> About</p> 
            </Link>
            <Link class="nav-link" to="/contact">
              <p>Contact</p>
            </Link>
            <Link class="nav-link" to="/cart">
             <p> Cart ({cart.length}) </p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavbarCom;
