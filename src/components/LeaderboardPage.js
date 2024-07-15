import React from 'react';
import { Link } from 'react-router-dom';
import './LeaderboardPage.css'; 

const LeaderboardPage = () => {
  const topWishlists = [
    {
      user: "User1",
      likes: 120,
      rewards: "20% Off Coupon",
    },
    {
      user: "User2",
      likes: 100,
      rewards: "15% Off Coupon",
    },
    {
      user: "User3",
      likes: 75,
      rewards: "10% Off Coupon",
    },
  ];

  return (
    <div className="leaderboard-page">
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
        <section className="top-wishlists">
          <h2>Top Wishlists</h2>
          <div className="leaderboard-container">
            {topWishlists.map((wishlist, index) => (
              <div className="wishlist-item" key={index}>
                <h3>{wishlist.user}'s Wishlist</h3>
                <p>Likes: {wishlist.likes}❤️</p>
                <p>Reward: {wishlist.rewards}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 www.myntra.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LeaderboardPage;
