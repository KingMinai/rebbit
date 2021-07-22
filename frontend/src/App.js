import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import auth from './auth/authService';

import Navbar from './components/navbar';
import Feed from './components/feed';
import UserSignup from './components/userSignup';
import UserLogin from './components/userLogin';
import PostCreate from './components/postCreate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postId: '',
      isLI: auth.getCurrentUser() ? true : false,
    };

    this.setPostID = this.setPostID.bind(this);
  }

  setPostID = (id) => {
    this.setState({ postId: id });
  };

  render() {
    return (
      <div className='App'>
        <Navbar isLI={this.state.isLI} />
        <Switch>
          <Route exact path='/'>
            <Feed type='home' />
          </Route>
          <Route exact path='/u/'>
            <Feed type='user' postId={this.setPostID} />
          </Route>
          <Route exact path='/u/signup' component={UserSignup} />
          <Route exact path='/u/login' component={UserLogin} />
          <Route exact path='/postcreate'>
            <PostCreate type='create' />
          </Route>
          <Route exact path='/postupdate'>
            <PostCreate type='update' id={this.state.postId} />
          </Route>
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
