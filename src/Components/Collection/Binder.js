import React, { Component } from 'react';
import { Col, Thumbnail, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



class Binder extends Component {

 constructor(props) {
    super(props);
    this.state = {
      path: "/Collection/ViewBinder/" + this.props.binder.title
    };
  }

  render() {
    return (
        <div className='binder'>
          <Col xs={12} md={4}>
            <Thumbnail src="http://cdn.manaclash.com/images/home/cards.png" alt="242x200">
              <h3>{this.props.binder.title}</h3>
              <p>{this.props.binder.description}</p>
              <p>
                <LinkContainer to={this.state.path}>
                  <Button onClick={()=>this.props.clickBinder(this.props.binder)} bsStyle="default">View</Button>
                </LinkContainer>
              </p>
            </Thumbnail>
          </Col>
        </div>
    );
  }
}

export default Binder;
