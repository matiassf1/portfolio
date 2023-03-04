import React from "react";
import ReactDOM from "react-dom/client";
import { RouterApp } from "./router/RouterApp";
import { BrowserRouter } from "react-router-dom";

const container: HTMLElement | Element = document.querySelector("#root")!;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </React.StrictMode>
);
