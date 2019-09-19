import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/actions";
import { useDebouncedCallback } from "use-debounce";

export const useSearchBox = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const [debouncedCallback] = useDebouncedCallback(value => {
    dispatch(setSearchTerm(value));
  }, 250);
  const onSearch = e => {
    const value = e.target.value;
    setVal(value);
    debouncedCallback(value);
  };
  return { val, onSearch };
};
