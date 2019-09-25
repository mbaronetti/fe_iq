import React from "react";
import { Row, Col, Button } from "antd";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import useQuizBlock from "./useQuizBlock";

const QuizBlock = props => {
  const { question, answer, correctAnswer } = props;
  const buttonStyle = {
    display: "block",
    margin: "auto"
  };
  const { handleClick, disabled, isCorrect } = useQuizBlock(correctAnswer);
  return (
    <QuestionBlock question={question} answer={answer}>
      <Row>
        <Col span={12}>
          <Button
            data-testid="false-button"
            type="danger"
            icon="close-circle"
            style={buttonStyle}
            onClick={handleClick}
            disabled={disabled}
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
            onClick={() => handleClick(true)}
            disabled={disabled}
          >
            True
          </Button>
        </Col>
      </Row>
      {disabled ? (isCorrect ? "Correct" : "false") : null}
    </QuestionBlock>
  );
};

export default QuizBlock;
