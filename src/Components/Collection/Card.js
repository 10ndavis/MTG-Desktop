import React, { Component } from 'react';
import { Col, Thumbnail} from 'react-bootstrap';

class Card extends Component {


  render() {

    let cardURL = 'https://image.deckbrew.com/mtg/multiverseid/' + this.props.card.url + '.jpg';

    return (
        <div>
          <Col xs={12} md={3}>
            <Thumbnail src={cardURL} alt="242x200">
              <div className="cardText">
                {this.props.card.title} - x{this.props.card.quantity}
              </div>
            </Thumbnail>
          </Col>
        </div>
    );
  }
}

export default Card;
