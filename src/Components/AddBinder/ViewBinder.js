import React, { Component } from 'react';
import { Col, Row, FormGroup, FormControl, Thumbnail } from 'react-bootstrap';
import Card from '../Collection/Card';

class ViewBinder extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentBinder: JSON.parse(localStorage.getItem('currentBinder'))
    }
  }


  render() {
    return (
        <Row>
          <Col xs={12} md={2} id="collectionMenuLeft">
            <Row>
              <Col xs={10} xsOffset={1}>
                <div className="cardTitleLeft">
                  <h2>{this.state.currentBinder.title}</h2>
                </div>
                <br />
              </Col>
              <Col xs={10} xsOffset={1} className="collectionMenuLeftItem">
                <FormGroup>
                  <FormControl className="searchBox" type="text" placeholder="Search Cards" />
                </FormGroup>
              </Col>
              <Col xs={10} xsOffset={1} className="collectionMenuLeftItem">
                Add Card
              </Col>
              <Col xs={10} xsOffset={1} className="collectionMenuLeftItem">
                Delete Cards
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={7}>
            <form>
              <FormGroup>
                <FormControl type="text" placeholder="Card Name" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" placeholder="Card Set" />
              </FormGroup>
            </form>
          </Col>
          <Col xs={12} md={3}>
            <Thumbnail src="http://cdn.manaclash.com/images/home/cards.png" alt="242x200">
              <h3>card title</h3>
              <p>description</p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={12}>
            {this.state.currentBinder.cards.map(function(card) {
               return <Card card={card}/>
            })}
          </Col>
        </Row>
    );
  }
}

export default ViewBinder;
