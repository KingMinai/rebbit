import React, { Component } from 'react';

export default class ContentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      author: this.props.author,
    };
  }
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{this.state.title}</h5>
            <p className='card-text'>{this.state.content}</p>
            <footer className='blockquote-footer text-right'>
              <cite title='Source Title'>{this.state.author}</cite>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
