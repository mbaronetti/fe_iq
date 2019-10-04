import React from "react";
import Header from "../components/Header/Header";
import SearchResults from "../components/SearchResults/SearchResults";
import QuestionBlock from "../components/QuestionBlock/QuestionBlock";
import QuizBlock from "../components/QuizBlock/QuizBlock";
//import Particles from 'react-particles-js';
import logo from "../media/logo.png";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

const HomePage = () => {
  const questions = useSelector(state => state.questions);

  if (questions)
    return (
      <div id="Homepage">
        <Header logo={logo} title="Front end Glossary" />
        <div className="homepage--container">
          <Row gutter={12}>
            <Col span={4} offset={6}>
              <QuizBlock />
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
