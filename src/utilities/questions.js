export const questions = [
  {
    id: "1",
    question: "What is Virtual DOM?",
    answer:
      "In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.",
    tags: ["react", "dom"],
    ref: "#"
  },
  {
    id: "2",
    question: "What are React Hooks?",
    answer:
      "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible. This page provides an overview of Hooks for experienced React users.",
    tags: ["react", "hooks", "sample"],
    ref: "#"
  },
  {
    id: "3",
    question: "What is React Memo?",
    answer:
      "React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes. If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result. By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.",
    tags: ["react", "hooks", "sample"],
    ref: "#"
  },
  {
    id: "4",
    question: "What is a single page app is and how to make one SEO-friendly.?",
    answer:
      "Web developers these days refer to the products they build as web apps, rather than websites. While there is no strict difference between the two terms, web apps tend to be highly interactive and dynamic, allowing the user to perform actions and receive a response to their action. Traditionally, the browser receives HTML from the server and renders it. When the user navigates to another URL, a full-page refresh is required and the server sends fresh new HTML to the new page. This is called server-side rendering.However, in modern SPAs, client-side rendering is used instead. The browser loads the initial page from the server, along with the scripts (frameworks, libraries, app code) and stylesheets required for the whole app. When the user navigates to other pages, a page refresh is not triggered. The URL of the page is updated via the HTML5 History API. New data required for the new page, usually in JSON format, is retrieved by the browser via AJAX requests to the server. The SPA then dynamically updates the page with the data via JavaScript, which it has already downloaded in the initial page load. This model is similar to how native mobile apps work.",
    tags: ["react", "hooks", "sample"],
    ref: "#"
  },
  {
    id: "5",
    question: "What is React Memo?",
    answer:
      "React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes. If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result. By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.",
    tags: ["react", "hooks", "sample"],
    ref: "#"
  },
  {
    id: "6",
    question: "What is a single page app is and how to make one SEO-friendly.?",
    answer:
      "Web developers these days refer to the products they build as web apps, rather than websites. While there is no strict difference between the two terms, web apps tend to be highly interactive and dynamic, allowing the user to perform actions and receive a response to their action. Traditionally, the browser receives HTML from the server and renders it. When the user navigates to another URL, a full-page refresh is required and the server sends fresh new HTML to the new page. This is called server-side rendering.However, in modern SPAs, client-side rendering is used instead. The browser loads the initial page from the server, along with the scripts (frameworks, libraries, app code) and stylesheets required for the whole app. When the user navigates to other pages, a page refresh is not triggered. The URL of the page is updated via the HTML5 History API. New data required for the new page, usually in JSON format, is retrieved by the browser via AJAX requests to the server. The SPA then dynamically updates the page with the data via JavaScript, which it has already downloaded in the initial page load. This model is similar to how native mobile apps work.",
    tags: ["react", "hooks", "sample"],
    ref: "#"
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
