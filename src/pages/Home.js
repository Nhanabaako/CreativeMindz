import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "./home.css";

export default function Home() {

  const featured = [
    {
      title: "Fufu & Paps",
      image: "../img/Movies/fufu.jpeg"
    },
    {
      title: "Loud Cry",
      image: "../img/Movies/loudcry.jpeg"
    },
    {
      title: "I Love My Wife",
      image: "../img/Movies/love-my-wife.jpeg"
    },
    {
      title: "Worldcup 2026",
      image: "../img/Movies/sports.jpeg"
    }
  ];

  return (
    <>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Unlimited Movies, Series & Entertainment
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Watch anywhere. Cancel anytime.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >

            <button className="btn-primary">
              ▶ Play Now
            </button>

            <button className="btn-secondary">
              More Info
            </button>

          </motion.div>

        </div>

      </section>


      {/* FEATURED SECTION */}

      <section className="featured">

        <div className="section-header">
          <h2>Trending Now</h2>
        </div>

        <div className="movie-row">

          {featured.map((movie, index) => (

            <motion.div
              className="movie-card"
              key={index}

              whileHover={{
                scale: 1.1,
                y: -10
              }}
            >

              <img src={movie.image} alt={movie.title} />

              <div className="movie-overlay">

                <h3>{movie.title}</h3>

                <button>Watch Now</button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* CTA SECTION */}

      <section className="cta-section">

        <motion.div
          className="cta-box"

          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5 }}
        >

          <h2>Ready to start watching?</h2>

          <p>
            Join CreativeMindz Streamline today.
          </p>

          <button className="btn-primary">
            Get Started
          </button>

        </motion.div>

      </section>


      <Footer />

    </>
  );
}

