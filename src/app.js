import React from "react";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Restaurants} exact />
        <Route path="/places/:id" component={Restaurant} exact />
      </Switch>
    </Router>
  );
};

export default App;
