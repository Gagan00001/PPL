import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./components/Routing";
import Store from "./Redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
