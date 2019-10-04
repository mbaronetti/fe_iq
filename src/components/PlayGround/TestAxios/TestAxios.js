import React, { useState, useEffect } from "react";

const TestAxios = props => {
  const { url } = props;
  const [state, setState] = useState();

  useEffect(() => {
    getData(url);
  }, []);

  const getData = async url => {
    const response = await fetch(url);
    const result = await response.json();
    setState(result);
  };
  return (
    <div style={{ color: "white" }}>
      <h1> Axios Test </h1>
      {state ? (
        <p data-testid="title">{state.title}</p>
      ) : (
        <p data-testid="loading">...Loading</p>
      )}
    </div>
  );
};

export default TestAxios;
