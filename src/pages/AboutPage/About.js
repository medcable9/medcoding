import React from 'react';
import CompanyInfo from "../../components/CompanyInfoSection/CompanyInfoSection";
import Customers from "../../components/AgentsAndCustomers/CustomersSection"
import AgentsSection from '../../components/AgentsAndCustomers/AgentsSection';
import LocationMap from "../../components/LocationMap/LocationMap";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <CompanyInfo />
      <LocationMap />
      <AgentsSection/>
      <Customers />
    </div>
  );
}

export default About;
