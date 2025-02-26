// CommonServices.js
import React from 'react';
import { motion } from 'framer-motion';
import './CommonServices.css';
import { services } from '../../data/services';

const ServiceCard = ({ icon, title, description }) => (
  <motion.div 
    className="service-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {icon}
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </motion.div>
);

const CommonServices = () => {
  return (
    <section className="our-services">
      <div className="services-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonServices;
