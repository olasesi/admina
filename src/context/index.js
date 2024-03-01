import React, { createContext, useContext, useReducer, useMemo } from "react";

import PropTypes from "prop-types";

const AdminaUI = createContext();

// Setting custom name for the context which is visible on react dev tools
AdminaUI.displayName = "AdminaUIContext";

// Material Dashboard 2 React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Admina Dashboard React context provider
function AdminaUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    openConfigurator: false,
    fixedNavbar: true,
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <AdminaUI.Provider value={value}>{children}</AdminaUI.Provider>;
}

// Admina Dashboard React custom hook for using context
function useAdminaUIController() {
  const context = useContext(AdminaUI);

  if (!context) {
    throw new Error("useAdminaUIController should be used inside the AdminaUIControllerProvider.");
  }

  return context;
}

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch, value) => dispatch({ type: "DARKMODE", value });

AdminaUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  AdminaUIControllerProvider,
  useAdminaUIController,
  setMiniSidenav,
  setFixedNavbar,
  setWhiteSidenav,
  setSidenavColor,
  setOpenConfigurator,
  setLayout,
  setDarkMode,
};
