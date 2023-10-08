import React from 'react';
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import "./CustomNavbar.css"


const CustomNavbar = () => {
  const jwtToken = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage (remove the JWT or any other stored data)
    localStorage.removeItem('token'); // Replace 'token' with the actual key you're using
    localStorage.removeItem('role');

    // Redirect to the home page
    navigate('/');
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        {/* Space for your icon */}
        <Row>
          <Col>
              {jwtToken && role === '0' ? (
                  <div className="box admin-box">
                    <span className="navbar-text text-white">Admin View</span>
                  </div>
                ) : (
                  <div className="box admin-box">
                    <span className="navbar-text text-white">General View</span>
                  </div>
                )}
          </Col>
          <Col>
              <Navbar.Brand href="/">
              <img
                src="bsma.webp" // Replace with the path to your icon image
                alt="Icon"
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Col>
        </Row>
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
            {jwtToken && role === '0' && ( <>
              <li className='nav-item'>
                <Link to='/inventoryView' className='nav-link text-white'> Inventory </Link>
              </li>
              <li className="nav-item">
                <Link to="/military-care-package-requests" className='nav-link text-white'> Package Requests </Link>
              </li>
              </>)}
            {!jwtToken &&
            <li className='nav-item'>
              <Link to='/login' className='nav-link text-white'> Login </Link>
            </li>}
            <li>
              <div id="google_translate_element"></div>
            </li>

            {jwtToken && (
              <>
                <li className='nav-item'>
                  <a onClick={handleLogout} className='nav-link text-white'>Logout</a>
                </li>
              </>
            )}

            {/* Add more links as needed */}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
