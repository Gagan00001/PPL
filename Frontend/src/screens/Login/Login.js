import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import WelcomeToPPL from "../../components/WelcomeToPPL/WelcomeToPPL";
import LoginForm from "./LoginComponent/LoginForm/LoginForm";

const Login = (props) => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <LoginForm />
            <div className="addtnal_acnt">
              I do not have any account yet.
              <Link to="/SignUp">Create My Account Now !</Link>
            </div>
          </div>
          <WelcomeToPPL />
        </div>
      </div>
    </div>
  );
};
export default Login;
