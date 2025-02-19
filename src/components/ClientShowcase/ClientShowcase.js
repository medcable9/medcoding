import React from "react";
import "./ClientShowcase.css";
import { clients } from "../../data/agents_customers";
import { Link } from 'react-router-dom';

const ClientShowcase = () => {
  const displayedClients = clients.slice(0, 5);

  return (
    <section className="client-showcase">
      <h2 className="showcase-title">Our Trusted <Link to="/about#clients" className="client-text-button">Clients</Link></h2>
      <div className="client-grid">
        {displayedClients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.logo} alt="Client Logo" className="client-logo" />
          </div>
        ))}
      </div>
      {/* {clients.length > 5 && (
        <Link to="/about#clients" className="see-more-button">
          See More
        </Link>
      )} */}
    </section>
  );
};

export default ClientShowcase;
