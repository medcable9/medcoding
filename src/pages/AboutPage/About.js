import React from 'react';
import CompanyInfo from "../../components/CompanyInfoSection/CompanyInfoSection";
import Customers from "../../components/AgentsAndCustomers/CustomersSection"
import AgentsSection from '../../components/AgentsAndCustomers/AgentsSection';
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <CompanyInfo />
      < AgentsSection/>
      <Customers />
    </div>
  );
}

export default About;
