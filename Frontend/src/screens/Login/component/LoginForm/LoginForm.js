import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Input from "../../../../components/Input";
import Loader from "../../../../components/Loader";
import {
  setCurrentData,
  setError,
  setLoading,
}from "../../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = (props) => {
  const err=useSelector((state)=>state.errorReducer.error)
  // console.log(">>>>",err);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 const handleFocus = () => {
    // setErr(" ");
  };

  const submitData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/Login", { Email, Password })
      .then((res) => {
        // console.log("response from backend", res.data);
        if (
          res.data.msg === "Wrong Password" ||
          res.data.msg === "Email-Id Not Registered"
        ) {
          dispatch(setError(res.data.msg));
          dispatch(setLoading(false));
        } else {
          const resData = {
            _id: res.data._id,
            Username: res.data.Username,
            FirstName: res.data.FirstName,
            LastName: res.data.LastName,
            Email: res.data.Email,
          };
          localStorage.setItem("user", JSON.stringify(resData));
          dispatch(setCurrentData(resData));
          // dispatch(setError(res.data.msg));
          dispatch(setLoading(true));
          props.history.push("/Timeline");
        }
      })
      .catch((err) => {
        console.log("errr", err);
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
                  err === "Email-Id Not Registered"
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
                  err === "Wrong Password"
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
          <span
            style={
              err === "Login Successful" ? { color: "green" } : { color: "red" }
            }
          >
            {err}
          </span>
        </form>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
