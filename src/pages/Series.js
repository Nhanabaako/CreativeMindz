import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import "./series.css";
import { FaPlay, FaSearch, FaTimes } from "react-icons/fa";

export default function Series() {

  const allSeries = [

    {
      id: 1,
      title: "Stranger Things",
      category: "Sci-Fi",
      image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      trailer: "https://www.youtube.com/embed/b9EkMc79ZSU"
    },

    {
      id: 2,
      title: "Breaking Bad",
      category: "Drama",
      image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      trailer: "https://www.youtube.com/embed/HhesaQXLuRY"
    },

    {
      id: 3,
      title: "Game of Thrones",
      category: "Drama",
      image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ"
    },

    {
      id: 4,
      title: "The Mandalorian",
      category: "Sci-Fi",
      image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
      trailer: "https://www.youtube.com/embed/aOC8E8z_ifw"
    },

    {
      id: 5,
      title: "Money Heist",
      category: "Crime",
      image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      trailer: "https://www.youtube.com/embed/hMANIarjT50"
    }

  ];
  const navigate = useNavigate();

  const categories = ["All", "Drama", "Sci-Fi", "Crime"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(null);

  const filteredSeries = allSeries.filter(series =>
    (activeCategory === "All" || series.category === activeCategory) &&
    series.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      {/* HERO */}

      <section className="series-hero">

        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <h1>TV Series</h1>

          <p>
            Watch trending and popular series
          </p>

        </motion.div>

      </section>


      {/* CONTROLS */}

      <section className="series-controls">

        {/* SEARCH */}

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search series..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        {/* CATEGORY */}

        <div className="categories">

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

      <section className="series-container">

        <motion.div
          layout
          className="series-grid"
        >

          {filteredSeries.map(series => (

            <motion.div
              key={series.id}
              className="series-card"
              whileHover={{ scale: 1.05 }}
            >

              <img src={series.image} alt={series.title} />

              <div className="series-overlay">

                <h3>{series.title}</h3>

                <button
                 onClick={() => navigate("/player", { state: { series } })}

                >
                  <FaPlay /> Watch Trailer
                </button>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </section>


      {/* MODAL */}

      <AnimatePresence>

        {selectedSeries && (

          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <div className="modal-content">

              <FaTimes
                className="close"
                onClick={() => setSelectedSeries(null)}
              />

              <iframe
                width="100%"
                height="400"
                src={selectedSeries.trailer}
                title="Trailer"
                allowFullScreen
              />

              <h2>{selectedSeries.title}</h2>

            </div>

          </motion.div>

        )}

      </AnimatePresence>


      <Footer />

    </>
  );
}
