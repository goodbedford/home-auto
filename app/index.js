import React from "react";
import ReactDom from "react-dom";
import Routes from "./config/Routes";
import "./css/global.scss";

import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
const App = () => (
   Routes
);
ReactDom.render(
  Routes,
  document.getElementById("app")
);

export default App;
