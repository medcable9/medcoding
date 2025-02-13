import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-main">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Welcome to <br/><span>Mediterranean Cables</span></h1>
        </motion.div>
        <motion.div 
          className='hero22-content'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          >
          <h2>Quality Cables Since 2009</h2>
          <p>A leading cable manufacturer since 2009, delivers reliable, high-quality customized solutions for various industries.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;