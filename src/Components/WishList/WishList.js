import React, { Component } from 'react';
import Card from '../Collection/Card';
import { Col, Row, FormGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';


class WishList extends Component {

    constructor(props) {
    super(props);
    this.state = {
      wishList: []
    };
  }

  componentDidMount() {
    axios.get(`https://prod-mtg-app.herokuapp.com/user`)
      .then(res => {
        const wishList = res.data.WishList;
        this.setState({
          wishList: wishList
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
          <Col xs={12} md={10}>
            {this.state.wishList.map(function(card) {
               return <Card key={card.title} card={card}/>
            })}
          </Col>
        </Row>
    );
  }
}

export default WishList;
