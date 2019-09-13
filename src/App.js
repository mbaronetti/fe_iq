import React, { useEffect } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "antd/dist/antd.css";
import HomePage from "./pages/HomePage";
import { questions } from "./utilities/questions";
import { useDispatch } from "react-redux";
import { setQuestions } from "./redux/actions";
import "./App.css";
//import logo from "./logo.svg";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuestions(questions));
  } , []);
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
};

export default App;
