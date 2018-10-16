import React, { Component } from 'react';
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';
import * as ConfigConstants from './ConfigConstants';
// import { doIt } from './Action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
    this.unsplash = new Unsplash({
      applicationId: ConfigConstants.APP_ACCESS_KEY,
      secret: ConfigConstants.APP_SECRET
    });
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    this.unsplash.photos.getRandomPhoto({count: 25})
    .then(toJson)
    .then(json => {
      var photoList = this.state.photos;
      for (var photo of json) {
        photoList.push({
          photo: photo.urls.regular,
          photoCredit: photo.user.username,
          creditUrl: photo.user.links.html
        });
      }
      this.setState({photos: photoList});
    });
  }

  render() {
    return (
      <div>
        {this.state.photos.length > 0 ? this.state.photos.map(photo => {
          return (
            <div>
              Photo by <a href={photo.creditUrl}>{photo.photoCredit}</a>
              <img src={photo.photo}></img>
            </div>
          );
        }) : null}
      </div>
    );
  }
}

export default App;
