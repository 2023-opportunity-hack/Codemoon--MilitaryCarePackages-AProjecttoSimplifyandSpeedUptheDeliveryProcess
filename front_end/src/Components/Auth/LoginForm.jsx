import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here
    axios.post('http://localhost:8000/auth/login', {
      ...formData
    }).then(res => {
      // console.log(res);

      const token = res.data.token;
      console.log(token);
      const setJWTInLocalStorage = (token) => {
        localStorage.setItem('token', token);
      };
      
      setJWTInLocalStorage(token);
    });
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <Container>
        
      <Form onSubmit={handleSubmit}>
        <Row>
            <Col>
                <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                </Form.Group>
            </Col>
        </Row>
        <Button variant="primary" type="submit">
            Login
        </Button>
      </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
