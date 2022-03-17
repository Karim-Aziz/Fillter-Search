import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import Browser Router
import { BrowserRouter } from "react-router-dom";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
