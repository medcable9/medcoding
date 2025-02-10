import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import image1 from "../../assets/images/aa.jpeg";
import image2 from "../../assets/images/aa.jpeg";
import image3 from "../../assets/images/aa.jpeg";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

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
          <p>Trusted For Quality & Reliability Since 2009</p>
          {/* <motion.div className="hero-buttons">
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Products
          </motion.button>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More About Us
          </motion.button>
          </motion.div> */}
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Slider {...sliderSettings}>
            <div><img src={image1} alt="Cable Product 1" /></div>
            <div><img src={image2} alt="Cable Product 2" /></div>
            <div><img src={image3} alt="Cable Product 3" /></div>
          </Slider>
        </motion.div>
      </div>
      {/* <motion.div
        className="hero-features"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="feature">
          <i className="fas fa-dollar-sign"></i>
          <h3>Competitive Pricing</h3>
        </div>
        <div className="feature">
          <i className="fas fa-clock"></i>
          <h3>Delivery on Deadlines</h3>
        </div>
        <div className="feature">
          <i className="fas fa-certificate"></i>
          <h3>ISO Certified</h3>
        </div>
        <div className="feature">
          <i className="fas fa-vial"></i>
          <h3>Modern Product Testing</h3>
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
