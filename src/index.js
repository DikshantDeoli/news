import React from "react";
import ReactDOM from "react-dom";
import './assets/main.css';
import App from "./App";
import Header from "./Header";

ReactDOM.render((
  <React.Fragment>
    <Header />
    <App />
  </React.Fragment>
), document.getElementById("root"));
