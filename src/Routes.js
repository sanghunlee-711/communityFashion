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
import Menu from "./Pages/Menu/Menu";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Upload from "./Pages/Upload/Upload";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/menu/:menuId/:menuKey" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/upload" component={Upload} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routes;
