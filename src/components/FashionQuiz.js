import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FashionQuiz.css";

const questions = [
  {
    question:
      "What is the term used for the fashion industry’s seasonal presentation of upcoming fashion lines, typically shown in major cities like Paris, New York, and Milan?",
    options: [
      "Fashion Week",
      "Fashion Month",
      "Fashion Festival",
      "Style Show",
    ],
    answer: "Fashion Week",
  },
  {
    question:
      "Which of these fashion fails would make the best meme for social media?",
    options: [
      "Wearing a swimsuit to a winter wedding",
      "A suit with mismatched patterns and colors",
      "High heels with socks for a sports event",
      "A jacket with built-in air conditioning",
    ],
    answer: "Wearing a swimsuit to a winter wedding",
  },
  {
    question:
      "What is the most unusual fashion trend that you might regret looking back on in ten years?",
    options: [
      "Wearing socks with sandals",
      "Matching your outfit to your pet's collar",
      "Extremely oversized sunglasses",
      "Shirts with bizarre slogans",
    ],
    answer: "Wearing socks with sandals",
  },
  {
    question:
      "Which fashion item is commonly worn as a symbol of status and luxury, often adorned with intricate designs and expensive materials?",
    options: ["Watch", "Sunglasses", "Necklace", "Handbag"],
    answer: "Handbag",
  },
];

const FashionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      calculateScore(updatedAnswers);
    }
  };

  const calculateScore = (answers) => {
    if (answers.length !== questions.length) {
      console.error("Mismatch in answers length");
      return;
    }

    const correctAnswers = questions.map((q) => q.answer);

    // Calculate the score
    const userScore = answers.reduce(
      (score, answer, index) =>
        answer === correctAnswers[index] ? score + 1 : score,
      0
    );

    console.log("User Answers:", answers);
    console.log("Correct Answers:", correctAnswers);
    console.log("Calculated Score:", userScore);

    setScore(userScore);
  };

  const handleRestart = () => {
    navigate("/");
  };

  const question = questions[currentQuestion];

  return (
    <div className="fashion-quiz">
      <header>
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="logo.jpeg" alt="Myntra Logo" />
            </Link>
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/wishlist">Wishlists</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </nav>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
            />
          </div>
        </div>
      </header>
      <main className="main-content">
        {!quizCompleted ? (
          <div className="question-container">
            <h1>Fashion Quiz</h1>
            <h2>{question.question}</h2>
            <div className="options-container">
              {question.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="result-container">
            <h1>Quiz Completed!</h1>
            <p>
              Your score: {score}/{questions.length}
            </p>
            {score === questions.length ? (
              <div className="congratulations">
                <p>🎉 Congratulations! Perfect score! 🎉</p>
              </div>
            ) : (
              <div className="try-again">
                <p>Better luck next time!</p>
              </div>
            )}
            <button onClick={handleRestart}>Go to Homepage</button>
          </div>
        )}
      </main>
      <footer className="footer">
        <p>© 2024 www.myntra.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FashionQuiz;