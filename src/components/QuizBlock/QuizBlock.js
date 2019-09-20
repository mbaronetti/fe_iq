import React from "react";
import { Row, Col, Button } from "antd";
import QuestionBlock from "../QuestionBlock/QuestionBlock";

const QuizBlock = props => {
  const { question, answer, key } = props;
  const buttonStyle = {
    display: "block",
    margin: "auto"
  };
  return (
    <QuestionBlock key={key} question={question} answer={answer}>
      <Row>
        <Col span={12}>
          <Button type="danger" icon="close-circle" style={buttonStyle}>
            False
          </Button>
        </Col>
        <Col span={12}>
          <Button type="primary" icon="check-circle" style={buttonStyle}>
            True
          </Button>
        </Col>
      </Row>
    </QuestionBlock>
  );
};

export default QuizBlock;
