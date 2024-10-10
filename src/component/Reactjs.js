import React, { useState } from "react";
import { ReactjsQuiz } from "../constant";
import Result from "./Result";

export default function Reactjs() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState(Array(ReactjsQuiz.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateAnswers = (newAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = newAnswer;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      updateAnswers(selectedOption);
      if (currentQuestionIndex < ReactjsQuiz.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
      } else {
        setIsSubmitted(true);
      }
    }
  };

  const handlePreviewQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1]);
    }
  };

  const handleSubmitQuiz = () => {
    if (selectedOption !== null) {
      updateAnswers(selectedOption);
      setIsSubmitted(true);
    }
  };

  const calculateResult = () =>
    answers.reduce(
      (score, answer, index) =>
        answer === ReactjsQuiz[index].correctAnswer ? score + 1 : score,
      0
    );

  if (isSubmitted) {
    const score = calculateResult();
    return (
      <Result
        score={score}
        total={ReactjsQuiz.length}
        answers={answers}
        quiz={ReactjsQuiz}
        title={ReactjsQuiz.title}
      />
    );
  }

  const { question, options } = ReactjsQuiz[currentQuestionIndex];

  return (
    <div className="p-5 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-5">ReactJS Quiz</h1>
      <div className="mb-5">
        <h2 className="text-xl mb-3">{question}</h2>
        <ul className="list-none p-0">
          {options.map(({ option, text }) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === ReactjsQuiz[currentQuestionIndex].correctAnswer;
            const isAnswered = isSubmitted && answers[currentQuestionIndex] !== null;

            return (
              <li key={option} className="my-2 text-lg flex items-center">
                <input
                  type="radio"
                  id={option}
                  name="quiz-option"
                  value={option}
                  checked={isSelected}
                  onChange={() => setSelectedOption(option)}
                  className="mr-2"
                />
                <label
                  htmlFor={option}
                  className={`p-2 rounded-md ${
                    isAnswered
                      ? isSelected && isCorrect
                        ? "bg-green-500"
                        : isSelected
                        ? "bg-red-500"
                        : isCorrect
                        ? "bg-green-200"
                        : ""
                      : ""
                  }`}
                >
                  {option}: {text}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        onClick={handlePreviewQuestion}
        disabled={currentQuestionIndex === 0}
        className={`px-4 py-2 text-lg font-semibold rounded-md transition duration-200 ${
          currentQuestionIndex === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-500 text-white"
        }`}
      >
        Preview
      </button>
      <button
        onClick={handleNextQuestion}
        disabled={selectedOption === null}
        className={`ml-2 px-4 py-2 text-lg font-semibold rounded-md transition duration-200 ${
          selectedOption === null
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-500 text-white"
        }`}
      >
        Next
      </button>
      <button
        onClick={handleSubmitQuiz}
        className={`ml-2 px-4 py-2 text-lg font-semibold rounded-md transition duration-200 ${
          selectedOption === null
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-500 text-white"
        }`}
        disabled={selectedOption === null}
      >
        Submit Quiz
      </button>
    </div>
  );
}