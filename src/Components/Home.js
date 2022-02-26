import React, { useEffect, useState } from "react";
import axios from "axios";
import fetch from "cross-fetch";
import "./Home.css";
const Home = () => {
  const [data, setData] = useState(null);
  const fetchData = () => {
    fetch(
      "https://qorner-mock-server.herokuapp.com/stats?startDate=2021-01-01&endDate=2021-01-31"
    )
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home-page">
      <div className="top-background-image">
        <div className="youtube-icon"></div>
        <span className="back-arrow"></span>
        <div className="channel-info">
          <img
            className="channel-logo"
            src={data ? data.metadata.thumbnailUrl : null}
            alt="channel-logo"
          ></img>
          <h2 className="channel-title">
            {data ? data.metadata.channelName : null}
          </h2>
          <p className="subs-count">
            {`${data ? data.metadata.subscribersCount : null} subscribers`}
          </p>
          <span className="subs-vid-seperator"></span>
          <p className="video-count">{`${
            data ? data.metadata.videoCount : null
          } videos`}</p>
        </div>
      </div>
      <div className="channel-overview">
        <div className="channel-summary">
          <h2 className="summary-text">Summary</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
