// ModalTrigger.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

const ModalTrigger = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: () => setIsOpen(true) })}
      <Modal isOpen={isOpen} onClose={handleClose}>
        {React.Children.map(children, (child) => {
          if (child.type === ModalFooter) {
            return React.cloneElement(child, { onClose: handleClose });
          }
          return child;
        })}
      </Modal>
    </>
  );
};

ModalTrigger.propTypes = {
  trigger: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalTrigger;