import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import './Donations.css'

function Donations() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [itemType, setItemType] = useState('');
  const [dataItems, setDataItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission here and send the data to your backend or perform any other necessary actions.
    axios.post('http://localhost:8000/itemInventory/postItemInventoryInfo', {
        itemName: itemName,
        itemQuantity: itemQuantity,
        itemType: itemType
      }).then(res => {
        console.log(res);
      });
    console.log({
      itemName,
      itemQuantity,
      expiryDate,
      itemType,
    });

    // Clear the form fields after submission
    setItemName('');
    setItemQuantity('0');
    setExpiryDate('');
    setItemType('');
  };

  useEffect(() => {
    axios.get('http://localhost:8000/itemInventory/getItemInventoryInfo?lowestCount=5')
      .then(res => {
          // console.log(res.data);
          setDataItems(res.data);

      });
  }, []);

  return (
    <Container className='pt-5'>
      <h4 className='flashy-highlight'>📢📢 Join Us in Supporting Our Troops: Donate Essential Items Today!</h4>

      <p className='text-center'>
      Our dedicated military members endure demanding conditions during their service. Your generosity in 
      donating essential items, such as socks, hygiene products, and non-perishable snacks, can profoundly 
      impact their well-being. Your support will aid us in providing these heroes with the crucial necessities they require.
      </p>

      <blockquote className='blockquote'>
        Below is a list of items that will greatly assist us in supporting our troops:
      </blockquote>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Item Quantity</th>
            <th>Item Type</th>
          </tr>
        </thead>
        <tbody>
          {dataItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.itemName}</td>
              <td>{item.itemQuantity}</td>
              <td>{item.itemType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>DONATION FORM</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
            <Col>
              <Form.Group controlId="itemName">
                <Form.Label>Donation Item Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter item name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="itemQuantity">
                <Form.Label>Donation Item Quantity:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter item quantity"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="expiryDate">
              <Form.Label>Expiry Date (Optional):</Form.Label>
              <Form.Control
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="itemType">
              <Form.Label>Item Type:</Form.Label>
              <Form.Control
                as="select"
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                required
              >
                <option value="Cookies">Cookies</option>
                <option value="Bread">Bread</option>
                <option value="Canned food">Canned food</option>
                <option value="Socks">Socks</option>
                <option value="Toothbrush">Toothbrush</option>
                <option value="Toilet paper">Toilet paper</option>
                <option value="Deodorant">Deodorant</option>
              </Form.Control>
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
    </Container>
  );
}

export default Donations;