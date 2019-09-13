import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter  } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";

window.store = store;
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter >
      <App />
    </HashRouter >
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
