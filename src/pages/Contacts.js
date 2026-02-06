import React, { useState } from "react";
import Footer from "./Footer";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope className="info-icon"/>
            <h3>Email</h3>
            <p>support@creativemindz.com</p>
          </div>

          <div className="info-card">
            <FaPhone className="info-icon"/>
            <h3>Phone</h3>
            <p>+27 781275164</p>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon"/>
            <h3>Location</h3>
            <p>South Africa </p>
          </div>

          {/* SOCIAL */}
          <div className="social-links">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-container">

          <form onSubmit={handleSubmit} className="contact-form">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="success">{status}</p>}

          </form>

        </div>

      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Accra&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </section>

      <Footer />
    </>
  );
}
