import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// import { time, revenueVal } from "./HomeComponent";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
let time, revenueVal;
const RevenueLineChart = () => {
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
      time = items.revenueDetails.estimatedRevenueTrend.data.map(
        (index) => index.date
      );
      revenueVal = items.revenueDetails.estimatedRevenueTrend.data.map(
        (index) => index.value1
      );
    });
  }, []);

  const chartData = {
    labels: time,
    datasets: [
      {
        label: "Revenue",
        data: revenueVal,
        borderColor: ["rgba(49, 228, 152, 1)"],
        backgroundColor: ["rgba(49, 228, 152, 1)"],
        pointBackgroundColor: ["rgba(49, 228, 152, 1)"],
        pointBorderColor: ["rgba(49, 228, 152, 1)"],
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

export default RevenueLineChart;
