import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'
const Accordion = ({ children, allowMultiple, className, variant }) => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleItemClick = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Close the item if it's already open
          : [...prev, index] // Open the item if it's closed
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <>
    {
        variant==='custom' ? <div className={`${className}`}>
             {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndices.includes(index),
          onClick: () => handleItemClick(index),
          variant, // Pass variant to child components
        })
      )}
        </div>
        :
    <div className={`accordion  ${variant || ''} ${className || ''}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndices.includes(index),
          onClick: () => handleItemClick(index),
          variant, // Pass variant to child components
        })
      )}
    </div>
    }
    
    </>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  allowMultiple: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'bordered', 'minimal', 'flat','custom']),
};

Accordion.defaultProps = {
  allowMultiple: false,
  className: '',
  variant: 'default',
};

export default Accordion;