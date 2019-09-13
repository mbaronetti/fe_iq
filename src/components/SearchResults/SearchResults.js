import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import useSearchResults from "./useSearchResults";

const SearchResults = props => {
  const { questions } = props;
  const data = useSearchResults(questions);
  const results = data ? data : questions;
  return (
    <div>
      {results.map((item, index) => (
        <QuestionBlock
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default SearchResults;
