import React, { useState } from "react";
import Box from '@mui/material/Box';
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    setMessage("Subscribed successfully!");
    setEmail("");

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section">
          <Box component="img"
  src="../img/C-logo.PNG"
  alt="CreativeMindz-logo"
  sx={{
    height: { xs: 48, sm: 64, md: 120 },
    cursor: 'pointer',
    transition: 'transform 0.25s ease',
    '&:hover': { transform: 'scale(1.05)' }
  }}
/>
          <p>
            CreativeMindz is your ultimate destination for movies,
            series, and coporate events anytime, anywhere.
          </p>

          <div className="footer-socials">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/series">Series</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Movies</li>
            <li>Drama Series</li>
            <li>Sports</li>
            <li>Comedy Shows</li>
            <li>Documentaries</li>
            <li>Trending Content</li>
            <li>Talk Shows</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>

          {/* <p><FaEnvelope /> support@creativemindz.com</p> */}
          <p><FaPhone /> +27 781275164</p>
          <p><FaMapMarkerAlt /> South Africa</p>

          {/* NEWSLETTER */}
          <form onSubmit={handleSubscribe} className="newsletter">
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>

          {message && <p className="newsletter-msg">{message}</p>}

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CreativeMindz Production. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
