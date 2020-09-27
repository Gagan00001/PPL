import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../screens/Login/Login";
import SignUp from "../../screens/SignUp/SignUp";
import Timeline from "../../screens/Timeline/Timeline";

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
