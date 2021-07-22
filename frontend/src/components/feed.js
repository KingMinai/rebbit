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

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col' />
            <div className='col-10'>
              {this.state.data.map((element) => {
                let id = element._id;
                let title = element.title;
                let content = element.content;
                let author = element.author;
                return <ContentCard key={id} title={title} content={content} author={author} />;
              })}
            </div>
            <div className='col' />
          </div>
        </div>
      </div>
    );
  }
}
