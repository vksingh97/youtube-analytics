import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { changedDate } from "./HomeComponent";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let time, subsVal, unSubsVal;
const AudienceLineChart = ({ newDate }) => {
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
        return data;
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData().then((items) => {
      if (newDate.length > 0) {
        time = [...newDate];
      } else {
        time = items.revenueDetails.estimatedRevenueTrend.data.map(
          (index) => index.date
        );
      }
      subsVal =
        items.audienceDetails.viewsSubscriberVsNonSubscribersTrend.data.map(
          (index) => index.value1
        );
      unSubsVal =
        items.audienceDetails.viewsSubscriberVsNonSubscribersTrend.data.map(
          (index) => index.value2
        );
    });
  }, []);

  const chartData = {
    labels: changedDate.length > 0 ? changedDate : time,
    datasets: [
      {
        label: "subscribed",
        data: subsVal,
        borderColor: ["rgba(49, 228, 152, 1)"],
        backgroundColor: ["rgba(49, 228, 152, 1)"],
        pointBackgroundColor: ["rgba(49, 228, 152, 1)"],
        pointBorderColor: ["rgba(49, 228, 152, 1)"],
      },
      {
        label: "unsubscribed",
        data: unSubsVal,
        borderColor: ["rgba(255, 92, 0, 1)"],
        backgroundColor: ["rgba(255, 92, 0, 1)"],
        pointBackgroundColor: ["rgba(255, 92, 0, 1)"],
        pointBorderColor: ["rgba(255, 92, 0, 1)"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      // y: [
      //   {
      //     display: true,
      //     beginAtZero: true,
      //   },
      // ],
    },
  };
  return <Line data={chartData} options={options} />;
};

export default AudienceLineChart;
