import React from "react";
import ReachLineChart from "./ReachLineChart";
const ReachComponent = ({ data, newDate }) => {
  return (
    <div className="channel-reach">
      <h2 className="reach-text">Reach & engagment</h2>
      <span className="reach-card" />
      <h2 className="reach-engangment-text">Views</h2>
      <h2 className="reach-engagement-value">
        {data
          ? data.reachAndEngagementDetails.viewsTrend.value +
            data.reachAndEngagementDetails.viewsTrend.change.value
          : null}
      </h2>
      {data ? (
        data.reachAndEngagementDetails.viewsTrend.change.percentage >= 0 ? (
          <h2 className="reach-change-positive">
            {data.reachAndEngagementDetails.viewsTrend.change.percentage}
            {""}%
          </h2>
        ) : (
          <h2 className="reach-change-negative">
            {data.reachAndEngagementDetails.viewsTrend.change.percentage}
            {""}%
          </h2>
        )
      ) : null}
      <span
        className="reach-info"
        data-toggle="tooltip"
        data-placement="top"
        title="Percentage change in reach"
      ></span>
      <div className="reach-canvas">
        <ReachLineChart newDate={newDate} />
      </div>
    </div>
  );
};

export default ReachComponent;
