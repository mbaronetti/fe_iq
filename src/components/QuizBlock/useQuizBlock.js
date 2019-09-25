import React, { useState } from "react";

const useQuizBlock = correctAnswer => {
  const [disabled, setDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const handleClick = val => {
    console.log(val);
    console.log(correctAnswer);
    setIsCorrect(val === correctAnswer);
    setDisabled(true)
  };
  return {
    handleClick,
    disabled,
    isCorrect
  };
};

export default useQuizBlock;
