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
        Showing results for:&nbsp;
        <strong className="green">
          <span data-testid="search-value">{val}</span>
        </strong>
      </p>
    </div>
  );
};

export default SearchBox;
