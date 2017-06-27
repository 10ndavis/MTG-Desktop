import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

class SignUp extends Component {
  render() {
    return (
      <div>
        <Form horizontal>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel}  smOffset={1} sm={2}>
              Username
            </Col>
            <Col sm={6}>
              <FormControl type="Text" placeholder="Username" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel}  smOffset={1} sm={2}>
              Email
            </Col>
            <Col sm={6}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} smOffset={1} sm={2}>
              Password
            </Col>
            <Col sm={6}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel}  smOffset={1} sm={2}>
              Confirm Password
            </Col>
            <Col sm={6}>
              <FormControl type="password" placeholder="Confirm Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={6}>
              <Button type="submit">
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SignUp;
