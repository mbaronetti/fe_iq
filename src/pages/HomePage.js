import React from "react";
import Header from "../components/Header/Header";
import SearchResults from "../components/SearchResults/SearchResults";
import QuizBlock from "../components/QuizBlock/QuizBlock";
import About from "../components/About/About";
//import Particles from 'react-particles-js';
import logo from "../media/logo.png";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

const HomePage = () => {
  const questions = useSelector(state => state.questions);

  if (questions)
    return (
      <div id="Homepage">
        <Header
          logo={logo}
          title="Front end Glossary"
          subTitle={"+" + questions.length + " Interview Questions in a snap!"}
        />
        <div className="homepage--container">
          <Row gutter={12}>
            <Col span={4}>
              <About />
            </Col>
            <Col span={6}>
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
