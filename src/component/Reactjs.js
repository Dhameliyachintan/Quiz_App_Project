import React, { useState } from "react";
import { ReactjsQuiz } from "../constant";
import Result from "./Result";

export default function Reactjs() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState(Array(ReactjsQuiz.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setAnswers((prev) => {
        const updatedAnswers = [...prev];
        updatedAnswers[currentQuestionIndex] = selectedOption;
        return updatedAnswers;
      });
      if (currentQuestionIndex < ReactjsQuiz.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsSubmitted(true);
      }
      setSelectedOption(null);
    }
  };

  const handlePreviewQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1]);
    }
  };

  const handleSubmitQuiz = () => {
    if (selectedOption !== null) {
      setAnswers((prev) => {
        const updatedAnswers = [...prev];
        updatedAnswers[currentQuestionIndex] = selectedOption;
        return updatedAnswers;
      });
      setIsSubmitted(true);
    }
  };

  const calculateResult = () => {
    return answers.reduce((score, answer, index) => {
      if (answer === ReactjsQuiz[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  if (isSubmitted) {
    const score = calculateResult();
    return (
        <Result score={score} total={ReactjsQuiz.length} answers={answers} quiz={ReactjsQuiz} title={ReactjsQuiz.title} />
    );
  }

  const { question, options } = ReactjsQuiz[currentQuestionIndex];

  return (
    <div className="p-5 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-5">ReactJS Quiz</h1>
      <div className="mb-5">
        <h2 className="text-xl mb-3">{question}</h2>
        <ul className="list-none p-0">
          {options.map((option) => {
            const isSelected = selectedOption === option.option;
            const isAnswered = isSubmitted && answers[currentQuestionIndex] !== null;

            return (
              <li key={option.option} className="my-2 text-lg flex items-center">
                <input
                  type="radio"
                  id={option.option}
                  name="quiz-option"
                  value={option.option}
                  checked={isSelected}
                  onChange={() => setSelectedOption(option.option)}
                  className="mr-2"
                />
                <label
                  htmlFor={option.option}
                  className={`p-2 rounded-md ${
                    isAnswered
                      ? isSelected && option.option === ReactjsQuiz[currentQuestionIndex].correctAnswer
                        ? "bg-green-500"
                        : isSelected
                        ? "bg-red-500"
                        : option.option === ReactjsQuiz[currentQuestionIndex].correctAnswer
                        ? "bg-green-200"
                        : ""
                      : ""
                  }`}
                >
                  {option.option}: {option.text}
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
