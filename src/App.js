import React, { Component } from 'react';
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';
import * as ConfigConstants from './ConfigConstants';
import PhotoGrid from './PhotoGrid';
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
      if (json.errors != undefined) {
        this.setState({errors: json.errors});
        return;
      }
      for (var photo of json) {
        photoList.push({
          photo: photo.urls.small,
          photoUrl: photo.urls.raw,
          user: photo.user.username,
          userLink: photo.user.links.html,
        });
      }
      this.setState({photos: photoList});
    });
  }

  render() {
    return (
      <div style={{backgroundColor: 'LightSalmon'}}>
        <div className='container'>
          <h2>
            Unsplash Demo
          </h2>
          {this.state.errors ? this.state.errors[0] :
            <PhotoGrid
              photoList={this.state.photos}
            />
          }
        jj</div>
      </div>
    );
  }
}

export default App;
