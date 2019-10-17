import React, { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
import {setSearchTerm , setTagMode} from '../../redux/actions'
const Tags = props => {
  const { tags } = props;
  const dispatch = useDispatch()
  const searchTerm = useSelector(state => state.searchTerm);
  const tagMode = useSelector(state => state.tagMode);
  const handleClick = tag => {
    dispatch(setSearchTerm(tag))
    if(!tagMode) document.getElementById('switch-input').click()
  }
  const renderTags = tags.map((tag, index) => (
    <span key={index} onClick={() => handleClick(tag)} className={tagMode && tag === searchTerm ? "orange" : "tag--link"}>
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
