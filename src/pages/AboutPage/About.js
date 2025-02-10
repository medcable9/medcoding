import React from 'react';
import CompanyInfo from "../../components/CompanyInfoSection/CompanyInfoSection";
import AgentsAndCustomers from "../../components/AgentsAndCustomers/AgentsAndCustomers"

function About() {
  return (
    <div className="about-us-page">
      <CompanyInfo />
      <AgentsAndCustomers />
    </div>
  );
}

export default About;
