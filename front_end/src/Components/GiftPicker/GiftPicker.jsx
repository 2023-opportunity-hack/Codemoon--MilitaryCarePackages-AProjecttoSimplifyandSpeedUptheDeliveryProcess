import axios from 'axios';
import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from "react";


const GiftPicker = () => {
    // Dummy inventory data
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <Container>
      <h3>GIFT PICKER</h3>
      <Row className='pt-2'>
        <Col>
          <Button variant="success" onClick={handleShow} size="lg" block>
            Feminine package
          </Button>
        </Col>
        <Col>
          <Button variant="info" onClick={handleShow} size="lg" block>
            Masculine package
          </Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={handleShow} size="lg" block>
            Custom package
          </Button>
        </Col>
      </Row>

      <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>My Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            This is the content of the modal. You can put any content here.
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    </Container>
    );
  };

export default GiftPicker