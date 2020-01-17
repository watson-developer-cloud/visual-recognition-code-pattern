import React from 'react';
import PropTypes from 'prop-types';

const formatNumber = num => (Math.round(num * 100) / 100).toFixed(2);
const widthNumber = num => Math.abs(Math.round(num * 100));

function ProgressBar({ progress }) {
  return (
    <div className="bar-container">
      <div className="bar-full">
        <div className="bar" style={{ width: `${widthNumber(progress)}%` }} />
      </div>
      <div className="progress">{formatNumber(progress)}</div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
};

ProgressBar.defaultProps = {
  progress: 0,
};

export default ProgressBar;
