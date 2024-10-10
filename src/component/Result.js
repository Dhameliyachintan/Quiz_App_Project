import React from "react";

export default function Result({ score, total, answers = [], quiz }) {
  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold mb-5">Quiz Result</h1>
      <h2 className="text-xl mb-5">
        You scored {score} out of {total}!
      </h2>
      <div className="flex justify-center flex-wrap mt-5">
        {quiz.map((question, index) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === question.correctAnswer;
          return (
            <div
              key={index}
              className={`w-12 h-12 rounded-full flex items-center justify-center m-2 text-white font-bold ${isCorrect ? "bg-green-500" : "bg-red-500"}`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>

      
      <div className="mt-5">
        <h3 className="text-lg">Your Answers:</h3>
        <ul className="list-disc list-inside">
          {quiz.map((question, index) => (
            <li key={index} className={`${answers[index] === question.correctAnswer ? "text-green-600" : "text-red-600"}`}>
              <strong>{question.question}</strong>
              <br />
              Your answer: {answers[index]} 
              <br />
              Correct answer: {question.correctAnswer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
