import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./components/Routing/Routing";
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routing />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
