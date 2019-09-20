export const questions = [
  {
    id: "1",
    question: "What is Virtual DOM?",
    answer:
      "In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.",
    tags: ["react", "dom"]
  },
  {
    id: "2",
    question: "What are React Hooks?",
    answer:
      "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible. This page provides an overview of Hooks for experienced React users.",
    tags: ["react", "hooks", "sample"]
  },
  {
    id: "3",
    question: "What is React Memo?",
    answer:
      "React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes. If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result. By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.",
    tags: ["react", "hooks", "sample"]
  }
];

export const quizQuestions = [
  {
    id: "1",
    question: "Virtual DOM",
    answer:
      "In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.",
    correctAnswer: true
  }
];
