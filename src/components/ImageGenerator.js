import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState(default_image);
  const inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return;
    }

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
            "User-Agent": "Chrome",
          },
          body: JSON.stringify({
            prompt: inputRef.current.value,
            n: 1,
            size: "512x512",
          }),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error(
          "Error fetching image:",
          response.statusText,
          errorDetails
        );
        setImage_url(default_image);
        return;
      }

      let data = await response.json();

      if (
        data &&
        data.data &&
        Array.isArray(data.data) &&
        data.data.length > 0
      ) {
        setImage_url(data.data[0].url);
      } else {
        console.error("Unexpected API response format:", data);
        setImage_url(default_image);
      }
    } catch (error) {
      console.error("Error generating image:", error);
      setImage_url(default_image);
    }
  };

  return (
    <div className="ai_image_generator">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="/images/logo.jpeg" alt="Logo" />
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/wishlist">Wishlist</a>
            <a href="/leaderboard">Leaderboard</a>
          </nav>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
            />
          </div>
        </div>
      </header>
      <div className="image-header">
        Outfits <span>Myntra</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img
            src={image_url === "/" ? default_image : image_url}
            alt="Generated outfit"
          />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Chat with Ai, describe your outfit"
        />
        <div className="generate-btn" onClick={imageGenerator}>
          Generate
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 www.myntra.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ImageGenerator;
