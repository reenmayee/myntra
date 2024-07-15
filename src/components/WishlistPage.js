import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WishlistPage.css";

const WishlistPage = () => {
  const myWishlist = ["d1.jpeg", "d2.jpeg", "d3.jpeg", "d4.jpeg", "d5.jpeg"];

  const [wishlists, setWishlists] = useState([
    {
      user: "User1",
      dresses: ["d6.jpeg", "d7.jpeg", "d8.jpeg", "d9.jpeg", "d10.jpeg"],
      likes: 120,
      saved: false,
    },
    {
      user: "User2",
      dresses: ["d11.jpeg", "d12.jpeg", "d13.jpeg", "d14.jpeg", "d15.jpeg"],
      likes: 100,
      saved: false,
    },
    {
      user: "User3",
      dresses: ["d16.jpeg", "d17.jpeg", "d18.jpeg", "d19.jpeg", "d20.jpeg"],
      likes: 75,
      saved: false,
    },
  ]);

  const handleLike = (index) => {
    const newWishlists = [...wishlists];
    newWishlists[index].likes += 1;
    setWishlists(newWishlists);
  };

  const handleSave = (index) => {
    const newWishlists = [...wishlists];
    newWishlists[index].saved = !newWishlists[index].saved;
    setWishlists(newWishlists);
  };

  return (
    <div className="wishlist-page">
      <header>
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="/logo.jpeg" alt="Myntra Logo" />
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
        <section className="my-wishlist">
          <h2>My Wishlist</h2>
          <div className="wishlist-container">
            <div className="wishlist">
              <div className="wishlist-dresses">
                {myWishlist.map((dress, index) => (
                  <img
                    key={index}
                    src={`/images/${dress}`} 
                    alt="My Dress"
                    onError={(e) =>
                      console.error(`Failed to load image: ${e.target.src}`)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="top-wishlists">
          <h2>Top Wishlists</h2>
          <div className="wishlist-container">
            {wishlists.map((wishlist, index) => (
              <div className="wishlist" key={index}>
                <h3>{wishlist.user}'s Wishlist</h3>
                <div className="wishlist-dresses">
                  {wishlist.dresses.map((dress, idx) => (
                    <img
                      key={idx}
                      src={`/images/${dress}`} 
                      alt="Dress"
                      onError={(e) =>
                        console.error(`Failed to load image: ${e.target.src}`)
                      }
                    />
                  ))}
                </div>
                <div className="wishlist-actions">
                  <button onClick={() => handleLike(index)}>
                    Like {wishlist.likes} ❤️
                  </button>
                  <button onClick={() => handleSave(index)}>
                    {wishlist.saved ? "Unsave" : "Save"} ⭐
                  </button>
                </div>
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

export default WishlistPage;
