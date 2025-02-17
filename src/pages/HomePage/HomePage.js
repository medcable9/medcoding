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
      <Services />
      <VideoComponent />
      <Activities />
      <ClientShowcase />
    </div>
  );
}

export default HomePage;
