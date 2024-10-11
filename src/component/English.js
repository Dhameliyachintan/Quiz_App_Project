import React, { useState } from "react";
import { EnglishGrammarQuiz } from "../constant";
import Result from "./Result";
import { useSnackbar } from "notistack";

export default function English() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState(Array(EnglishGrammarQuiz.questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const currentQuestion = EnglishGrammarQuiz.questions[currentQuestionIndex];
  const { question, options } = currentQuestion;

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestionIndex] = selectedOption;
      setAnswers(updatedAnswers);

      if (currentQuestionIndex < EnglishGrammarQuiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        enqueueSnackbar("Quiz submitted successfully!", { variant: "success" });
        setIsSubmitted(true);
      }
    }
  };

  const handlePreviewQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1]);
    }
  };

  if (isSubmitted) {
    const score = answers.reduce((score, answer, index) => {
      return answer === EnglishGrammarQuiz.questions[index].correctAnswer
        ? score + 1
        : score;
    }, 0);

    return <Result score={score} total={EnglishGrammarQuiz.questions.length} answers={answers} quiz={EnglishGrammarQuiz.questions} />;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>{EnglishGrammarQuiz.title}</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px" }}>{question}</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {options.map(({ option, text }) => (
            <li
              key={option}
              style={{ margin: "10px 0", fontSize: "18px", display: "flex", alignItems: "center" }}
            >
              <input
                type="radio"
                id={option}
                name="quiz-option"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                style={{ marginRight: "10px" }}
              />
              <label htmlFor={option}>{option}: {text}</label>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handlePreviewQuestion}
        disabled={currentQuestionIndex === 0}
        className="px-4 py-2 text-lg font-semibold rounded-md bg-blue-600 hover:bg-blue-500 text-white transition duration-200"
        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginLeft: "10px" }}
      >
        Preview
      </button>

      <button
        onClick={handleNextQuestion}
        disabled={selectedOption === null}
        className={`ml-2 px-4 py-2 text-lg font-semibold rounded-md transition duration-200 ${
          selectedOption ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-gray-600 cursor-not-allowed text-white"
        }`}
        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        {currentQuestionIndex < EnglishGrammarQuiz.questions.length - 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
}
