import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Drama Series", path: "/Series" },
    { name: "Movies", path: "/Movies" },
    { name: "Sports", path: "/Sports" },
    { name: "Talk Shows", path: "/Talkshow" },
    { name: "Documentaries", path: "/Documentaries" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contacts" }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="nav-container">


<Box component="img"
  src="../img/C-logo.PNG"
  alt="CreativeMindz-logo"
  sx={{
    height: { xs: 48, sm: 64, md: 80 },
    cursor: 'pointer',
    transition: 'transform 0.25s ease',
    '&:hover': { transform: 'scale(2.05)' }
  }}
/>

        {/* Logo
        <Link to="/" className="logo">
          <img src="../img/C-logo.PNG" alt="logo" />
        </Link> */}

        {/* Desktop menu */}
        <ul className="nav-links">
          {navLinks.map((link, index) => (

            <motion.li
              key={index}
              whileHover={{ y: -2 }}
            >
              <Link
                to={link.path}
                className={
                  location.pathname === link.path
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {link.name}

                {location.pathname === link.path && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeNav"
                  />
                )}

              </Link>
            </motion.li>

          ))}
        </ul>

        {/* Mobile toggle */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >

            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

          </motion.div>
        )}

      </AnimatePresence>

    </motion.nav>
  );
}
