import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactImage from "../../assets/images/contact.jpeg";
import { company_info } from "../../data/company_info.js";
import "./ContactInfo.css";

const ContactInfo = () => {
  const { email, phone, address, socialLinks } = company_info[0];

  return (
    <div className="contact-info-container">
      <div className="map-section">
        <iframe
          title={address.name}
          src={`https://www.google.com/maps?q=${address.lat},${address.lng}&z=15&output=embed`}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-info-section">
        <div className="contact-image-wrapper">
          <img src={ContactImage} alt="Contact Us" className="contact-section-image" />
        </div>
        <h2>Reach us directly</h2>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div className="email-addresses">
              {Object.values(email).map((emailA, index) => (
                <span key={index} className="email-address">{emailA}</span>
              ))}
            </div>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div className="phone-numbers">
              {Object.values(phone).map((phoneNumber, index) => (
                <span key={index} className="phone-number">{phoneNumber}</span>
              ))}
            </div>
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
  );
};

export default ContactInfo;
