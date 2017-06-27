import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../HomePage/Home';
import Stocks from '../Stocks/Stocks';
import Collection from '../Collection/Collection';
import LoginPage from '../LoginPage/LoginPage';
import WishList from '../WishList/WishList';
import AddBinder from '../AddBinder/AddBinder';
import ViewBinder from '../AddBinder/ViewBinder';
import SignUp from '../LoginPage/SignUp';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentBinder: {}
    }
  }

  handleClickedBinder(binder) {
    localStorage.setItem('currentBinder', JSON.stringify(binder));
  }

  render() {
    return (
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Collection' render={() => (<Collection clickBinder={this.handleClickedBinder.bind(this)} />)}/>
            <Route exact path='/Stocks' component={Stocks}/>
            <Route exact path='/LoginPage' component={LoginPage}/>
            <Route exact path='/SignUp' component={SignUp}/>
            <Route exact path='/WishList' component={WishList}/>
            <Route exact path='/AddBinder' component={AddBinder}/>
            <Route exact path='/Collection/ViewBinder/*' render={() => (<ViewBinder currentBinder={this.state.currentBinder}/>)} />
          </Switch>
        </div>
    );
  }
}

export default Main;
