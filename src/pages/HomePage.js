import React from "react";
import Header from "../components/Header/Header";
import SearchResults from "../components/SearchResults/SearchResults";
import QuestionBlock from "../components/QuestionBlock/QuestionBlock";
//import Particles from 'react-particles-js';
import logo from "../media/logo.png";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { useRandomQuestion } from "../components/Hooks";

const HomePage = () => {
  const questions = useSelector(state => state.questions);
  const randomQuestion = useRandomQuestion(questions);
  if (questions)
    return (
      <div id="Homepage">
        <Header logo={logo} title="Front end Interview Questions" />
        <div className="homepage--container">
          <Row gutter={12}>
            <Col span={4} offset={6}>
              {randomQuestion && (
                <QuestionBlock
                  key={randomQuestion.id}
                  question={randomQuestion.question}
                  answer={randomQuestion.answer}
                />
              )}
            </Col>
            <Col span={14}>
              <SearchResults questions={questions} />
            </Col>
          </Row>
        </div>
      </div>
    );
  return null;
};

export default HomePage;
