import React, { Component } from 'react';
import ContentCard from './contentCard';
import axios from 'axios';
import auth from '../auth/authService';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.setPostId = this.setPostId.bind(this);
  }

  componentDidMount = () => {
    if (this.props.type === 'home') {
      axios.get('/s/r').then((res) => {
        this.setState({ data: res.data.posts });
      });
    } else if (this.props.type === 'user') {
      const token = auth.getCurrentUser();
      axios
        .get('/su/', { headers: { Authorization: `Bearer ${token.accessToken}` } })
        .then((res) => {
          this.setState({ data: res.data.posts });
        });
    }
  };
  setPostId(id) {
    this.props.postId(id);
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col' />
            <div className='col-10'>
              {this.state.data
                .slice(0)
                .reverse()
                .map((element) => {
                  let id = element._id;
                  let title = element.title;
                  let content = element.content;
                  let author = element.author;
                  return (
                    <ContentCard
                      key={id}
                      i={id}
                      title={title}
                      content={content}
                      author={author}
                      type={this.props.type}
                      postId={this.setPostId}
                    />
                  );
                })}
            </div>
            <div className='col' />
          </div>
        </div>
      </div>
    );
  }
}
