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
    <h3>{title}</h3>
    <p>{description}</p>
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
          Our Services
        </motion.h2>
        <motion.p
          className="services-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Mediterranean Cables, we offer a comprehensive range of services to meet all your cable needs. From custom manufacturing to expert consultation, we're here to ensure you get the perfect cable solution for your project.
        </motion.p>
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
