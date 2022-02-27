import React from "react";

const RevenueComponent = ({ data }) => {
  return (
    <div className="channel-revenue">
      <h2 className="revenue-text">Revenue</h2>
      <span className="revenue-card" />
      <h2 className="estimated-revenue-text">Estimated Revenue</h2>
      <h2 className="estimated-revenue-value">
        &#x20b9;
        {data
          ? data.revenueDetails.estimatedRevenueTrend.value +
            data.revenueDetails.estimatedRevenueTrend.change.value
          : null}
      </h2>
      {data ? (
        data.revenueDetails.estimatedRevenueTrend.change.percentage >= 0 ? (
          <h2 className="estimated-revenue-change-positive">
            {data.revenueDetails.estimatedRevenueTrend.change.percentage}
            {""}%
          </h2>
        ) : (
          <h2 className="estimated-revenue-change-negative">
            {data.revenueDetails.estimatedRevenueTrend.change.percentage}
            {""}%
          </h2>
        )
      ) : null}
      <span
        className="revenue-info"
        data-toggle="tooltip"
        data-placement="top"
        title="Percentage change in revenue"
      ></span>
      <div className="revenue-change-info-box"></div>
      <p className="revenue-change-info-text">
        {data ? data.revenueDetails.estimatedRevenueTrend.change.info : null}
      </p>
    </div>
  );
};

export default RevenueComponent;
