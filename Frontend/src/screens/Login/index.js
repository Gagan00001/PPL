import React from "react";
import { Link } from "react-router-dom";
import WelcomeToPPL from "../../components/WelcomeToPPL";
import LoginForm from "./component/LoginForm/LoginForm";

const Login = () => {
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
