import React from "react";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import useSearchResults from "./useSearchResults";
import Tags from "../Tags/Tags";
import { Row, Col, Icon } from "antd";


const SearchResults = props => {
  const { questions } = props;
  const data = useSearchResults(questions);
  const results = data ? data : questions;
  return (
    <div style={{ overflow: "auto", maxHeight: "80vh" }}>
      {results.map((item, index) => (
        <QuestionBlock
          key={index}
          question={item.question}
          answer={item.answer}
        >
          <Row>
            <Col span={12}>
              <Tags tags={item.tags} />
            </Col>
            <Col offset={10} span={2}>
              <a
                className="ref--link"
                href={item.ref}
                target="_blank"
                title="Reference"
              >
                Ref <Icon type="rocket" size="small" />
              </a>
            </Col>
          </Row>
        </QuestionBlock>
      ))}
    </div>
  );
};

export default SearchResults;
