import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { randomItem } from "../Hooks";

const useQuizBlock = () => {
  const quizQuestions = useSelector(state => state.quizQuestions);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizQuestion, setQuizQuestion] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleClick = e => {
    const { correctAnswer } = quizQuestion;
    const val = JSON.parse(e.target.value);
    setIsCorrect(val === correctAnswer);
    setShowResult(true);
  };

  const handleResultClick = () => {
    setShowResult(false);
    setQuizQuestion(randomItem(quizQuestions));
  };

  useEffect(() => {
    if (quizQuestions) {
      setQuizQuestion(randomItem(quizQuestions));
    }
  }, []);

  return {
    handleClick,
    isCorrect,
    showResult,
    question: quizQuestion ? quizQuestion.question : null,
    answer: quizQuestion ? quizQuestion.answer : null,
    correctAnswer: quizQuestion ? quizQuestion.correctAnswer : null,
    explanation: quizQuestion ? quizQuestion.explanation : null,
    handleResultClick
  };
};

export default useQuizBlock;
