import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./videoplayer.css";
import { FaArrowLeft, FaPlay } from "react-icons/fa";

export default function VideoPlayer() {

  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie;

  // fallback if no data
  if (!movie) {
    return (
      <div className="player-error">
        <h2>No video selected</h2>
        <button onClick={() => navigate("/Movies")}>
          Go Back
        </button>
      </div>
    );
  }

  const recommended = [

    {
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },

    {
      title: "John Wick",
      image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
    },

    {
      title: "Batman",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    }

  ];

  return (
    <div className="player-page">

      {/* TOP BAR */}

      <div className="player-top">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>

        <h2>{movie.title}</h2>

      </div>


      {/* MAIN CONTENT */}

      <div className="player-container">

        {/* VIDEO SECTION */}

        <div className="video-section">

          <video
            controls
            autoPlay
            className="video-player"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />

          <div className="video-info">

            <h2>{movie.title}</h2>

            <p>
              Watch {movie.title} in HD quality. Enjoy unlimited streaming on CreativeMindz Streamline.
            </p>

          </div>

        </div>


        {/* SIDEBAR */}

        <div className="sidebar">

          <h3>Recommended</h3>

          {recommended.map((item, index) => (

            <div
              key={index}
              className="recommended-card"
            >

              <img src={item.image} alt="" />

              <div>

                <h4>{item.title}</h4>

                <button>
                  <FaPlay /> Play
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
