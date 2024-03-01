import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AdminaUIControllerProvider } from "./context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AdminaUIControllerProvider>
      <App />
    </AdminaUIControllerProvider>
  </BrowserRouter>
);
