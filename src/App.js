import React, { useState, useEffect } from "react";
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Admina React routes
import routes from "./routes";

// Admina React example components
import Sidenav from "./examples/sidenav";

//
import Box from "./components/Box";

// Admina React contexts
import { useAdminaUIController, setMiniSidenav, setOpenConfigurator } from "./context";

// Images
import brandWhite from "./assets/images/logos/INKOMOKO-white.png";
import brandDark from "./assets/images/logos/INKOMOKO-dark.png";

import "./assets/styles/tailwind.css"; // Import Tailwind CSS file

function App() {
  const [controller, dispatch] = useAdminaUIController();
  const { miniSidenav, openConfigurator, sidenavColor, darkMode, whiteSidenav } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <div onClick={handleConfiguratorOpen}>
      <div>settings</div>
    </div>
  );

  return (
    <Box className="flex h-screen">
      <Box className="pl-4 pt-12 w-1/6 flex justify-start  bg-neutral-950">
        <Sidenav
          color={sidenavColor}
          brand={!darkMode || whiteSidenav ? brandDark : brandWhite}
          brandName="Admina"
          routes={routes}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
      </Box>

      <Box className="px-4 py-4 flex-1 bg-neutral-100">
        {configsButton}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/overview" />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
