import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="homepage">
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
          <div className="user-actions">
            <Link to="/">Login</Link>
            <Link to="/">
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="home">
          <img src="/images/p1.png" alt="p1" />
          <img src="/images/p2.png" alt="p2" />
          <img src="/images/p3.png" alt="p3" />
          <img src="/images/p4.png" alt="p4" />
        </div>
        <div className="promotional-banner">
          <Link to="/fashionquiz">
          <img src="/images/quiz.png" alt="Quiz Template" className="quiz-image" />
          </Link>
          <Link to="/trendprediction">
          <img src="/images/p5.png" alt="p5" className="quiz-image" />
          </Link>
          <Link to="/imagegenerator">
          <img src="/images/p6.jpg" alt="p5" className="quiz-image" />
          </Link>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 www.myntra.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
