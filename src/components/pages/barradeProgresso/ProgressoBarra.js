import React from "react";

const ProgressBar = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
        <div className="progress-numbers">
          <span className="progress-number">0</span>
          <span className="progress-number">1.000</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
