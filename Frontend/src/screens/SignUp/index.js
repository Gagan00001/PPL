import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import WelcomeToPPL from "../../components/WelcomeToPPL";
import SignUpForm from "./component/SignUpForm/SignUpForm";
const SignUp = () => {
  return (
    <>
    <Header/>
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <div className="register_sec">
              <SignUpForm />
              <div className="addtnal_acnt">
                I already have an account.
                <Link to="/">Login My Account !</Link>
              </div>
            </div>
          </div>
          <WelcomeToPPL />
        </div>
      </div>
    </>
  );
};
export default SignUp;
