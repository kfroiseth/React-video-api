import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  const renderedList = videos.map((video) => {
    return <VideoItem alt={video.snippet.description} key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>;
  });

  return(
    <div className="ui relaxed divided list">{renderedList}</div>
);
}

export default VideoList;
