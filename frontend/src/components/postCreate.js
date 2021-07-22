import React, { Component } from 'react';
import axios from 'axios';
import auth from '../auth/authService';

export default class PostCreate extends Component {
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

  handleFormSubmit() {
    const token = auth.getCurrentUser();
    axios.post(
      '/s/r/new_post',
      { title: this.state.title, content: this.state.content },
      { headers: { Authorization: `Bearer ${token.accessToken}` } }
    );
  }

  render() {
    return (
      <div>
        <div className='container mt-5 mb-5'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-md-6'>
              <div className='card px-5 py-5'>
                <h5 className='mt-3'>Enter a title and your posts content</h5>
                <form onSubmit={this.handleFormSubmit}>
                  <div class='form-group'>
                    <label for='title'>Title</label>
                    <input
                      value={this.state.title}
                      onChange={this.handleTitleChange}
                      type='text'
                      class='form-control'
                      id='title'
                      placeholder='Enter your posts title here'
                    />
                  </div>
                  <div class='form-group'>
                    <label for='content'>Content</label>
                    <textarea
                      value={this.state.content}
                      onChange={this.handleContentChange}
                      class='form-control textarea'
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
