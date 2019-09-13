import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/actions";

export const useSearchBox = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const onSearch = e => {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
    setVal(value);
  };
  return { val, onSearch };
};
