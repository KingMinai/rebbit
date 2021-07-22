import React, { Component } from 'react';
import logo from '../rabbit.svg';
import '../App.css';
import AuthService from '../auth/authService';
import { withRouter } from 'react-router-dom';

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleFormSubmit() {
    AuthService.register(this.state.username, this.state.email, this.state.password);
    this.props.history.push('/u/login');
  }

  render() {
    return (
      <div>
        <div className='container mt-5 mb-5'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-md-6'>
              <div className='card px-5 py-5'>
                <img
                  src={logo}
                  width='50'
                  height='50'
                  className='d-inline-block align-center logo'
                  alt=''
                />
                <h5 className='mt-3'>Enter your details to join the rebbit network!</h5>
                <form onSubmit={this.handleFormSubmit}>
                  <div className='form-input'>
                    {' '}
                    <i className='fa fa-envelope'></i>{' '}
                    <input
                      value={this.state.username}
                      onChange={this.handleUsernameChange}
                      type='text'
                      className='form-control'
                      placeholder='user name'
                    />{' '}
                  </div>
                  <div className='form-input'>
                    {' '}
                    <i className='fa fa-user'></i>{' '}
                    <input
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                      type='text'
                      className='form-control'
                      placeholder='email address'
                    />{' '}
                  </div>
                  <div className='form-input'>
                    {' '}
                    <i className='fa fa-lock'></i>{' '}
                    <input
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      type='text'
                      className='form-control'
                      placeholder='password'
                    />{' '}
                  </div>
                  <button type='submit' className='btn btn-primary mt-4 signup'>
                    Sign up
                  </button>
                </form>
                <div className='text-center mt-4'>
                  {' '}
                  <span>Already a member?</span>{' '}
                  <a
                    href='#!'
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/u/login');
                    }}
                    className='text-decoration-none'
                  >
                    Login
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserSignup);
