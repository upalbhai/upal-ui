// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, image, children }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="text-sm text-gray-600">{description}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
