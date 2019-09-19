import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useSearchResults = questions => {
  const [results, setResults] = useState([]);
  const tagMode = useSelector(state => state.tagMode);
  let searchTerm = useSelector(state => state.searchTerm);
  searchTerm = searchTerm && searchTerm.toLowerCase();

  const tagsMatch = questions.map(question =>
    question.tags.filter(tag => tag.includes(searchTerm))
  );

  const data = !tagMode
    ? questions.filter(item => item.question.toLowerCase().includes(searchTerm))
    : questions.filter((question, index) => tagsMatch[index].length > 0);

  useEffect(() => setResults(data), [searchTerm]);

  if (!searchTerm || searchTerm.length === 0) return null;
  return data;
};

export default useSearchResults;
