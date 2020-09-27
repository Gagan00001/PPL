import React,{useState}from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

const LoginForm = (props) => {
  const [Email, SetEmail] = useState(" ");
  const [Password, SetPassword] = useState(" ");
  const [b, Setb] = useState();
  const [err, Seterr] = useState("");
  const submitData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/Login", { Email, Password })
      .then((res) => {
        console.log("response from backend", res.data);
        Seterr(res.data.a);
        Setb(res.data.b);
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
                style={b == 3 ? { color: "red", border: "2px solid red" } : {}}
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
              <Input
                style={b == 1 ? { color: "red", border: "2px solid red" } : {}}
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
              <Input type="checkbox" />
              Remember Me
            </li>
            <li>
              <Input type="submit" defaultValue="Log In" />
              <a href>Forgot Password</a>
            </li>
          </ul>
          <span style={b == 2 ? { color: "green" } : { color: "red" }}>
            {err}
          </span>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
