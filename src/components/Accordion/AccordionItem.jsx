import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, children, isOpen, onClick, className, variant,openIcon = '-', // Default open icon
    closeIcon = '+', // Default close icon
     }) => {
  const [height, setHeight] = useState(0); // State to store the height of the content
  const contentRef = useRef(null); // Ref to access the content element

  useEffect(() => {
    if (isOpen) {
      // Calculate the height of the content when open
      setHeight(contentRef.current.scrollHeight);
    } else {
      // Set height to 0 when closed
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <>
        {
        variant ==='custom' ? <div className={` ${className || ''}`}>
        <div className={` ${variant || ''}`} onClick={onClick}>
          <h3>{title}</h3>
          <span className="accordion-icon">
            {isOpen ? openIcon : closeIcon} {/* Use custom icons */}
          </span>      
          </div>
        <div
          className={`${variant || ''}`}
          ref={contentRef}
          style={{
            maxHeight: `${height}px`, // Dynamically set height
            transition: 'max-height 0.3s ease, padding 0.3s ease', // Smooth transition
            overflow: 'hidden',
          }}
        >
          {children}
        </div>
      </div> : 
    <div className={`accordion-item ${variant || ''} ${className || ''}`}>
      <div className={`accordion-header ${variant || ''}`} onClick={onClick}>
        <h3>{title}</h3>
        <span className="accordion-icon">
          {isOpen ? openIcon : closeIcon} {/* Use custom icons */}
        </span>      </div>
      <div
        className={`accordion-content ${variant || ''}`}
        ref={contentRef}
        style={{
          maxHeight: `${height}px`, // Dynamically set height
          transition: 'max-height 0.3s ease, padding 0.3s ease', // Smooth transition
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
        }
    </>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  openIcon: PropTypes.node, // Custom open icon
  closeIcon: PropTypes.node, // Custom close icon
  variant: PropTypes.oneOf(['default', 'bordered', 'minimal', 'flat','custom']),
};

AccordionItem.defaultProps = {
  className: '',
  variant: 'default',
  openIcon: '-', // Default open icon
  closeIcon: '+', // Default close icon
};

export default AccordionItem;