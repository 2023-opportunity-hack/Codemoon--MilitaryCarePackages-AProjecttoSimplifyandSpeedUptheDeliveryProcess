import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import "./CustomNavbar.css"

const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        {/* Space for your icon */}
        <Navbar.Brand href="#">
          <img
            src="bsma.webp" // Replace with the path to your icon image
            alt="Icon"
            width="100"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Navbar links can go here */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className='nav-link text-white'> Home </Link> 
            </li>
            <li className="nav-item">
              <Link to="/donations" className='nav-link text-white'> Donations </Link>
            </li>
            <li className='nav-item'>
              <Link to='/inventoryView' className='nav-link text-white'> Inventory </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
