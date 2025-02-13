import React from 'react';
import HeroSection from '../../components/Hero/Hero';
import ClientShowcase from "../../components/ClientShowcase/ClientShowcase";
import Services from "../../components/CommonServices/CommonServices"
import Activities from "../../components/Activities/Activities"
import VideoComponent from "../../components/VideoComponent/VideoComponent"
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      {/* <div className='hero22-content'>
        <h2>Quality Cables Since 2009</h2>
        <p>Mediterranean Cables Company, a leading cable manufacturer since 2009, delivers reliable, high-quality customized solutions for various industries.</p>
      </div> */}
      <Services />
      <VideoComponent />
      <Activities />
      <ClientShowcase />
    </div>
  );
}

export default HomePage;
