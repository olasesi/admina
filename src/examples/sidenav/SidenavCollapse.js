import React from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import ListText from "./../../components/ListText";
import Icon from "./../../components/Icon";
import ListIcon from "./../../components/ListIcon";

import Box from "./../../components/Box";

function SidenavCollapse({ icon, name, active, ...rest }) {
  return (
    <Box {...rest}>
      <ListIcon>{typeof icon === "string" ? <Icon>{icon}</Icon> : icon}</ListIcon>

      <ListText>{name}</ListText>
    </Box>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default SidenavCollapse;
