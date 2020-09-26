import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import WelcomeToPPL from "../../components/WelcomeToPPL/WelcomeToPPL";
import SignUpFormBase from "../../components/SignUpForm/SignUpForm";
const SignUp = (props) => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <div className="register_sec">
              <SignUpFormBase />
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
