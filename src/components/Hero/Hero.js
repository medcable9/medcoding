// HeroSection.js
import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-main">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Mediterranean Cables</span>
        </motion.h1>
        <motion.div 
          className='hero-content'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Quality Cables Since 2009</h2>
          <p>A leading cable manufacturer that delivers reliable and high-quality customized solutions for various industries.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
