import React from "react";
import PropTypes from "prop-types";

function ListText({ children, className, primary, secondary, size, weight }) {
  const textColor = primary ? "text-primary" : secondary ? "text-secondary" : "text-black";
  const textSize = size ? `text-${size}` : "";
  const fontWeight = weight ? `font-${weight}` : "";

  return (
    <div className={`list-text ${textColor} ${textSize} ${fontWeight} ${className}`}>
      {children}
    </div>
  );
}

ListText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"]),
  weight: PropTypes.oneOf([
    "hairline",
    "thin",
    "light",
    "normal",
    "medium",
    "semibold",
    "bold",
    "extrabold",
    "black",
  ]),
};

export default ListText;
