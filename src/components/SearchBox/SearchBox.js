import React from "react";
import { Input } from "antd";
import { useSearchBox } from "./useSearchBox";
const { Search } = Input;

const SearchBox = props => {
  const { placeholder } = props;
  const { val, onSearch } = useSearchBox();
  return (
    <div>
      <Search
        placeholder={placeholder}
        onChange={onSearch}
        style={{ width: "100%" }}
      />
      <p>
        Showing results for: <strong className="green">{val}</strong>
      </p>
    </div>
  );
};

export default SearchBox;
