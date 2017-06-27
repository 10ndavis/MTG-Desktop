import React, { Component } from 'react';
import { FormGroup, FormControl, Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AddBinder extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={2} id="collectionMenuLeft">
            <Row>
              <Col xs={10} xsOffset={1} className="collectionMenuLeftItem">
                <FormGroup>
                  <FormControl className="searchBox" type="text" placeholder="Search Binders" />
                </FormGroup>
              </Col>
              <Col xs={10} xsOffset={1} className="collectionMenuLeftItem">
                <LinkContainer className="collectionLink" to='/Collection'>
                  <p>Add Binder</p>
                </LinkContainer>
              </Col>
              <Col xs={10} xsOffset={1} className="collectionMenuLeftItem">
                Clear
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <form>
              <FormGroup>
                <FormControl type="text" placeholder="Binder Name" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" placeholder="Description" />
              </FormGroup>
            </form>
          </Col>
      </Row>
    );
  }
}

export default AddBinder;
