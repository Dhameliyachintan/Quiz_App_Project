const SubjectsData = {
  english: [
    {
      title: "Grammar",
      description:
        "Study of the structure and use of the English language, focusing on syntax, morphology, and punctuation.",
    },
  ],
  react: [
    {
      title: "Welcome to React js",
      description:
        "An introduction to building user interfaces with React, emphasizing component-based architecture and hooks for state management.",
    },
  ],
};

export default SubjectsData;

export const EnglishGrammarQuiz = {
  title: "English Grammar Quiz",
  questions: [
    {
      question: "What is the plural of 'child'?",
      options: [
        { option: "children", text: "children" },
        { option: "childs", text: "childs" },
        { option: "childes", text: "childes" },
        { option: "none of the above", text: "none of the above" },
      ],
      correctAnswer: "children",
    },
    {
      question: "Which of the following is a correct sentence?",
      options: [
        { option: "He go to school.", text: "He go to school." },
        { option: "He goes to school.", text: "He goes to school." },
        { option: "He going to school.", text: "He going to school." },
        { option: "He gone to school.", text: "He gone to school." },
      ],
      correctAnswer: "He goes to school.",
    },
    {
      question: "Which word is an adjective?",
      options: [
        { option: "quickly", text: "quickly" },
        { option: "quick", text: "quick" },
        { option: "run", text: "run" },
        { option: "happiness", text: "happiness" },
      ],
      correctAnswer: "quick",
    },
    {
      question: "What is the past tense of 'go'?",
      options: [
        { option: "goes", text: "goes" },
        { option: "goed", text: "goed" },
        { option: "went", text: "went" },
        { option: "gone", text: "gone" },
      ],
      correctAnswer: "went",
    },
    {
      question: "Which of these is a conjunction?",
      options: [
        { option: "and", text: "and" },
        { option: "quick", text: "quick" },
        { option: "slowly", text: "slowly" },
        { option: "happy", text: "happy" },
      ],
      correctAnswer: "and",
    },
  ],
};

export const ReactjsQuiz = [
  {
    question: "What is React?",
    options: [
      {
        option: "A library for building user interfaces",
        text: "A library for building user interfaces",
      },
      { option: "A programming language", text: "A programming language" },
      { option: "A framework", text: "A framework" },
      { option: "None of the above", text: "None of the above" },
    ],
    correctAnswer: "A library for building user interfaces",
  },
  {
    question: "What is a component in React?",
    options: [
      {
        option: "A function that returns HTML",
        text: "A function that returns HTML",
      },
      { option: "A class", text: "A class" },
      { option: "A package", text: "A package" },
      { option: "None of the above", text: "None of the above" },
    ],
    correctAnswer: "A function that returns HTML",
  },
  {
    question: "What is the purpose of props in React?",
    options: [
      {
        option: "To manage state",
        text: "To manage state",
      },
      {
        option: "To pass data to components",
        text: "To pass data to components",
      },
      { option: "To style components", text: "To style components" },
      { option: "None of the above", text: "None of the above" },
    ],
    correctAnswer: "To pass data to components",
  },
  {
    question: "What does JSX stand for?",
    options: [
      { option: "JavaScript XML", text: "JavaScript XML" },
      { option: "Java Syntax Extension", text: "Java Syntax Extension" },
      { option: "JavaScript XSS", text: "JavaScript XSS" },
      { option: "None of the above", text: "None of the above" },
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    question: "What hook is used to manage state in functional components?",
    options: [
      { option: "useState", text: "useState" },
      { option: "useEffect", text: "useEffect" },
      { option: "useContext", text: "useContext" },
      { option: "useReducer", text: "useReducer" },
    ],
    correctAnswer: "useState",
  },
];
