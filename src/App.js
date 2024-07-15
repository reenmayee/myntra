import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import WishlistPage from './components/WishlistPage';
import LeaderboardPage from './components/LeaderboardPage';
import FashionQuiz from './components/FashionQuiz';
import TrendPrediction from './components/TrendPrediction';
import ImageGenerator from './components/ImageGenerator';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/fashionquiz" element={<FashionQuiz />} />
      <Route path="/trendprediction" element={<TrendPrediction />} />
      <Route path="/imagegenerator" element={<ImageGenerator />} />
    </Routes>
  );
};

export default App;
