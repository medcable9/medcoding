import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactImage from "../../assets/images/test.jpg";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", subject: "", country: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Your message has been sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "", subject: "", country: "" });
    }, 2000);
  };

  const socialLinks = [
    { icon: FaFacebook, url: "#" },
    { icon: FaTwitter, url: "#" },
    { icon: FaInstagram, url: "#" },
    { icon: FaLinkedin, url: "#" },
  ];

  return (
    <div className="contact-us-container">
      <div className="contact-us-overlay"></div>
      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Drop us a message and we'll respond as soon as possible.</p>
          {formStatus && <div className="form-status">{formStatus}</div>}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Country"
              />
            </div>
            <div className="input-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we assist you?"
                className="large-textarea"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="contact-info-section">
          <div className="contact-image-wrapper">
            <img src={ContactImage} alt="Contact Us" className="contact-section-image" />
          </div>
          <h2>Or reach us directly</h2>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="icon" /> contact@yourcompany.com
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" /> (123) 456-7890
            </div>
          </div>
          <div className="social-media">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
