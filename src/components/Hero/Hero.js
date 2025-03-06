import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const backgrounds = [
  // require("../../assets/images/hero-bg.jpg"),
  require("../../assets/images/hero4.JPG"),
  require("../../assets/images/hero3.jpeg"),
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" >
    <section className="hero-background" style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}></section>
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
