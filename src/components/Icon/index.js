import React from "react";
import PropTypes from "prop-types";

function Icon({ src, alt, className, children }) {
  return (
    <span>
      <img src={src} alt={alt} className={className} />
      {children}
    </span>
  );
}

// Default props
Icon.defaultProps = {
  className: "", // Default to empty string for className
};

// Prop types validation
Icon.propTypes = {
  src: PropTypes.string.isRequired, // Image source URL
  alt: PropTypes.string.isRequired, // Alternate text for accessibility
  className: PropTypes.string, // Additional CSS classes (optional)
  children: PropTypes.node, // Additional content to render alongside the image
};

export default Icon;
