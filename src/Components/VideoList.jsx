import React, { useState } from "react";
import Video from "./Video";
import videosData from "../data/videos.json";
import Nav from "./Nav";
import styles from "../Styles/videoList.module.css";

const VideoList = () => {
  const [filter, setFilter] = useState("");

  const filteredVideos = filter
    ? videosData.filter((video) => video.clase === filter)
    : videosData;

  return (
    <div>
      <Nav setFilter={setFilter} />
      {filteredVideos.map((video, index) => (
        <div className={styles.gridContainer} key={index}>
          <Video video={video} styles={styles[video.tamaño]} />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};


export default VideoList;