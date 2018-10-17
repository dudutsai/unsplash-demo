import React, { Component } from 'react';
import PhotoCard from './PhotoCard';

export default class PhotoGrid extends Component {
  render() {
    return (
      <div>
        {this.props.photoList !== undefined && this.props.photoList.length > 0 ? this.props.photoList.map(photo => {
          return (
            <PhotoCard
              key={photo.id}
              description={photo.description}
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