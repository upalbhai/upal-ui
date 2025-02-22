// src/components/Button.jsx
import React, { useState } from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  style,
  className,
  isDarkMode = false,
  gradientColors = ["#bbbbbb", "#facc15"],
  darkGradientColors = ["#d63384", "#eab308"],
}) => {
  const [hovered, setHovered] = useState(false);

  // Base styles
  const baseStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "0.5rem",
    fontWeight: "600",
    transition: "all 0.2s ease",
    outline: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Variant styles
const variantStyles = {
  primary: {
    backgroundColor: hovered
      ? isDarkMode
        ? '#1e40af' // Darker blue on hover in dark mode
        : '#1d4ed8' // Darker blue on hover in light mode
      : isDarkMode
      ? '#2563eb' // Default blue in dark mode
      : '#3b82f6', // Default blue in light mode
    color: '#ffffff',
    border: 'none',
    ':hover': {
      backgroundColor: isDarkMode ? '#1e40af' : '#1d4ed8', // Hover state
    },
  },
  secondary: {
    backgroundColor: hovered
      ? isDarkMode
        ? '#374151' // Darker gray on hover in dark mode
        : '#4b5563' // Darker gray on hover in light mode
      : isDarkMode
      ? '#4b5563' // Default gray in dark mode
      : '#6b7280', // Default gray in light mode
    color: '#ffffff',
    border: 'none',
    ':hover': {
      backgroundColor: isDarkMode ? '#374151' : '#4b5563', // Hover state
    },
  },
  gradient: {
    backgroundImage: `linear-gradient(to right, ${
      isDarkMode ? darkGradientColors.join(', ') : gradientColors.join(', ')
    })`,
    color: '#ffffff',
    border: 'none',
    ':hover': {
      opacity: 0.9, // Slight fade on hover for gradient buttons
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: isDarkMode ? '#e5e7eb' : '#1f2937', // Light text in dark mode, dark text in light mode
    border: `2px solid ${isDarkMode ? '#e5e7eb' : '#1f2937'}`, // Light border in dark mode, dark border in light mode
    ':hover': {
      backgroundColor: isDarkMode ? 'rgba(229, 231, 235, 0.1)' : 'rgba(31, 41, 55, 0.1)', // Subtle hover effect
    },
  },
  danger: {
    backgroundColor: hovered
      ? isDarkMode
        ? '#991b1b' // Darker red on hover in dark mode
        : '#dc2626' // Darker red on hover in light mode
      : isDarkMode
      ? '#ef4444' // Default red in dark mode
      : '#f87171', // Default red in light mode
    color: '#ffffff',
    border: 'none',
    ':hover': {
      backgroundColor: isDarkMode ? '#991b1b' : '#dc2626', // Hover state
    },
  },
  success: {
    backgroundColor: hovered
      ? isDarkMode
        ? '#065f46' // Darker green on hover in dark mode
        : '#059669' // Darker green on hover in light mode
      : isDarkMode
      ? '#10b981' // Default green in dark mode
      : '#34d399', // Default green in light mode
    color: '#ffffff',
    border: 'none',
    ':hover': {
      backgroundColor: isDarkMode ? '#065f46' : '#059669', // Hover state
    },
  },
  warning: {
    backgroundColor: hovered
      ? isDarkMode
        ? '#92400e' // Darker yellow on hover in dark mode
        : '#d97706' // Darker yellow on hover in light mode
      : isDarkMode
      ? '#f59e0b' // Default yellow in dark mode
      : '#fbbf24', // Default yellow in light mode
    color: isDarkMode ? '#1f2937' : '#ffffff', // Dark text in dark mode, light text in light mode
    border: 'none',
    ':hover': {
      backgroundColor: isDarkMode ? '#92400e' : '#d97706', // Hover state
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: isDarkMode ? '#e5e7eb' : '#1f2937', // Light text in dark mode, dark text in light mode
    border: 'none',
    ':hover': {
      backgroundColor: isDarkMode ? 'rgba(229, 231, 235, 0.1)' : 'rgba(31, 41, 55, 0.1)', // Subtle hover effect
    },
  },
  link: {
    backgroundColor: 'transparent',
    color: isDarkMode ? '#60a5fa' : '#3b82f6', // Light blue in dark mode, blue in light mode
    border: 'none',
    textDecoration: 'underline',
    ':hover': {
      color: isDarkMode ? '#93c5fd' : '#60a5fa', // Lighter blue on hover
    },
  },
};

  // Size styles
  const sizeStyles = {
    sm: { padding: "0.375rem 0.75rem", fontSize: "0.875rem" },
    md: { padding: "0.5rem 1rem", fontSize: "1rem" },
    lg: { padding: "0.75rem 1.5rem", fontSize: "1.125rem" },
  };

  // Combine styles
  const combinedStyle = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  // Ripple Effect
  const handleClick = (e) => {
    const button = e.currentTarget;
    const existingRipple = button.querySelector(".ripple-effect");

    if (existingRipple) existingRipple.remove();

    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple-effect");

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <button
      className={clsx(className)}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={combinedStyle}
    >
      {children}
    </button>
  );
};

export default Button;
