import React from "react";
import { Input, Switch } from "antd";
import { useSearchBox } from "./useSearchBox";
const { Search } = Input;

const SearchBox = props => {
  const { placeholder } = props;
  const { val, onSearch, onSwitch, tagMode } = useSearchBox();

  return (
    <div>
      <Search
        data-testid="search-input"
        placeholder={placeholder}
        onChange={onSearch}
        style={{ width: "100%", marginBottom: "5px" }}
      />
      <Switch size="small" onChange={onSwitch} /> by Tag
      <p>
        Showing {tagMode && 'Tag '}results for:&nbsp;
        <strong className="green">
          <span data-testid="search-value">{val}</span>
        </strong>
      </p>
    </div>
  );
};

export default SearchBox;
