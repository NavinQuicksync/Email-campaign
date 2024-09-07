import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import "@coreui/coreui/dist/css/coreui.min.css";
import App from "./App";
import "./Styles/login.scss";
import "./Styles/main.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
