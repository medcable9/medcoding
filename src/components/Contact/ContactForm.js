import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactImage from "../../assets/images/test.jpg";
import { contact_info } from "../../data/contact.js";
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

  // Extract contact details and social links from contact_info
  const { email, phone, address, socialLinks } = contact_info[0];

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
            {/* Use dynamic data for email and phone */}
            <div className="contact-item">
              <FaEnvelope className="icon" /> {email}
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" /> {phone}
            </div>
            {/* Optional: Display address if needed */}
            {address && (
              <div className="contact-item">
                <FaMapMarkerAlt  className="icon" /> {address}
              </div>
            )}
          </div>
          {/* Render social media links dynamically */}
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
                {/* Render the icon dynamically */}
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
