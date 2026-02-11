import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./videoplayer.css";
import { FaArrowLeft, FaPlay } from "react-icons/fa";

export default function VideoPlayer() {

  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie;

  if (!movie) {
    return (
      <div className="player-error">
        <h2>No video selected</h2>
        <button onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  // get video url from movie object
  const videoUrl =
    movie.video ||
    movie.trailer ||
    "";

  // convert youtube watch link → embed link
  const getYouTubeEmbed = (url) => {

    if (!url) return "";

    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    return url;
  };

  const embedUrl = getYouTubeEmbed(videoUrl);

  const isYouTube =
    embedUrl.includes("youtube.com/embed");

  const recommended = [
    {
      title: "Interstellar",
      image:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      title: "John Wick",
      image:
        "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
    },
    {
      title: "Batman",
      image:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
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

          {/* YOUTUBE PLAYER */}
          {isYouTube ? (

            <iframe
              className="video-player"
              src={embedUrl}
              title={movie.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

          ) : (

            /* MP4 PLAYER */
            <video
              controls
              autoPlay
              className="video-player"
              src={embedUrl}
            />

          )}

          <div className="video-info">

            <h2>{movie.title}</h2>

            <p>
              Watch {movie.title} in HD quality.
              Enjoy unlimited streaming on CreativeMindz Streamline.
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