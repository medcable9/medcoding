import React from 'react';
import CompanyInfo from "../../components/CompanyInfoSection/CompanyInfoSection";
import Customers from "../../components/AgentsAndCustomers/CustomersSection"
import AgentsSection from '../../components/AgentsAndCustomers/AgentsSection';
import ContactForm from "../../components/ContactInfo/ContactInfo";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <CompanyInfo />
      <ContactForm />
      <AgentsSection/>
      <Customers />
    </div>
  );
}

export default About;
