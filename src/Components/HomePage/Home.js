import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div>
        <img src={require('./gfx/logo.png')} alt="logo" height="500" width="500" />
          This is a home page!
          (what should go here? maybe some sort of MTG news?)
      </div>
    );
  }
}

export default Home;
