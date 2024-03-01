import React from "react";
import PropTypes from "prop-types";

function Divider({ key, light }) {
  // Define Tailwind CSS classes based on the 'light' prop
  const hrClasses = light ? "border border-gray-300" : "border border-black";

  return <hr key={key} className={hrClasses} />;
}

export default Divider;

// Typechecking props for the Divider
Divider.propTypes = {
  key: PropTypes.string,
  light: PropTypes.bool, // Assuming 'light' is a boolean prop
};
