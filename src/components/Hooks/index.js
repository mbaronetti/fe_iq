//hooks

export const useRandomQuestion = questions => {
  if (!questions) return null;
  const length = questions.length;
  const index = Math.floor(Math.random() * length);
  return questions[index];
};
