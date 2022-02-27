import React, { useEffect, useState } from "react";
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
          <span className="summary-card" />
          <h2 className="summary-card-subscribers">Subscribers</h2>
          <h2 className="summary-card-views">Views</h2>
          <h2 className="summary-card-revenue">Revenue</h2>
          <h2 className="summary-card-subscribers-count">
            {data ? data.summary.subscribers : null}
          </h2>
          <h2 className="summary-card-views-count">
            {data ? data.summary.views : null}
          </h2>
          <h2 className="summary-card-revenue-count">
            &#x20b9;
            {data ? data.summary.revenue : null}
          </h2>
        </div>
        <div className="channel-revenue">
          <h2 className="revenue-text">Revenue</h2>
          <span className="revenue-card" />
          <h2 className="estimated-revenue-text">Estimated Revenue</h2>
          <h2 className="estimated-revenue-value">
            {data ? data.revenueDetails.estimatedRevenueTrend.value : null}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
