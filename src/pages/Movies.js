import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import "./movies.css";
import { FaPlay, FaSearch, FaTimes } from "react-icons/fa";




export default function Movies() {

const navigate = useNavigate();

  const allMovies = [

    {
      id: 1,
      title: "I Love My Wife",
      category: "Romance",
      image: "../img/Movies/love-my-wife.jpeg",
      trailer: ""
    },

    {
      id: 2,
      title: " Loud Cry",
      category: "Romance",
      image: "../img/Movies/loudcry.jpeg",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },

    {
      id: 3,
      title: "Fufu & Paps",
      category: "Comedy",
      image: "../img/Movies/fufu.jpeg",
      trailer: "https://www.youtube.com/embed/mqqft2x_Aa4"
    },

    {
      id: 4,
      title: "Worldcup 2026",
      category: "Sports",
      image: "../img/Movies/sports.jpeg",
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
    },

    // {
    //   id: 5,
    //   title: "Avatar 2",
    //   category: "Sci-Fi",
    //   image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    //   trailer: "https://www.youtube.com/embed/d9MyW72ELq0"
    // }

  ];

  const categories = ["All", "Romance", "Sports", "Comedy"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Filter movies
  const filteredMovies = allMovies.filter(movie =>
    (activeCategory === "All" || movie.category === activeCategory) &&
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      {/* HERO */}

      <section className="movies-hero">

        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <h1>Explore Movies</h1>
          <p>Discover and watch your favorite movies</p>

        </motion.div>

      </section>


      {/* SEARCH */}

      <section className="movies-controls">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        {/* CATEGORY TABS */}

        <div className="categories">

          {categories.map((cat) => (

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


      {/* MOVIES GRID */}

      <section className="movies-container">

        <motion.div
          layout
          className="movies-grid"
        >

          {filteredMovies.map(movie => (

            <motion.div
              layout
              key={movie.id}
              className="movie-card"

              whileHover={{ scale: 1.05 }}
            >

              <img src={movie.image} alt={movie.title} />

              <div className="movie-overlay">

                <h3>{movie.title}</h3>

                <button
                  onClick={() => navigate("/player", { state: { movie } })}

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

        {selectedMovie && (

          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <div className="modal-content">

              <FaTimes
                className="close"
                onClick={() => setSelectedMovie(null)}
              />

              <iframe
                width="100%"
                height="400"
                src={selectedMovie.trailer}
                title="Trailer"
                allowFullScreen
              />

              <h2>{selectedMovie.title}</h2>

            </div>

          </motion.div>

        )}

      </AnimatePresence>


      <Footer />

    </>
  );
}
