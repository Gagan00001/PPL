import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Timeline from "./Timeline";
// import SignUpForm from "./SignUpForm";
// import LoginForm from "./LoginForm";
// import UploadForm from "./UploadForm";
// import Images from "./Images";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routing />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
