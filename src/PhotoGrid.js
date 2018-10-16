import React, { Component } from 'react';
import PhotoCard from './PhotoCard';

export default class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: this.props.photoList
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({photoList: this.props.photoList});
  }

  render() {
    return (
      <div>
        {this.state.photoList !== undefined && this.state.photoList.length > 0 ? this.state.photoList.map(photo => {
          return (
            <PhotoCard
              photo={photo.photo}
              photoUrl={photo.photoUrl}
              user={photo.user}
              userLink={photo.userLink}
            />
          )
        }) : null}
      </div>
    );
  }
}