import React from "react";
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/Restaurant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Backpack from "./components/Backpack";
import Mission from "./components/Mission";
// import OpenForm from "./components/OpenForm";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Restaurants} exact />
      <Route path="/places/:id" component={Restaurant} exact />
      <Route path="/participate" component={SignUpForm} exact />
      <Route path="/backpack" component={Backpack} exact />
      <Route path="/mission" component={Mission} exact />

      {/* <Route path="/subscribe" component={OpenForm} exact /> */}
    </Router>
  );
};

export default App;
