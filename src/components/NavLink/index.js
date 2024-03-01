import React from "react";
import PropTypes from "prop-types";

function NavLink({ to, target, rel, onClick, children, className }) {
  const handleClick = (event) => {
    // Perform any custom logic before navigating
    if (onClick) {
      onClick(event);
    }

    // Perform navigation
    if (to) {
      window.location.href = to;
    }
  };

  return (
    <a href={to} target={target} rel={rel} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

// Default props
NavLink.defaultProps = {
  target: "_self", // Default target to "_self" (current browsing context)
  rel: "noopener noreferrer", // Default rel for security reasons
};

// Prop types validation
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default NavLink;
