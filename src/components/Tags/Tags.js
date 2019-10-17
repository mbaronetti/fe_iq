import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Tags = props => {
  const { tags } = props;
  const searchTerm = useSelector(state => state.searchTerm);
  const tagMode = useSelector(state => state.tagMode);
  const renderTags = tags.map((tag, index) => (
    <span key={index} className={tagMode && tag === searchTerm ? "orange" : ""}>
      {tag}&nbsp;
    </span>
  ));

  return (
    <div className="tags-container">
      <strong>Tags: </strong>
      {renderTags}
    </div>
  );
};

export default Tags;
