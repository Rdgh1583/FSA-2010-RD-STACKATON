import React from "react";
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/Restaurant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Restaurants} exact />
      <Route path="/places/:id" component={Restaurant} exact />
    </Router>
  );
};

export default App;
