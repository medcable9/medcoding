import React from "react";
import { motion } from "framer-motion";
import "./VideoComponent.css";
import videoSource from "../../assets/vid.mov"; // Import your video file

const HeroSection = () => {
  return (
    <section className="video-section">
      {/* Video element */}
      <video autoPlay loop muted playsInline>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the video */}
      <div className="video-main">
        <motion.div
          className="video-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
