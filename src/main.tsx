import React from "react";
import ReactDOM from "react-dom/client";
import { RouterApp } from "./router/RouterApp";
import { BrowserRouter } from "react-router-dom";

const container = document.querySelector("#root");
if (!container) {
  throw new Error("Could not find the root element");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </React.StrictMode>
);
