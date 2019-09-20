//hooks
import { useState, useEffect } from "react";

export const useRandomQuestion = (questions = []) => {
  const [question, setQuestion] = useState(null);
  const length = questions.length;
  const index = Math.floor(Math.random() * length);
  useEffect(() => setQuestion(questions[index]) , [questions])
  return question;
};
