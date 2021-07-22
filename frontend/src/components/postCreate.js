import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import auth from '../auth/authService';

class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const token = auth.getCurrentUser();
    if (this.props.type === 'create') {
      axios
        .post(
          '/s/r/new_post',
          { title: this.state.title, content: this.state.content },
          { headers: { Authorization: `Bearer ${token.accessToken}` } }
        )
        .then(this.props.history.push('/u/'))
        .then(window.location.reload());
    }
    if (this.props.type === 'update') {
      axios
        .post(
          '/s/r/update',
          { title: this.state.title, content: this.state.content, id: this.props.id },
          { headers: { Authorization: `Bearer ${token.accessToken}` } }
        )
        .then(this.props.history.push('/u/'))
        .then(window.location.reload())
        .catch(console.log('err'));
    }
  }

  render() {
    return (
      <div>
        <div className='container mt-5 mb-5'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-md-6'>
              <div className='card px-5 py-5'>
                <h5 className='mt-3'>
                  {this.props.type === 'create'
                    ? 'Enter a title and your posts content'
                    : 'Enter a new title and new content'}
                </h5>
                <form onSubmit={this.handleFormSubmit}>
                  <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                      value={this.state.title}
                      onChange={this.handleTitleChange}
                      type='text'
                      className='form-control'
                      id='title'
                      placeholder='Enter your posts title here'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <textarea
                      value={this.state.content}
                      onChange={this.handleContentChange}
                      className='form-control textarea'
                      id='content'
                      placeholder='Enter your posts content here'
                      rows='6'
                    ></textarea>
                  </div>
                  <button type='submit' className='btn btn-primary mt-4 signup'>
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostCreate);
