import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Youtube from "./Pages/Youtube/Youtube";
import Menu from "./Pages/Menu/Menu";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/youtube" component={Youtube} />
          <Route exact path="/menu/:menuId/:menuKey" component={Menu} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routes;
