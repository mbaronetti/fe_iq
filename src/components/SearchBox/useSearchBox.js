import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setTagMode } from "../../redux/actions";
import { useDebouncedCallback } from "use-debounce";

export const useSearchBox = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const tagMode = useSelector(state => state.tagMode);
  const searchTerm = useSelector(state => state.searchTerm);

  const [debouncedCallback] = useDebouncedCallback(value => {
    dispatch(setSearchTerm(value));
  }, 250);

  const onSearch = e => {
    const value = e.target.value;
    setVal(value);
    debouncedCallback(value);
  };

  const onSwitch = () => {
    dispatch(setTagMode(!tagMode));
  };
  return { val, onSearch, onSwitch, tagMode , searchTerm};
};
