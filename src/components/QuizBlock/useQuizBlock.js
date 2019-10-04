import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { randomItem, checkArrayItemExistance } from "../Hooks";

const useQuizBlock = () => {
  const quizQuestions = useSelector(state => state.quizQuestions);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizQuestion, setQuizQuestion] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const handleReloadQuiz = () => {
    setCorrectAnswers(0)
    setAnsweredQuestions([]);
    setQuizCompleted(false);
    setQuizQuestion(randomItem(quizQuestions));
  };

  const handleClick = e => {
    const { correctAnswer } = quizQuestion;
    const val = JSON.parse(e.target.value);
    const correct = val === correctAnswer
    setIsCorrect(correct);
    setShowResult(true);
    handleAnsweredQuestions();
    if(correct) setCorrectAnswers(correctAnswers + 1)
  };

  const handleAnsweredQuestions = () => {
    const answered = checkArrayItemExistance(quizQuestion, answeredQuestions);
    if (!answered) {
      const array = answeredQuestions.concat(quizQuestion);
      setAnsweredQuestions(array);
    }
  };

  const handleNewQuestion = question => {
    if (answeredQuestions.length === quizQuestions.length)
      return setQuizCompleted(true);
    const answered = checkArrayItemExistance(question, answeredQuestions);
    if (!answered) setQuizQuestion(question);
    else return handleNewQuestion(randomItem(quizQuestions));
  };

  const handleResultClick = () => {
    setShowResult(false);
    handleNewQuestion(randomItem(quizQuestions));
  };

  useEffect(() => {
    setQuizQuestion(randomItem(quizQuestions));
  }, []);

  return {
    quizCompleted,
    handleClick,
    isCorrect,
    showResult,
    question: quizQuestion ? quizQuestion.question : null,
    answer: quizQuestion ? quizQuestion.answer : null,
    correctAnswer: quizQuestion ? quizQuestion.correctAnswer : null,
    explanation: quizQuestion ? quizQuestion.explanation : null,
    handleResultClick,
    handleReloadQuiz,
    correctAnswers,
    quizQuestions
  };
};

export default useQuizBlock;
