import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import Timeline from "../../screens/Timeline";

const Routing = () => (
  <>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Timeline" component={Timeline} />
      <Route path="/SignUp" component={SignUp} />
    </Switch>
  </>
);
export default Routing;
