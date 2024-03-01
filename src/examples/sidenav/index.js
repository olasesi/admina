import React, { useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router-dom components
import { useLocation, Link } from "react-router-dom";

// import SidenavCollapse from "./SidenavCollapse";
// import SidenavRoot from "./SidenavRoot";

import Divider from "./../../components/Divider";
import Box from "./../../components/Box";
// import NavLink from "./../../components/NavLink";
// import List from "./../../components/List";
import Button from "./../../components/Button";
import Icon from "./../../components/Icon";
import ListIcon from "./../../components/ListIcon";

import close from "./../../assets/images/icons/close.svg";

// Custom styles for the Sidenav
// import SidenavRoot from "examples/Sidenav/SidenavRoot";
// import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// // Material Dashboard 2 React context
import { useAdminaUIController, setMiniSidenav, setWhiteSidenav } from "./../../context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useAdminaUIController();
  const { miniSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";

  if (whiteSidenav && !darkMode) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);

      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /**
        The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link to={href} key={key}>
          <ListIcon text={name} icon={icon} active={key === collapseName} noCollapse={noCollapse}>
            {name}
          </ListIcon>
        </Link>
      ) : (
        <Link
          style={{ borderColor: "red", borderWidth: "2px", borderStyle: "solid" }}
          key={key}
          to={route}
        >
          sdfsdfds
          <ListIcon name={name} icon={icon} active={key === collapseName}>
            {ListIcon}
          </ListIcon>
        </Link>
      );
    } else if (type === "title") {
      returnValue = (
        <Box key={key} color={textColor}>
          {title}
        </Box>
      );
    } else if (type === "divider") {
      returnValue = (
        <Divider key={key} light={(!darkMode && !whiteSidenav) || (darkMode && whiteSidenav)} />
      );
    }

    return returnValue;
  });
  return (
    <Box {...rest} ownerState={{ whiteSidenav, miniSidenav, darkMode }}>
      <Box className="flex justify-between pl-4 pb-8">
        <Box>
          <Link to="/overview">
            {brand && <Icon src={brand} alt={brandName} className="w-36"></Icon>}
          </Link>
        </Box>
        <Box onClick={closeSidenav}>
          <Icon src={close} alt="close" className="bg-slate-100 w-4"></Icon>
        </Box>
      </Box>

      <Box className="flex">{renderRoutes}</Box>
      <Box>
        <Button
          component="a"
          href="https://www.creative-tim.com/product/material-dashboard-pro-react"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color={sidenavColor}
          fullWidth
        >
          upgrade to pro
        </Button>
      </Box>
    </Box>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
