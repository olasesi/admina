import React from "react";
import PropTypes from "prop-types";

function ListIcon({
  icon,
  text,
  iconSpacing,
  textProps,
  iconProps,
  contentProps,
  className,
  ...rest
}) {
  return (
    <div className={`flex items-center ${className}`} {...rest}>
      {/* Render the icon */}
      {icon && (
        <div className="mr-2">
          {typeof icon === "string" ? (
            <img src={icon} alt="Icon" className="h-5 w-5" {...iconProps} />
          ) : (
            React.cloneElement(icon, iconProps)
          )}
        </div>
      )}

      {/* Render the text */}
      {text && <span {...textProps}>{text}</span>}
    </div>
  );
}

ListIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), // Icon element or path
  text: PropTypes.node, // Text content
  iconSpacing: PropTypes.number, // Spacing between icon and text
  textProps: PropTypes.object, // Props for text element
  iconProps: PropTypes.object, // Props for icon element
  contentProps: PropTypes.object, // Props for the content wrapper
  className: PropTypes.string, // Additional CSS classes
};

export default ListIcon;
