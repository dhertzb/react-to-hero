import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Passengers from "../../pages/Passengers";
class RouterView extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/passengers">
          <Passengers />
        </Route>
      </Switch>
    );
  }
}

export default RouterView;
