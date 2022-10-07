import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CarSidebar from './CarSidebar';


const MyNavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    localStorage.setItem("token", "")
    navigate("/login")
  }

    return (
      <>
      <Navbar  bg="primary" variant='dark' expand="lg" className='py-3 '>
      <Container >
        <Navbar.Brand to='/' as={Link}>E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav   className="me-auto ">
            <Nav.Link as={Link} to="/products/:id">Products</Nav.Link>
          <Nav.Link as={Link} to="/login"><i className="fa-solid fa-user"></i></Nav.Link>
            <Nav.Link as={Link} to="/purchases"><i className="fa-solid fa-basket-shopping"></i></Nav.Link>
            <Nav.Link  onClick={handleShow}> <i className="fa-solid fa-cart-shopping" ></i></Nav.Link> 
            <Nav.Link onClick={logout}><i className="fa-solid fa-right-from-bracket"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CarSidebar show={show} handleClose={handleClose}/>


      </>
    );
};

export default MyNavBar;