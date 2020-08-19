import React, { Component } from 'react'
import VideoItem from './VideoItem'

export default class VideoList extends Component {


  render() {
    const videos = this.props.videos.map((video) =>{
      return <VideoItem video={video} key={video.id.videoId}
      onVideoSelect={this.props.onVideoSelect}></VideoItem>
    })
    return (
      <div className="ui relaxed divided list">
        {videos}
      </div>
    )
  }
}
