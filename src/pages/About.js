import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "./about.css";
import { FaPlay, FaUsers, FaFilm, FaGlobe } from "react-icons/fa";

export default function About() {

  const features = [
    {
      icon: <FaFilm />,
      title: "Unlimited Content",
      desc: "Stream thousands of movies and series anytime."
    },
    {
      icon: <FaPlay />,
      title: "HD Streaming",
      desc: "Enjoy high quality HD and 4K streaming."
    },
    {
      icon: <FaUsers />,
      title: "Video Shooting/Editing",
      desc: "Experts in video shooting, editing, and scriptwriting."
    },
    {
      icon: <FaGlobe />,
      title: "Watch Anywhere",
      desc: "Available on mobile, tablet, and desktop."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1>About CreativeMindz Streamline</h1>
          <p>Your ultimate streaming destination</p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>Who We Are</h2>
          <p>
            CreativeMindz is a modern streaming platform designed to bring unlimited entertainment to users worldwide. Our mission is to provide seamless, high-quality streaming experiences with the best movies and TV series.
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stats-grid">
          <div>
            <h2>10K+</h2>
            <p>Movies</p>
          </div>
          <div>
            <h2>5K+</h2>
            <p>Series</p>
          </div>
          <div>
            <h2>50K+</h2>
            <p>Users</p>
          </div>
          <div>
            <h2>100+</h2>
            <p>Countries</p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-vision">
        <div className="vision-content">
          <h2>Where Vision Meets the Lens</h2>
          <p>
            At <strong>Creativemindz</strong>, we don’t just capture footage; we curate experiences. We are a full-service production powerhouse dedicated to the art of visual storytelling. From the first spark of a script idea to the final color grade of a cinematic masterpiece, we live and breathe the frame.
          </p>
          <p>
            Our philosophy is simple: <strong>Every story deserves a pulse.</strong> Whether it’s a feature film, a high-impact commercial, or a single, evocative photograph, we blend technical precision with raw creativity to bring your vision to life.
          </p>

          <h3>What We Do</h3>
          <ul>
            <li><strong>Movie Production & Direction:</strong> We handle the heavy lifting of principal photography, ensuring every scene is shot with cinematic intentionality.</li>
            <li><strong>Scriptwriting & Narrative Design:</strong> Our writers craft compelling dialogue and structures that resonate with audiences long after the credits roll.</li>
            <li><strong>Post-Production & Video Editing:</strong> This is where the magic is polished. We provide high-end editing, sound design, and visual effects to ensure a seamless flow.</li>
            <li><strong>Professional Photography:</strong> From editorial spreads to on-set stills, we capture the frozen moments that tell a story all on their own.</li>
            <li><strong>Motion Graphics & Digital Content:</strong> In an era of short-form media, we create crisp, engaging content tailored for every platform.</li>
          </ul>

          <h3>Why Creativemindz?</h3>
          <blockquote>
            "Innovation is the heart of our process, but storytelling is our soul."
          </blockquote>
          <p>
            In a world saturated with content, standing out requires more than just high-end gear—it requires a point of view. The <strong>Creativemindz</strong> team is a collective of directors, writers, and technicians who view every project as a unique puzzle. We don't believe in "cookie-cutter" templates. We believe in bespoke visual solutions that reflect the unique identity of our clients.
          </p>

          <h3>Our Mission & Vision</h3>
          <p><strong>Mission:</strong> To bridge the gap between imagination and reality through unparalleled visual craftsmanship. We exist to empower creators, brands, and dreamers by providing a seamless production experience—from the first word on the page to the final frame of the edit.</p>
          <p><strong>Vision:</strong> To become the global gold standard for multidisciplinary production, where technology meets raw human emotion. We envision a future where <strong>Creativemindz</strong> is synonymous with cinematic innovation, fostering a world where every great idea has the visual power to change the narrative.</p>

          <h3>Our Core Values</h3>
          <ul>
            <li><strong>Narrative First:</strong> Tech is great, but the story is king. We prioritize the "why" behind every shot.</li>
            <li><strong>Bold Innovation:</strong> We aren’t afraid to break the rules of traditional cinematography to find a fresh perspective.</li>
            <li><strong>Uncompromising Quality:</strong> Whether it’s a 15-second social ad or a 2-hour feature, the "Creativemindz" stamp means excellence.</li>
            <li><strong>Radical Collaboration:</strong> Your vision is our blueprint. We thrive on the energy of working closely with our clients.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2>Start Watching Today</h2>
          <p>Join CreativeMindz Streamline now.</p>
          <button className="cta-btn">Get Started</button>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
