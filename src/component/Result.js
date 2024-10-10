import React from "react";

export default function Result({ score, total, answers = [], quiz }) {
  const percentage = ((score / total) * 100).toFixed(2);

  const performanceMessage =
    percentage >= 75 ? "Great job!" :
    percentage >= 50 ? "Not bad, but there's room for improvement." :
    "Better luck next time!";

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold mb-5">Quiz Result</h1>
      <h2 className="text-xl mb-5">
        You scored {score} out of {total}!
      </h2>
      <h2 className="text-xl mb-5">Percentage: {percentage}%</h2>
      <h3 className="text-lg mb-5">{performanceMessage}</h3>

      <div className="flex justify-center flex-wrap mt-5">
        {quiz.map((question, index) => {
          const isCorrect = answers[index] === question.correctAnswer;
          return (
            <div key={index} className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center m-2 text-white font-bold ${
                  isCorrect ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {index + 1}
              </div>
              <h2>{question.title}</h2>
            </div>
          );
        })}
      </div>

      <div className="mt-5">
        <h3 className="text-lg">Your Answers:</h3>
        <ul className="list-disc list-inside">
          {quiz.map(({ question, correctAnswer }, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === correctAnswer;

            return (
              <li key={index} className={isCorrect ? "text-green-600" : "text-red-600"}>
                <strong>{question}</strong>
                <br />
                Your answer: {userAnswer || "No answer selected"}
                <br />
                Correct answer: {correctAnswer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
