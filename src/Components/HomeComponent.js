import React, { useEffect, useState } from "react";
import fetch from "cross-fetch";
import "./styles.css";
import SummaryComponent from "./SummaryComponent";
import RevenueComponent from "./RevenueComponent";
import ReachComponent from "./ReachComponent";
let time = [];
let revenueVal = [];
const Home = () => {
  const [data, setData] = useState(null);
  const fetchData = () => {
    return fetch(
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
        return data;
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData().then((items) => {
      time = items.revenueDetails.estimatedRevenueTrend.data.map(
        (index) => index.date
      );
      revenueVal = items.revenueDetails.estimatedRevenueTrend.data.map(
        (index) => index.value1
      );
    });
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
        <SummaryComponent data={data} />
        <RevenueComponent data={data} />
        <ReachComponent data={data} />
      </div>
    </div>
  );
};

export default Home;
export { time, revenueVal };
