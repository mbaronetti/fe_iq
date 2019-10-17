export const questions = [
  {
    id: "1",
    question: "What is Virtual DOM?",
    answer:
      "The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app. Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.",
    tags: ["React", "DOM" , "Virtual DOM"],
    ref: "https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"
  },
  {
    id: "2",
    question: "Is the Shadow DOM the same as the Virtual DOM?",
    answer:
      "No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.",
    tags: ["React", "DOM" , "Virtual DOM"],
    ref: "https://reactjs.org/docs/faq-internals.html#is-the-shadow-dom-the-same-as-the-virtual-dom"
  },
  {
    id: "3",
    question: "What is React Memo?",
    answer:
      "React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes. If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result. By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.",
    tags: ["React", "Memo" , "HOC" , "Shallow"],
    ref: "https://reactjs.org/docs/react-api.html#reactmemo"
  },
  {
    id: "4",
    question: "What is a single page app is and how to make one SEO-friendly?",
    answer:
      "Web developers these days refer to the products they build as web apps, rather than websites. While there is no strict difference between the two terms, web apps tend to be highly interactive and dynamic, allowing the user to perform actions and receive a response to their action. Traditionally, the browser receives HTML from the server and renders it. When the user navigates to another URL, a full-page refresh is required and the server sends fresh new HTML to the new page. This is called server-side rendering.However, in modern SPAs, client-side rendering is used instead. The browser loads the initial page from the server, along with the scripts (frameworks, libraries, app code) and stylesheets required for the whole app. When the user navigates to other pages, a page refresh is not triggered. The URL of the page is updated via the HTML5 History API. New data required for the new page, usually in JSON format, is retrieved by the browser via AJAX requests to the server. The SPA then dynamically updates the page with the data via JavaScript, which it has already downloaded in the initial page load. This model is similar to how native mobile apps work.",
    tags: ["SPA", "SEO"],
    ref: "#"
  },
  {
    id: "5",
    question: "What is render Props?",
    answer:
      "The term 'render prop' refers to a technique for sharing code between React components using a prop whose value is a function.",
    tags: ["React", "Props"],
    ref: "https://reactjs.org/docs/render-props.html"
  },
  {
    id: "6",
    question: "What is Shallow rendering?",
    answer:
      "When writing unit tests for React, shallow rendering can be helpful. Shallow rendering lets you render a component “one level deep” and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered. This does not require a DOM.",
    tags: ["React", "Hooks"],
    ref: "https://reactjs.org/docs/shallow-renderer.html#overview"
  }
];

export const quizQuestions = [
  {
    id: "1",
    question: "Virtual DOM",
    answer:
      "In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.",
    correctAnswer: true,
    explanation: "Is a virtual representation of te DOM, kept in memory"
  },
  {
    id: "2",
    question: "React Hook",
    answer: "Are use of classes.",
    correctAnswer: false,
    explanation: "No, it's statefull function components"
  }
];
