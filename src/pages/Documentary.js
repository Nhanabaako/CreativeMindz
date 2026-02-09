import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "./movies.css";
import "./documentary.css";

import {
  FaPlay,
  FaSearch,
  FaFire,
  FaClock,
  FaGlobeAfrica,
  FaFilm
} from "react-icons/fa";

export default function Documentary() {

  const navigate = useNavigate();

  // FEATURED DOCUMENTARY
  const featured = {
    title: "The African Story",
    description:
      "Explore Africa’s rich history, culture, and untold stories through powerful documentary storytelling.",
    image: "../img/Documentary/africa.jpeg",
    trailer: "https://www.youtube.com/embed/example",
    category: "History",
    duration: "1h 45m",
    year: "2025"
  };


  // DOCUMENTARY LIBRARY
  const documentaries = [

    {
      id: 1,
      title: "The African Story",
      category: "History",
      image: "../img/Documentary/africa.jpeg",
      trailer: ""
    },

    {
      id: 2,
      title: "Wildlife Safari",
      category: "Nature",
      image: "../img/Documentary/wildlife.jpeg",
      trailer: ""
    },

    {
      id: 3,
      title: "Tech Revolution",
      category: "Technology",
      image: "../img/Documentary/tech.jpeg",
      trailer: ""
    },

    {
      id: 4,
      title: "Ancient Civilizations",
      category: "History",
      image: "../img/Documentary/ancient.jpeg",
      trailer: ""
    }

  ];


  const categories = [
    "All",
    "History",
    "Nature",
    "Technology"
  ];


  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");


  const filteredDocs = documentaries.filter(doc =>
    (activeCategory === "All" || doc.category === activeCategory) &&
    doc.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>

      {/* HERO SECTION */}

      <section
        className="doc-hero"
        style={{
          backgroundImage: `url(${featured.image})`
        }}
      >

        <div className="doc-hero-overlay"></div>

        <motion.div
          className="doc-hero-content"

          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <span className="hero-badge">
            <FaFire /> Featured Documentary
          </span>


          <h1>{featured.title}</h1>


          <p>{featured.description}</p>


          <div className="hero-meta">

            <span>
              <FaGlobeAfrica /> {featured.category}
            </span>

            <span>
              <FaClock /> {featured.duration}
            </span>

            <span>
              <FaFilm /> {featured.year}
            </span>

          </div>


          <div className="hero-buttons">

            <button
              className="btn-primary"
              onClick={() =>
                navigate("/player", { state: { movie: featured } })
              }
            >
              <FaPlay /> Watch Now
            </button>


            <button className="btn-secondary">
              More Info
            </button>

          </div>

        </motion.div>

      </section>



      {/* STATS */}

      <section className="doc-stats">

        <div className="stat-box">
          <h3>200+</h3>
          <p>Documentaries</p>
        </div>

        <div className="stat-box">
          <h3>50+</h3>
          <p>Countries</p>
        </div>

        <div className="stat-box">
          <h3>1000+</h3>
          <p>Hours Content</p>
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
            placeholder="Search documentaries..."
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



      {/* GRID */}

      <section className="movies-container">

        <div className="section-header">

          <h2>Explore Documentaries</h2>

          <span>Discover real stories and knowledge</span>

        </div>


        <motion.div layout className="movies-grid">

          {filteredDocs.map(doc => (

            <motion.div
              key={doc.id}
              className="movie-card modern-card"

              whileHover={{
                scale: 1.08,
                y: -8
              }}
            >

              <img src={doc.image} alt={doc.title} />


              <div className="movie-overlay modern-overlay">

                <span className="category-tag">
                  {doc.category}
                </span>

                <h3>{doc.title}</h3>


                <button
                  className="play-btn"
                  onClick={() =>
                    navigate("/player", { state: { movie: doc } })
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

      <section className="doc-cta">

        <motion.div
          className="cta-box"

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <h2>Explore the World Through Stories</h2>

          <p>
            Stream award-winning documentaries anytime.
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
