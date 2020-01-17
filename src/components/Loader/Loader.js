import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ loadingMessage }) => (
  <span className="loader">
    <div className="loader-container">
      <div className="loader-dots" />
      {(loadingMessage) ? (
        <div className="loader-message">
          <p className="ibm-type-a">{loadingMessage}</p>
        </div>
      ) : null}
    </div>
  </span>
);

Loader.propTypes = {
  loadingMessage: PropTypes.string,
};

Loader.defaultProps = {
  loadingMessage: null,
};

export default Loader;
