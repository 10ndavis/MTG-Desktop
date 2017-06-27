import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">MTGInv</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/Collection">
                <NavItem eventKey={1}>Collection</NavItem>
              </LinkContainer>
              <LinkContainer to="/WishList">
                <NavItem eventKey={2}>Wish List</NavItem>
              </LinkContainer>
              <LinkContainer to="/Stocks">
                <NavItem eventKey={3}>Stocks</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/LoginPage">
                <NavItem eventKey={1}>Sign In</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
