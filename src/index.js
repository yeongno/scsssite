import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
