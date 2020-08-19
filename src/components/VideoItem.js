import React, { Component } from 'react';
import './VideoItem.css';

export default class VideoItem extends Component {
  render() {
    const {video, onVideoSelect} = this.props;
    return (
      <div className="item video-item" onClick={onVideoSelect.bind(this, video)}>
        <img alt={video.snippet.title} className="ui image " src={video.snippet.thumbnails.medium.url} ></img>
        <div className="content">
          <div className="header">
            {video.snippet.title}

          </div>
        </div>
      </div>
    )
  }
}
