import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import WelcomeToPPL from "../../components/WelcomeToPPL/welcomeToPPL";
import SignUpFormBase from "./SignUpFormBase";
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
