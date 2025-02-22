// src/components/Input.jsx
import React from 'react';
import clsx from 'clsx';

const Input = ({ label, type = 'text', placeholder, value, onChange, className }) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-gray-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          'border rounded-lg p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
          className
        )}
      />
    </div>
  );
};

export default Input;
