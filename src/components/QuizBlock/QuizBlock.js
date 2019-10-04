import React from "react";
import { Row, Col, Button, Icon, Result } from "antd";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import useQuizBlock from "./useQuizBlock";

const QuizBlock = props => {
  const buttonStyle = {
    display: "block",
    margin: "auto"
  };
  const {
    handleClick,
    isCorrect,
    showResult,
    question,
    answer,
    correctAnswer,
    explanation,
    handleResultClick
  } = useQuizBlock();
  if (showResult)
    return (
      <Result
        icon={
          isCorrect ? (
            <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
          ) : (
            <Icon type="close-circle" theme="twoTone" twoToneColor="tomato" />
          )
        }
        title={explanation}
        extra={<Button type="primary" onClick={handleResultClick}>Next Question</Button>}
      />
    );
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
            value={false}
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
            onClick={handleClick}
            value={true}
          >
            True
          </Button>
        </Col>
      </Row>
    </QuestionBlock>
  );
};

export default QuizBlock;
