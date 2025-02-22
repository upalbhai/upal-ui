import React from 'react'

const AccordionHeader = ({ title, children,  className, variant,openIcon = '-', // Default open icon
    closeIcon = '+', // Default close icon
     }) => {
  return (
    <div className={` ${variant || ''}`} onClick={onClick}>
          <h3>{title}</h3>
          <span className="accordion-icon">
            {isOpen ? openIcon : closeIcon} {/* Use custom icons */}
          </span>      
        </div>
  )
}

export default AccordionHeader
