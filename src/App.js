import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Main from './Components/Main/Main';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
