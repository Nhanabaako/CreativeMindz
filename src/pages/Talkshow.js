import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "./movies.css";
import "./talkshow.css";

import { FaPlay, FaSearch, FaFire, FaClock, FaMicrophone, FaUsers } from "react-icons/fa";

export default function Talkshow() {
  const navigate = useNavigate();

  // FEATURED TALKSHOW
  const featured = {
    title: "Evening Conversations",
    description:
      "Catch the most engaging interviews with celebrities, experts, and influencers from around the world.",
    image: "../../public/img/Labels/Lab3.jpeg",
    trailer: "https://www.youtube.com/embed/example",
    category: "Interviews",
    duration: "45m",
    episodes: "12"
  };

  // TALKSHOW LIBRARY
  const talkshows = [
    {
      id: 1,
      title: "Evening Conversations",
      category: "Interviews",
      image: "../img/Talkshow/evening.jpeg",
      trailer: ""
    },
    {
      id: 2,
      title: "Morning Live",
      category: "News",
      image: "../img/Talkshow/morning.jpeg",
      trailer: ""
    },
    {
      id: 3,
      title: "Tech Talk",
      category: "Technology",
      image: "../img/Talkshow/tech.jpeg",
      trailer: ""
    },
    {
      id: 4,
      title: "Health Hour",
      category: "Health",
      image: "../img/Talkshow/health.jpeg",
      trailer: ""
    }
  ];

  const categories = ["All", "Interviews", "News", "Technology", "Health"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredShows = talkshows.filter(
    show =>
      (activeCategory === "All" || show.category === activeCategory) &&
      show.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HERO */}
      <section
        className="talk-hero"
        style={{ backgroundImage: `url(${featured.image})` }}
      >
        <div className="talk-hero-overlay"></div>

        <motion.div
          className="talk-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="hero-badge">
            <FaFire /> Featured Talkshow
          </span>

          <h1>{featured.title}</h1>
          <p>{featured.description}</p>

          <div className="hero-meta">
            <span>
              <FaMicrophone /> {featured.category}
            </span>
            <span>
              <FaClock /> {featured.duration}
            </span>
            <span>
              <FaUsers /> {featured.episodes} Episodes
            </span>
          </div>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/player", { state: { movie: featured } })}
            >
              <FaPlay /> Watch Now
            </button>
            <button className="btn-secondary">More Info</button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="talk-stats">
        <div className="stat-box">
          <h3>50+</h3>
          <p>Shows</p>
        </div>
        <div className="stat-box">
          <h3>200+</h3>
          <p>Episodes</p>
        </div>
        <div className="stat-box">
          <h3>1M+</h3>
          <p>Viewers</p>
        </div>
        <div className="stat-box">
          <h3>HD / 4K</h3>
          <p>Quality</p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="movies-controls modern-controls">
        <div className="search-box modern-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search talkshows..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="categories modern-categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="movies-container">
        <div className="section-header">
          <h2>Explore Talkshows</h2>
          <span>Watch interviews, debates, and live discussions</span>
        </div>

        <motion.div layout className="movies-grid">
          {filteredShows.map(show => (
            <motion.div
              key={show.id}
              className="movie-card modern-card"
              whileHover={{ scale: 1.08, y: -8 }}
            >
              <img src={show.image} alt={show.title} />
              <div className="movie-overlay modern-overlay">
                <span className="category-tag">{show.category}</span>
                <h3>{show.title}</h3>
                <button
                  className="play-btn"
                  onClick={() =>
                    navigate("/player", { state: { movie: show } })
                  }
                >
                  <FaPlay /> Watch Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="talk-cta">
        <motion.div className="cta-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2>Stay Tuned & Engaged</h2>
          <p>Join now to stream talkshows anytime, anywhere.</p>
          <button className="btn-primary">Start Watching</button>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
