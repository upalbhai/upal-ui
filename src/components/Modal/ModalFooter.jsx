// ModalFooter.js
import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = ({ onClose, children,className }) => {
  return (
    <div className={`modal-footer ${className}`}>
      {React.Children.map(children, (child) => {
        if (child.props.onClick === onClose) {
          return React.cloneElement(child, { onClick: onClose });
        }
        return child;
      })}
    </div>
  );
};

ModalFooter.propTypes = {
  onClose: PropTypes.func,
    className: PropTypes.string,

  children: PropTypes.node.isRequired,
};

export default ModalFooter;