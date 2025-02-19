import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt,
  FaClock ,
  FaUserCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/logo.png';
import { company_info } from '../../data/company_info.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Extract contact details and working hours from contact_info
  const { email, phone, address, workingHours, socialLinks, footer_description } = company_info[0];

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
          <p>{footer_description}</p>
          
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
            {/* Dynamically render working hours */}
            {workingHours.map((item, index) => (
              <li key={index}>
                <span>{item.days}</span>
                <span>{item.hours}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Column */}
        <motion.div 
          className="footer-column contact-info"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4><FaUserCircle />Contact Us</h4>
          {/* <h4>Contact Us</h4> */}
          <div className="footer-contact-details">
            <div className="footer-contact-detail">
              <FaMapMarkerAlt />
              <span>{address.name}</span>
            </div>
            <div className="footer-contact-detail">
              {Object.values(phone).map((phoneNumber, index) => (
                <React.Fragment key={index}>
                  <FaPhoneAlt />
                  <span>{phoneNumber}</span>
                </React.Fragment>
              ))}
            </div>
            <div className="footer-contact-detail">
              <FaEnvelope />
              <span>{email}</span>
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
