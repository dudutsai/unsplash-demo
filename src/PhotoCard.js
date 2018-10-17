import React, { Component } from 'react';

export default class PhotoCard extends Component {
  render() {
    return (
      <div>
        <div>
          Photo by <a href={this.props.userLink}>{this.props.user}</a>
        </div>
        <a href={this.props.photoUrl} target="_blank">
          <img alt={this.props.description} src={this.props.photo} className='img-fluid'></img>
        </a>
      </div>
    );
  }
}
