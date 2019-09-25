import React from "react";
import { Row, Col, Button } from "antd";
import QuestionBlock from "../QuestionBlock/QuestionBlock";

const QuizBlock = props => {
  const { question, answer } = props;
  const buttonStyle = {
    display: "block",
    margin: "auto"
  };
  return (
    <QuestionBlock question={question} answer={answer}>
      <Row>
        <Col span={12}>
          <Button
            data-testid="false-button"
            type="danger"
            icon="close-circle"
            style={buttonStyle}
          >
            False
          </Button>
        </Col>
        <Col span={12}>
          <Button
            data-testid="true-button"
            className="btn-success"
            type="primary"
            icon="check-circle"
            style={buttonStyle}
          >
            True
          </Button>
        </Col>
      </Row>
    </QuestionBlock>
  );
};

export default QuizBlock;
