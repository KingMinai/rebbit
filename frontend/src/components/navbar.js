import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth from '../auth/authService';

import logo from '../rabbit.svg';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a
            className='navbar-brand'
            href='#!'
            onClick={(e) => {
              e.preventDefault();
              this.props.history.push('/');
              window.location.reload();
            }}
          >
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top logo'
              alt=''
            />
            rebbit
          </a>

          <div className='navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a
                  className='nav-link'
                  // eslint-disable-next-line
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    auth.getCurrentUser()
                      ? this.props.history.push('/postcreate')
                      : this.props.history.push('/u/login');
                  }}
                >
                  Add Post
                </a>
              </li>
              <li className='nav-item'></li>
            </ul>
          </div>
          <ul className='navbar-nav'>
            {!this.props.isLI ? (
              <li>
                <a
                  className='nav-link'
                  // eslint-disable-next-line
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push('/u/signup');
                  }}
                >
                  Signup
                </a>
              </li>
            ) : (
              <a
                className='nav-link'
                // eslint-disable-next-line
                href='#!'
                onClick={(e) => {
                  e.preventDefault();
                  this.props.history.push('/');
                  auth.logout();
                  window.location.reload();
                }}
              >
                Logout
              </a>
            )}
            <li>
              {!this.props.isLI ? (
                <a
                  className='nav-link'
                  // eslint-disable-next-line
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push('/u/login');
                  }}
                >
                  Login
                </a>
              ) : (
                <a
                  className='nav-link'
                  // eslint-disable-next-line
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push('/u/');
                    window.location.reload();
                  }}
                >
                  My posts
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default withRouter(Navbar);
