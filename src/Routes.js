import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Youtube from "./Pages/Youtube/Youtube";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/youtube" component={Youtube} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
