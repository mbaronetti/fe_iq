import { useSelector } from "react-redux";

const useSearchResults = questions => {
  const tagMode = useSelector(state => state.tagMode);
  let searchTerm = useSelector(state => state.searchTerm);

  const tagsMatch = questions.map(question =>
    question.tags.filter(tag => tag.toLowerCase().includes(searchTerm))
  );

  const data = !tagMode
    ? questions.filter(item => item.question.toLowerCase().includes(searchTerm))
    : questions.filter((question, index) => tagsMatch[index].length > 0);

  if (!searchTerm || searchTerm.length === 0) return null;
  return data;
};

export default useSearchResults;
