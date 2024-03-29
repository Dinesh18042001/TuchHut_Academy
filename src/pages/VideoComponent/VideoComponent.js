import React, { useRef } from 'react';
import "./VideoComponent.css"

const VideoComponent = () => {
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="videotag col-lg-8" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <video ref={videoRef} width="100%" height="auto" controls>
        <source src="images/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;

