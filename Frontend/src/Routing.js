import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./screens/LoginForm/LoginForm";
import SignUp from "./screens/SignUp/SignUp";
import Timeline from "./screens/Timeline/Timeline";

const Routing = () => (
  <>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/Timeline" component={Timeline} />
      <Route path="/SignUp" component={SignUp} />
    </Switch>
  </>
);
export default Routing;
