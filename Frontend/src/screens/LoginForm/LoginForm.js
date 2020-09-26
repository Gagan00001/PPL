import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/headers/Header";
import Footer from "../../components/footers/Footer";
import Description from "../../components/WelcomeToPPL/welcomeToPPL";

const LoginForm = (props) => {
  const [Email, SetEmail] = useState(" ");
  const [Password, SetPassword] = useState(" ");
  const [b, Setb] = useState();
  const [err, Seterr] = useState("");
  const submitdata = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/Login", { Email, Password })
      .then((res) => {
        console.log("response from backend", res.data);
        Seterr(res.data.a);
        Setb(res.data.b);
        props.history.push("/Timeline")
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <div className="login_sec">
              <form onSubmit={submitdata}>
                <h1>Log In</h1>
                <ul>
                  <li>
                    <span>Email-ID</span>
                    <input
                      style={
                        b == 3 ? { color: "red", border: "2px solid red" } : {}
                      }
                      type="text"
                      name="Email"
                      placeholder="Enter your email"
                      onChange={(e) => {
                        SetEmail(e.target.value);
                      }}
                      onFocus={() => {
                        Setb(" ");
                        Seterr(" ");
                      }}
                    />
                  </li>
                  <li>
                    <span>Password</span>
                    <input
                      style={
                        b == 1 ? { color: "red", border: "2px solid red" } : {}
                      }
                      type="password"
                      name="Password"
                      placeholder="Enter your password"
                      onFocus={() => {
                        Setb(" ");
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
                    <input type="submit" defaultValue="Log In" />
                    <a href>Forgot Password</a>
                  </li>
                </ul>
                <span style={b == 2 ? { color: "green" } : { color: "red" }}>
                  {err}
                </span>
              </form>
              <div className="addtnal_acnt">
                I do not have any account yet.
                <Link to="/SignUp">Create My Account Now !</Link>
              </div>
            </div>
          </div>
          <Description />
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
