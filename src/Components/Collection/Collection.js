import React, { Component } from 'react';
import Binder from './Binder';
import { Col, Row, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';


class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      binders: []
    };
  }

  componentDidMount() {
    axios.get(`https://prod-mtg-app.herokuapp.com/user`)
      .then(res => {
        const binders = res.data.Binders;
        this.setState({
          binders: binders
        });
      });
  }

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

                <LinkContainer className="collectionLink" to='/addBinder'>
                  <p>Add Binder</p>
                </LinkContainer>
              </Col>
              <Col xs={10} xsOffset={1} className="collectionMenuLeftItem">
                Delete Binder
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={10}>
            {this.state.binders.map(function(binder) {
               return <Binder clickBinder={this.props.clickBinder} key={binder.title} binder={binder}/>
            }, this)}
          </Col>
        </Row>
    );
  }
}

export default Collection;
