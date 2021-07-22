import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth from '../auth/authService';
import axios from 'axios';

class ContentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      author: this.props.author,
      id: this.props.i,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    const token = auth.getCurrentUser();
    axios
      .post(
        '/s/r/delete',
        { id: this.state.id },
        { headers: { Authorization: `Bearer ${token.accessToken}` } }
      )
      .then(window.location.reload());
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.postId(this.state.id);
    this.props.history.push('/postupdate');
  }

  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{this.state.title}</h5>
            <p className='card-text'>{this.state.content}</p>
            <footer className='blockquote-footer text-right'>
              <cite title='Source Title'>{this.state.author}</cite>{' '}
              {this.props.type === 'user' ? (
                <div className='card-body'>
                  <a href='#!' onClick={this.handleUpdate} className='card-link'>
                    Update
                  </a>
                  <a href='#!' onClick={this.handleDelete} className='card-link'>
                    Delete
                  </a>
                </div>
              ) : (
                <div />
              )}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ContentCard);
