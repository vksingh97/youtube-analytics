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
      </div>
    </div>
  );
};

export default Home;
