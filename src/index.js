import React from "react";
import ReactDOM from "react-dom";
import './assets/main.css';
import App from "./App";
import Header from "./Header";
import Main from "./Main";
import Cards from "./Cards";
import Information from "./Info";
import Footer from "./Footer";

ReactDOM.render((
  <React.Fragment>
    <Header />
    <App />
    <Main />
    <Cards />
    <Information />
    <Footer />
  </React.Fragment>
), document.getElementById("root"));
