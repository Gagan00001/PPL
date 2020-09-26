import React, { useState, axios } from "react";

export default function SignUpFormBase(props) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [b, Setb] = useState();
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
        Setb(res.data.b);
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
          <input
            style={b == 1 ? { border: "2px solid red" } : {}}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onFocus={() => {
              Setb(" ");
              Seterr(" ");
            }}
            type="text"
            placeholder="Enter your username"
            name="Username"
          />
        </li>
        <li>
          <span>Password</span>
          <input
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
          <input
            style={b == 2 ? { border: "2px solid red" } : {}}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={() => {
              Setb(" ");
              Seterr(" ");
            }}
            type="text"
            placeholder="Enter your email"
            name="Email"
          />
        </li>
        <li>
          <span>First Name</span>
          <input
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
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder="Enter your last name"
            name="LastName"
          />
        </li>
        <li>
          <input type="checkbox" />I agree to Term &amp; Conditions
        </li>
        <li>
          <input type="submit" defaultValue="Register" />
        </li>
      </ul>
      <span style={b == 3 ? { color: "green" } : { color: "red" }}>{err}</span>
    </form>   
  );
}
