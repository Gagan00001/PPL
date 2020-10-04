import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Input from "../../../../components/Input";
import Loader from "../../../../components/Loader";
import { setCurrentData } from "../../../../Redux/Actions";
import Timeline from "../../../Timeline";
import { connect, useDispatch } from "react-redux";
import Login from "../..";

const LoginForm = (props) => {
  console.log("LoginForm -> props", props);
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState();
  const [err, setErr] = useState();
  const handleFocus = () => {
    setErrorCode(" ");
    setErr(" ");
  };

  const submitData = (event) => {
    event.preventDefault();
    setIsLoading(true);
      axios
        .post("http://localhost:8081/Login", { Email, Password })
        .then((res) => {
          console.log("response from backend", res.data);
          dispatch(setCurrentData(res.data))
          setIsLoading(false);
          if (res.data.a === "Login Successful")
          props.history.push("/Timeline");
        })
        .catch((err) => {
          // setErr(res.data.a);
          // setErrorCode(res.data.b);
          console.log("errr",err);
        });
  };
  return (
    <div>
      {isLoading && <Loader isLoading={isLoading} />}
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
                  setEmail(e.target.value);
                }}
                onFocus={handleFocus}
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
                onFocus={handleFocus}
                onChange={(e) => {
                  setPassword(e.target.value);
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
const mapStatetoProps = (state) => {
  console.log("new state", state);
  return {};
};
// const mapDispatchtoProps = (dispatch) => {
//   return {
//     saveUserData: (data) => dispatch(login(data)),
//   };
// };

export default withRouter(LoginForm)