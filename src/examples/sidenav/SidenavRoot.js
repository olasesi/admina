import React from "react";
import PropTypes from "prop-types";
import Box from "./../../components/Box";

function SidenavRoot({ ownerState, children }) {
  return <Box>{children}</Box>;
}

export default SidenavRoot;

SidenavRoot.propTypes = {
  ownerState: PropTypes.object,
  children: PropTypes.node,
};
