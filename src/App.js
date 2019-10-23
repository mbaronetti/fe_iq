import React, { useEffect } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "antd/dist/antd.css";
import HomePage from "./pages/HomePage";
import PlayGround from "./pages/PlayGround";
import { questions , quizQuestions} from "./utilities/questions";
import { useDispatch } from "react-redux";
import { setQuestions , setQuizQuestions} from "./redux/actions";
import "./App.css";
//import logo from "./logo.svg";

const App = () => {
  const dispatch = useDispatch();
  const getQuestions = async () => {
    const response = await fetch("https://api.myjson.com/bins/1al9f8")
    const data = await response.json()
    console.log('data', data)
    dispatch(setQuestions(data.data));
    return data
  }
  useEffect(() => {
    //dispatch(setQuestions(questions));
    getQuestions()
    dispatch(setQuizQuestions(quizQuestions));
  }, []);
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/PlayGround" component={PlayGround} />
      </Switch>
    </HashRouter>
  );
};

export default App;
