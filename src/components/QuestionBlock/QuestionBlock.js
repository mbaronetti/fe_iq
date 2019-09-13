import React from "react";
import { Row, Col } from "antd";
import './QuestionBlock.css'

const QuestionBlock = props => {
  const { question, answer } = props;
  return (
    <div className="question--block">
      <Row>
        <Col span={24}>
          <h2>{question}</h2>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p>{answer}</p>
        </Col>
      </Row>
    </div>
  );
};

export default QuestionBlock;
