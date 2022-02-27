import React from "react";

const SummaryComponent = ({ data }) => {
  return (
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
  );
};

export default SummaryComponent;
