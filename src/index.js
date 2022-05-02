import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./assets/font/Lato-Light.ttf";
import "./assets/font/Lato-Regular.ttf";
import { App } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
