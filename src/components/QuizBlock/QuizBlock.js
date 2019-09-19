import React from "react";
import { Row, Col , Button} from "antd";

const QuizBlock = props => {
  const { question, answer } = props;
  return (
    <div className="question--block">
      <Row>
        <Col span={24}>
          <h2>{question}</h2>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button icon="loading" />
        </Col>
      </Row>
    </div>
  );
};

export default QuizBlock;
