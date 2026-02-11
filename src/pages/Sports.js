import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "./movies.css";
import "./Sports.css";

import {
  FaPlay,
  FaSearch,
  FaFire,
  FaTrophy,
  FaClock
} from "react-icons/fa";
import { Description } from "@mui/icons-material";


export default function Sports() {

  const navigate = useNavigate();

  // Featured main banner
  const featured = {
    title: "360 Sports Updates",
    description:
      "Watch exclusive matches, highlights and behind-the-scenes moments.",
    image: "../img/Sports/sports.jpeg",
    trailer: "https://www.youtube.com/@creativemindztv4240",
    category: "Football",
  };


  // Sports library
  const allSports = [

    {
      id: 1,
      title: "MTN Swag Awards",
      category: "Football Events",
      image: "../img/Sports/MTN Awards.jpeg",
      video: "https://www.youtube.com/watch?v=0sgVqO3bt5Q&t=174s"
    },

    {
      id: 2,
      title: "Langabel THE cHIEF DRUMMER OF THE BLACKSTARS  caution Ghana premier league teams about Karela",
      category: "Football Events",
      image: "../img/Sports/Lan-warns.jpeg",
      trailer: "https://www.youtube.com/watch?v=AhOkpWd4ZMQ&pp=0gcJCZQKAYcqIYzv"
     
    },

    // {
    //   id: 3,
    //   title: "NBA Finals",
    //   category: "Basketball",
    //   image: "../img/Sports/nba.jpeg",
    //   trailer: "https://www.youtube.com/embed/gTBs1rqLtSk"
    // }

  ];


  const categories = ["All", "Football", "Sports Events"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");


  const filteredSports = allSports.filter(item =>
    (activeCategory === "All" || item.category === activeCategory) &&
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>

      {/* MODERN HERO BANNER */}

      <section
        className="sports-hero"
        style={{
          backgroundImage: `url(${featured.image})`
        }}
      >

        <div className="sports-hero-overlay"></div>

        <motion.div
          className="sports-hero-content"

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}
        >

          <span className="hero-badge">
            <FaFire /> Featured Sports
          </span>

          <h1>{featured.title}</h1>

          <p>{featured.description}</p>

          <div className="hero-meta">

            <span>
              <FaTrophy /> {featured.category}
            </span>

            <span>
              <FaClock /> {featured.year}
            </span>

          </div>


          <div className="hero-buttons">

            <button
              className="btn-primary"
              onClick={() =>
                navigate("/player", { state: { movie: featured } })
              }
            >
              <FaPlay /> Play Now
            </button>


            <button className="btn-secondary">
              More Info
            </button>

          </div>

        </motion.div>

      </section>



      {/* STATS BAR */}

      <section className="sports-stats">

        <div className="stat-box">
          <h3>500+</h3>
          <p>Matches</p>
        </div>

        <div className="stat-box">
          <h3>50+</h3>
          <p>Leagues</p>
        </div>

        <div className="stat-box">
          <h3>100k+</h3>
          <p>Viewers</p>
        </div>

        <div className="stat-box">
          <h3>4K</h3>
          <p>Ultra HD</p>
        </div>

      </section>



      {/* SEARCH & FILTER */}

      <section className="movies-controls modern-controls">

        <div className="search-box modern-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search sports, leagues, matches..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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



      {/* SPORTS GRID */}

      <section className="movies-container">

        <div className="section-header">

          <h2>Trending Sports</h2>

          <span>Watch latest highlights and matches</span>

        </div>


        <motion.div
          layout
          className="movies-grid"
        >

          {filteredSports.map(item => (

            <motion.div
              key={item.id}
              className="movie-card modern-card"

              whileHover={{
                scale: 1.08,
                y: -8
              }}
            >

              <img
                src={item.image}
                alt={item.title}
              />


              <div className="movie-overlay modern-overlay">

                <h3>{item.title}</h3>

                <span className="category-tag">
                  {item.category}
                </span>


                <button
                  className="play-btn"
                  onClick={() =>
                    navigate("/player", { state: { movie: item } })
                  }
                >
                  <FaPlay /> Watch Now
                </button>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </section>



      {/* CALL TO ACTION */}

      <section className="sports-cta">

        <motion.div
          className="cta-box"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}
        >

          <h2>Never Miss a Match</h2>

          <p>
            Join now and stream live sports anytime, anywhere.
          </p>

          <button className="btn-primary">
            Start Watching
          </button>

        </motion.div>

      </section>



      <Footer />

    </>
  );

}
