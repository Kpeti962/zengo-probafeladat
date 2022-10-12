import React from "react";
import "../../styles/ActualCounty.scss";

const ActualCounty = ({choosenCounty}) => {
  return (
    <div className="actual-county-section">
      <div className="actual-county">
        <h4 id="megye">MEGYE</h4>
        <h4>{choosenCounty}</h4>
      </div>
    </div>
  );
};

export default ActualCounty;
