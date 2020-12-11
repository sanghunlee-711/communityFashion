import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/ThemeProvider";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider key={theme} theme={theme}>
    <Provider store={store}>
      <Router />
      <GlobalStyle />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
