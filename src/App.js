import React, { Component } from 'react';
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';
import * as ConfigConstants from './ConfigConstants';
import PhotoGrid from './PhotoGrid';
// import { doIt } from './Action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      searchValue: ''
    };
    this.handleSearchCategoryChange = this.handleSearchCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unsplash = new Unsplash({
      applicationId: ConfigConstants.APP_ACCESS_KEY,
      secret: ConfigConstants.APP_SECRET
    });
  }

  componentDidMount() {
    this.getPhotos(null);
  }

  getPhotos(searchValue) {
    this.unsplash.photos.getRandomPhoto({count: 25, query: searchValue})
    .then(toJson)
    .then(json => {
      if (json.errors !== undefined) {
        this.setState({errors: json.errors});
        return;
      }
      var photoList = [];
      for (var photo of json) {
        photoList.push({
          id: photo.id,
          photo: photo.urls.small,
          photoUrl: photo.urls.raw,
          description: photo.description,
          user: photo.user.username,
          userLink: photo.user.links.html,
        });
      }
      this.setState({photos: photoList});
    });
  }

  handleSearchCategoryChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSubmit(event) {
    this.getPhotos(this.state.searchValue);
    event.preventDefault();
  }

  render() {
    document.body.style = 'background: LightSalmon;';
    return (
      <div>
        <div className='container'>
          <h2>
            Unsplash Demo
          </h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Category:
              <input type="text" value={this.state.searchValue} onChange={this.handleSearchCategoryChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {this.state.errors ? this.state.errors[0] :
            <PhotoGrid
              photoList={this.state.photos}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
