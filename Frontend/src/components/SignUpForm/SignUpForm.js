import React, { useState, axios } from "react";
import Input from "../Input/Input";
const SignUpForm = (props) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [errorCode, SeterrorCode] = useState();
  const [err, Seterr] = useState("");

  const submitdata = (event) => {
    event.preventDefault();
    console.log("Hello");
    axios
      .post("http://localhost:8081/SignUp", {
        Username,
        Password,
        Email,
        FirstName,
        LastName,
      })
      .then((res) => {
        console.log("response from backend", res.data);
        Seterr(res.data.a);
        SeterrorCode(res.data.errorCode);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };
  return (
    <form onSubmit={submitdata}>
      <h1>Create An Account</h1>
      <ul>
        <li>
          <span>Username</span>
          <Input
            style={errorCode == 1 ? { border: "2px solid red" } : {}}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onFocus={() => {
              SeterrorCode(" ");
              Seterr(" ");
            }}
            type="text"
            placeholder="Enter your username"
            name="Username"
          />
        </li>
        <li>
          <span>Password</span>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            name="Password"
          />
        </li>
        <li>
          <span>Email</span>
          <Input
            style={errorCode == 2 ? { border: "2px solid red" } : {}}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={() => {
              SeterrorCode(" ");
              Seterr(" ");
            }}
            type="text"
            placeholder="Enter your email"
            name="Email"
          />
        </li>
        <li>
          <span>First Name</span>
          <Input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            placeholder="Enter your first name"
            name="FirstName"
          />
        </li>
        <li>
          <span>Last Name</span>
          <Input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder="Enter your last name"
            name="LastName"
          />
        </li>
        <li>
          <Input type="checkbox" />I agree to Term &amp; Conditions
        </li>
        <li>
          <Input type="submit" defaultValue="Register" />
        </li>
      </ul>
      <span style={errorCode == 3 ? { color: "green" } : { color: "red" }}>
        {err}
      </span>
    </form>
  );
};
export default SignUpForm;
