import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt,
  FaClock 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, url: '#' },
    { icon: FaTwitter, url: '#' },
    { icon: FaInstagram, url: '#' },
    { icon: FaLinkedin, url: '#' }
  ];

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-container">
        {/* Company Info Column */}
        <motion.div 
          className="footer-column f-company-info"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p>Innovative solutions for your business needs. Committed to excellence and customer satisfaction.</p>
          
          <div className="social-links">
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
        </motion.div>

        {/* Working Hours Column */}
        <motion.div 
          className="footer-column working-hours"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4><FaClock /> Working Hours</h4>
          <ul className="hours-list">
            <li>
              <span>Monday - Friday</span>
              <span>8:00 AM - 3:00 PM</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>8:00 AM - 2:00 PM</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Column */}
        <motion.div 
          className="footer-column contact-info"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4>Contact Us</h4>
          <div className="footer-contact-details">
            <div className="footer-contact-detail">
              <FaMapMarkerAlt />
              <span>123 Business Street, City, Country</span>
            </div>
            <div className="footer-contact-detail">
              <FaPhoneAlt />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="footer-contact-detail">
              <FaEnvelope />
              <span>info@yourcompany.com</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p>&copy; {currentYear} Your Company Name. All Rights Reserved.</p>
        <div className="footer-policies">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
