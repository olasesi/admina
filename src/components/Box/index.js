import React from "react";
import PropTypes from "prop-types";

function Box({ children, className, style, flex, ...rest }) {
  // Define styles for the box
  const boxStyle = {
    flex, // Set flex property if provided, otherwise use 'initial'
    ...style, // Merge custom styles with default styles
  };

  return (
    <div className={className} style={boxStyle} {...rest}>
      {children}
    </div>
  );
}

export default Box;

// Prop types validation
Box.propTypes = {
  children: PropTypes.node, // Child elements
  className: PropTypes.string, // Additional CSS class names
  style: PropTypes.object, // Additional inline styles
  flex: PropTypes.string, // Flex property
};
