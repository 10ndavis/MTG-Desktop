import React, { Component } from 'react';
import { Col, Row, FormGroup, FormControl, Thumbnail, Button } from 'react-bootstrap';
import Card from '../Collection/Card';
import axios from 'axios';

class ViewBinder extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentBinder: JSON.parse(localStorage.getItem('currentBinder')),
      cardTitle: "",
      cardSet: "",
      selectedCard: []
    }

    this.handleCardTitleChange = this.handleCardTitleChange.bind(this);
    this.handleCardSetChange = this.handleCardSetChange.bind(this);
    this.cardSearch = this.cardSearch.bind(this);
  }


  cardSearch(title, set) {
    axios.post('https://prod-mtg-app.herokuapp.com/cardSearch', {
        name: title,
        set: set
      })
      .then(function (response) {
        console.log(response.data[0]);
        this.setState({selectedCard: response.data[0]});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleCardTitleChange(e) {
     this.setState({cardTitle: e.target.value});
  }
  handleCardSetChange(e) {
     this.setState({cardSet: e.target.value});
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
                <FormControl type="text" placeholder="Card Name" onChange={this.handleCardTitleChange} />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" placeholder="Card Set" onChange={this.handleCardSetChange}/>
              </FormGroup>
              <FormGroup>
                <Col id="searchCard" smOffset={10} sm={2}>
                  <Button onClick={() => {
                    this.cardSearch(this.state.cardTitle, this.state.cardSet);
                  }}>
                    Search
                  </Button>
                </Col>
                <Col smOffset={3} sm={6}>
                </Col>
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
