import React from "react";
import Header from "../components/Header/Header";
import SearchResults from "../components/SearchResults/SearchResults";
import logo from "../media/logo.png";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

const HomePage = () => {
  const questions = useSelector(state => state.questions);
  if (questions)
    return (
      <div id="Homepage">
        <Header logo={logo} title="Front end Interview Questions" />
        <div className="homepage--container">
          <Row>
            <Col span={10} />
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
