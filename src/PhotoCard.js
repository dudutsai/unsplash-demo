import React, { Component } from 'react';

export default class PhotoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo,
      photoUrl: this.props.photoUrl,
      user: this.props.user,
      userLink: this.props.userLink
    }
  }

  render() {
    return (
      <div>
        <div>
          Photo by <a href={this.state.userLink}>{this.state.user}</a>
        </div>
        <a href={this.state.photoUrl} target="_blank">
          <img src={this.state.photo} className='img-fluid'></img>
        </a>
      </div>
    );
  }
}
