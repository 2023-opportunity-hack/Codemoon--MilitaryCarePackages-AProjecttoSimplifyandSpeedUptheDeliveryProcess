import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './CustomNavbar.css';

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
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
