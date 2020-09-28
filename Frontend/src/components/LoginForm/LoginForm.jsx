import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

const LoginForm = (props) => {
  const [Email, SetEmail] = useState(" ");
  const [Password, SetPassword] = useState(" ");
  const [errorCode, SeterrorCode] = useState();
  const [err, Seterr] = useState("");
  const submitData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/Login", { Email, Password })
      .then((res) => {
        console.log("response from backend", res.data);
        Seterr(res.data.a);
        SeterrorCode(res.data.errorCode);
        props.history.push("/Timeline");
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };
  return (
    <div>
      <div className="login_sec">
        <form onSubmit={submitData}>
          <h1>Log In</h1>
          <ul>
            <li>
              <span>Email-ID</span>
              <Input
                style={
                  errorCode == 3
                    ? { color: "red", border: "2px solid red" }
                    : {}
                }
                type="text"
                name="Email"
                placeholder="Enter your email"
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
                onFocus={() => {
                  SeterrorCode(" ");
                  Seterr(" ");
                }}
              />
            </li>
            <li>
              <span>Password</span>
              <Input
                style={
                  errorCode == 1
                    ? { color: "red", border: "2px solid red" }
                    : {}
                }
                type="password"
                name="Password"
                placeholder="Enter your password"
                onFocus={() => {
                  SeterrorCode(" ");
                  Seterr(" ");
                }}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
              />
            </li>
            <li>
              <input type="checkbox" />
              Remember Me
            </li>
            <li>
              <Input type="submit" defaultValue="Log In" />
              <a href>Forgot Password</a>
            </li>
          </ul>
          <span style={errorCode == 2 ? { color: "green" } : { color: "red" }}>
            {err}
          </span>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
