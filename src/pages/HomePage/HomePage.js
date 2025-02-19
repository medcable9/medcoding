import React from 'react';
import HeroSection from '../../components/Hero/Hero';
import ClientShowcase from "../../components/ClientShowcase/ClientShowcase";
import Services from "../../components/CommonServices/CommonServices"
import Activities from "../../components/Activities/Activities"
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';


import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <Services />
      <FeaturedProduct/>
      <Activities />
      <ClientShowcase />
    </div>
  );
}

export default HomePage;
