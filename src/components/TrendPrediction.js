import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./TrendPrediction.css";

const TrendPrediction = () => {
  const [prediction, setPrediction] = useState("");
  const [predictionsList, setPredictionsList] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [showResults, setShowResults] = useState(false);
  const actualTrends = [
    "Sustainable Fashion",
    "Vintage Styles",
    "Bright Colors",
    "Oversized Clothing",
    "Eco-Friendly Fabrics",
    "Retro Fashion",
    "Bold Patterns",
    "Relaxed Fits",
    "Minimalist Design",
    "Boho Chic",
    "Pastel Tones",
    "Tailored Pieces",
    "Streetwear",
    "Graphic Tees",
    "Luxury Brands",
    "Athleisure",
    "Vintage Denim",
    "Statement Accessories",
    "Classic Cuts",
    "sustainable fashion",
    "vintage styles",
    "bright colors",
    "oversized clothing",
    "eco-friendly fabrics",
    "retro fashion",
    "bold patterns",
    "relaxed fits",
    "minimalist design",
    "boho chic",
    "pastel tones",
    "tailored pieces",
    "streetwear",
    "graphic tees",
    "luxury brands",
    "athleisure",
    "vintage denim",
    "statement accessories",
    "classic cuts",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (prediction.trim()) {
      setPredictionsList([...predictionsList, prediction.trim()]);
      setPrediction("");
      setFeedback("Prediction submitted!"); 
    } else {
      setFeedback("Please enter a prediction.");
    }
  };
  const handleShowResults = () => {
    setShowResults(true);
    const matchedTrends = predictionsList.filter((p) =>
      actualTrends.includes(p)
    );
    setFeedback(
      `You matched ${matchedTrends.length} out of ${actualTrends.length} trends.`
    );
  };
  return (
    <div className="trend-prediction">
      <header className="trend-header">
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
              placeholder="Search for products, brands, and more..."
            />
          </div>
        </div>
      </header>
      <main className="trend-main">
        <h1>Trend Prediction</h1>
        <p>
          Guess the upcoming fashion trends and see if your predictions come
          true!
        </p>
        <form onSubmit={handleSubmit} className="prediction-form">
          <input
            type="text"
            value={prediction}
            onChange={(e) => setPrediction(e.target.value)}
            placeholder="Enter your trend prediction"
          />
          <button type="submit">Submit Prediction</button>
        </form>
        <button onClick={handleShowResults} className="show-results-button">
          Show Results
        </button>
        {feedback && <div className="feedback">{feedback}</div>}
        {showResults && (
          <div className="results">
            <h2>Your Predictions:</h2>
            <ul>
              {predictionsList.length ? (
                predictionsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>No predictions yet.</li>
              )}
            </ul>
            <ul className="hidden-trends">
            <h2>Actual Trends:</h2>
              {actualTrends.map((trend, index) => (
                <li key={index}>{trend}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default TrendPrediction;
