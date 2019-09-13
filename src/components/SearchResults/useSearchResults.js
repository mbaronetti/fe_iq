import { useState , useEffect } from "react";
import { useSelector } from "react-redux";

const useSearchResults = questions => {
  const [results, setResults] = useState([]);
  let searchTerm = useSelector(state => state.searchTerm);
  searchTerm = searchTerm && searchTerm.toLowerCase();
  const data = questions.filter(item =>
    item.question.toLowerCase().includes(searchTerm)
  );

  useEffect(() => setResults(data) , [searchTerm])
  if (!searchTerm || searchTerm.length === 0) return null;
  return results;
};

export default useSearchResults;
