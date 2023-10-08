import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, FormCheck, FormGroup } from "react-bootstrap";
import './CustomerForm.css'
import axios from 'axios';

class CustomerForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      state: '',
      country: '',
      zipCode: '',
      email: '',
      selectedGender: 'female',
      selectedBranch: 'Army',
      selectedCareType: 'Feminine'
    };
  }

  // Define a handler function to update state when inputs change
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Define a function to handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(this.state.receiverState)

    axios.post("http://localhost:8000/userInfo/postUserInfo", {
      receiverFirstName: this.state.firstName,
    // receiverMiddleName: ,
    receiverLastName: this.state.lastName,
    // receiverCompanyName: ,
    receiverAddressLine1: this.state.address1,
    receiverAddressLine2: this.state.address2,
    // receiverAddressLine3: ,
    // receiverAddressCity: ,
    receiverState: this.state.state,
    receiverCountry: this.state.country,
    receiverZipCode: this.state.zipCode,
    // receiverPhone: ,
    receiverEmail: this.state.email,
    receiverGender: this.state.selectedGender,
    receiverBranch: this.state.selectedBranch,
    receiverCarePackageType: this.state.selectedCareType,
    })
    .then(res=>{
      if(res.data.result==1){
        alert("Data save successfully")
        this.setState({
          firstName: '',
          lastName: '',
          address1: '',
          address2: '',
          state: '',
          country: '',
          zipCode: '',
          email: '',
          selectedGender: 'female',
          selectedBranch: 'Army',
          selectedCareType: 'Feminine'
        });
      
      }
      else{
        alert("Fail to save data")
      }
    })
    .catch(err=>{
      console.log(err)
    })

    console.log(this.state);
  };

  handleGenderChange = (event) => {
    this.setState({ selectedGender: event.target.value });
  };

  handleBranchChange = (event) => {
    this.setState({ selectedBranch: event.target.value });
  }

  handleCareTypeChange = (event) => {
    this.setState({ selectedCareType: event.target.value });
  }

  render() {
    return (
      <Container>
        <div className='form-container'>
          <h1>Care-package Request Form</h1>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Label required>First Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      required
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="address1">
                    <Form.Label>Address 1:</Form.Label>
                    <Form.Control
                      type="text"
                      name="address1"
                      value={this.state.address1}
                      required
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="address2">
                    <Form.Label>Address 2 (Optional):</Form.Label>
                    <Form.Control
                      type="text"
                      name="address2"
                      value={this.state.address2}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="state">
                    <Form.Label>State:</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      required
                      value={this.state.state}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="country">
                    <Form.Label>Country:</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      required
                      value={this.state.country}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="zipCode">
                    <Form.Label>Zip Code:</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipCode"
                      required
                      value={this.state.zipCode}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      required
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="gender">
                    <Form.Label>Gender: </Form.Label>
                    <div>
                      <FormCheck
                        type="radio"
                        label="Male"
                        name="gender"
                        value="male"
                        checked={this.state.selectedGender === 'male'}
                        onChange={this.handleGenderChange}
                      />
                      <FormCheck
                        type="radio"
                        label="Female"
                        name="gender"
                        value="female"
                        checked={this.state.selectedGender === 'female'}
                        onChange={this.handleGenderChange}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group controlId="branch">
                    <Form.Label>Branch:</Form.Label>
                    <Form.Control
                      as="select"
                      value={this.state.selectedBranch}
                      onChange={this.handleBranchChange}>
                      <option value="Army">Army</option>
                      <option value="Navy">Navy</option>
                      <option value="Military">Military</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="carepackage">
                    <Form.Label>Care package Type:</Form.Label>
                    <Form.Control
                      as="select"
                      value={this.state.selectedBranch}
                      onChange={this.handleBranchChange}>
                      <option value="Feminine">Feminine</option>
                      <option value="Masculine">Masculine</option>
                      <option value="Socks">Socks</option>
                      <option value="Toothbrush">Toothbrush</option>
                      <option value="Deoderant">Deoderant</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <br />
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
        </div>
      </Container>
    );
  }
}

export default CustomerForm;
