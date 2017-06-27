import React, { Component } from 'react';
import {Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

class LoginPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLogin(pwd, email) {
    axios.post('https://prod-mtg-app.herokuapp.com/signin', {
        email: email,
        password: pwd
      })
      .then(function (response) {
        console.log("response from server ", response.config.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleEmailChange(e) {
     this.setState({email: e.target.value});
  }
  handlePasswordChange(e) {
     this.setState({password: e.target.value});
  }

  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} smOffset={1} sm={2}>
              Email
            </Col>
            <Col sm={6}>
              <FormControl name="Email" type="email" placeholder="Email" onChange={this.handleEmailChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} smOffset={1} sm={2}>
              Password
            </Col>
            <Col sm={6}>
              <FormControl name="Password" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={3} xsOffset={0} xs={6}>
              <Checkbox>Remember me</Checkbox>
            </Col>
            <Col smOffset={1} sm={2} xsOffset={0} xs={6}>
              <LinkContainer className="collectionLink" to='/SignUp'>
                <a href="" id="notSignedUp">Not Signed Up?</a>
              </LinkContainer>

            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={6}>
              <Button onClick={() => {
                this.handleLogin(this.state.password, this.state.email);
              }}>
                Sign In
              </Button>
            </Col>
            <Col smOffset={3} sm={6}>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
