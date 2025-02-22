// ModalHeader.js
import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ className, title, onClose }) => {
  return (
    <div className={`modal-header ${className}`}>
      <h2>{title}</h2>
      {/* <button className="close-button" onClick={onClose}>
        &times;
      </button> */}
    </div>
  );
};

ModalHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

ModalHeader.defaultProps = {
  className: '', // Default to an empty string if no className is provided
};

export default ModalHeader;