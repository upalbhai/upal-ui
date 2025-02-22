import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = ({className,children }) => {
  return <div className={`modal-body ${className}`}>{children}</div>;
};

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ModalBody;