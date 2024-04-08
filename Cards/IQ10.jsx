import React, { useState } from "react";
import "./Calc.css";
import { Link } from "react-router-dom";

function IQ10() {
  const [answers, setAnswers] = useState(Array(10).fill(""));
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerSelection = (questionIndex, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    const correctAnswers = ["a", "b", "d", "b", "b", "a", "b", "c", "b", "c"];
    let userScore = 0;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === correctAnswers[i]) {
        userScore++;
      }
    }

    setScore(userScore);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < 9 && answers[currentQuestion] !== "") {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const allAnswersFilled = answers.every((answer) => answer !== "");

  const questions = [
    {
      question:
        "Which shape comes next in the sequence? Triangle, square, circle, triangle, square, _____.",
      options: [
        { id: "q1a", value: "a", text: "a) Circle" },
        { id: "q1b", value: "b", text: "b) Triangle" },
        { id: "q1c", value: "c", text: "c) Square" },
        { id: "q1d", value: "d", text: "d) Pentagon" }
      ]
    },

    {
      question:
        "What is the missing number in the following sequence? 2, 4, 6, 8, _____, 12.",
      options: [
        { id: "q2a", value: "a", text: "9" },
        { id: "q2b", value: "b", text: "10" },
        { id: "q2c", value: "c", text: "11" },
        { id: "q2d", value: "d", text: "14" }
      ]
    },
    {
      question: "Which of the following words is different from the others?",
      options: [
        { id: "q3a", value: "a", text: "Apple" },
        { id: "q3b", value: "b", text: "Orange" },
        { id: "q3c", value: "c", text: "Banana" },
        { id: "q3d", value: "d", text: "Pear" }
      ]
    },
    {
      question:
        "If all cats are animals and some animals are mice, which of the following statements is true?",
      options: [
        { id: "q4a", value: "a", text: "All cats are mice" },
        { id: "q4b", value: "b", text: "Some cats are mice" },
        { id: "q4c", value: "c", text: "No cats are mice" },
        { id: "q4d", value: "d", text: "None of the above" }
      ]
    },
    {
      question:
        "Which number should replace the question mark? 9, 16, 25, 36, ?",
      options: [
        { id: "q5a", value: "a", text: "42" },
        { id: "q5b", value: "b", text: "49" },
        { id: "q5c", value: "c", text: "52" },
        { id: "q5d", value: "d", text: "64" }
      ]
    },
    {
      question:
        "Complete the analogy: Winter is to cold as summer is to _____.",
      options: [
        { id: "q6a", value: "a", text: "Heat" },
        { id: "q6b", value: "b", text: "Snow" },
        { id: "q6c", value: "c", text: "Rain" },
        { id: "q6d", value: "d", text: "Wind" }
      ]
    },
    {
      question: "What is the next letter in the sequence? A, C, E, G, _____.",
      options: [
        { id: "q7a", value: "a", text: "H" },
        { id: "q7b", value: "b", text: "I" },
        { id: "q7c", value: "c", text: "J" },
        { id: "q7d", value: "d", text: "K" }
      ]
    },
    {
      question: "Solve the equation: 5 + 2 × 3 - 4.",
      options: [
        { id: "q8a", value: "a", text: "5" },
        { id: "q8b", value: "b", text: "8" },
        { id: "q8c", value: "c", text: "7" },
        { id: "q8d", value: "d", text: "11" }
      ]
    },
    {
      question: "What is the capital city of Canada?",
      options: [
        { id: "q9a", value: "a", text: "Toronto" },
        { id: "q9b", value: "b", text: "Ottawa" },
        { id: "q9c", value: "c", text: "Vancouver" },
        { id: "q9d", value: "d", text: "Montreal" }
      ]
    },
    {
      question: "Which country is not in Europe?",
      options: [
        { id: "q10a", value: "a", text: "Germany" },
        { id: "q10b", value: "b", text: "France" },
        { id: "q10c", value: "c", text: "Australia" },
        { id: "q10d", value: "d", text: "Spain" }
      ]
    }
  ];

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="iq-test-container">
      <Link to="/" id="IQ10Link">
        <h1 className="iq-test-heading">IQ Test</h1>
      </Link>

      <div className="question-container">
        <p className="question-number">Question {currentQuestion + 1}/10</p>
        <p className="question-text">{currentQuestionData.question}</p>
        {currentQuestionData.options.map((option) => (
          <div className="answer-options" key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={`q${currentQuestion}`}
              value={option.value}
              onChange={() =>
                handleAnswerSelection(currentQuestion, option.value)
              }
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        ))}
      </div>

      {/* Next button */}
      {currentQuestion < 9 ? (
        <button
          className="next-button"
          onClick={goToNextQuestion}
          disabled={answers[currentQuestion] === ""}
        >
          Next
        </button>
      ) : (
        <button
          className="next-button"
          onClick={handleSubmit}
          disabled={!allAnswersFilled}
        >
          Submit
        </button>
      )}

      {/* Score */}
      {score > 0 && allAnswersFilled && (
        <p className="score">Score: {score}/10</p>
      )}
    </div>
  );
}

export default IQ10;
