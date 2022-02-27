import React from "react";
import AudienceLineChart from "./AudienceLineChart";

const AudienceComponent = ({ data }) => {
  return (
    <div className="channel-audience">
      <h2 className="audience-text">Audience</h2>
      <span className="audience-card" />
      <h2 className="audience-views-text">Subscriber views vs total views</h2>
      <h2 className="audience-views-value">
        {data
          ? data.audienceDetails.viewsSubscriberVsNonSubscribersTrend.value +
            data.audienceDetails.viewsSubscriberVsNonSubscribersTrend.change
              .value
          : null}
        {""}%
      </h2>
      {data ? (
        data.audienceDetails.viewsSubscriberVsNonSubscribersTrend.change
          .percentage >= 0 ? (
          <h2 className="audience-change-positive">
            {
              data.audienceDetails.viewsSubscriberVsNonSubscribersTrend.change
                .percentage
            }
            {""}%
          </h2>
        ) : (
          <h2 className="audience-change-negative">
            {
              data.audienceDetails.viewsSubscriberVsNonSubscribersTrend.change
                .percentage
            }
            {""}%
          </h2>
        )
      ) : null}
      <span
        className="audience-info"
        data-toggle="tooltip"
        data-placement="top"
        title="Percentage of subscribed views to total views"
      ></span>
      <div className="audience-canvas">
        <AudienceLineChart />
      </div>
    </div>
  );
};

export default AudienceComponent;
