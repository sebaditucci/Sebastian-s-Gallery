import React, { useEffect, useRef } from "react";

const Video = ({ video ,styles}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVisibility = (entries) => {
      entries.forEach((entry) => {
        const videoElement = entry.target;
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={`./Assets/${video.src}`}
      preload="metadata"
      muted
      loop
      className= {styles}
    />
  );
};

export default Video;
