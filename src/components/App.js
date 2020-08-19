import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount(){
    this.onFormSubmit('buildings');
  }

  onFormSubmit = async (term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyA_pAZ9vZ9qk1AtJUPBNFimxPbsLC2VB-0',
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit}></SearchBar>
        I have {this.state.videos.length} videos
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} 
              videos={this.state.videos}></VideoList>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
