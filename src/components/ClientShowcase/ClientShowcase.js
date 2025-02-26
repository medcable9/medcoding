// ClientShowcase.js
import React from "react";
import { Link } from 'react-router-dom';
import "./ClientShowcase.css";
import { clients } from "../../data/agents_customers";

const ClientShowcase = () => {
  const displayedClients = clients.slice(0, 5);

  return (
    <section className="client-showcase">
      <h2 className="showcase-title">
        Our Trusted <Link to="/about#clients" className="client-text-button">Clients</Link>
      </h2>
      <ul className="client-grid">
        {displayedClients.map((client) => (
          <li key={client.id} className="client-card">
            <img src={client.logo} alt={`${client.name} Logo`} className="client-logo" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClientShowcase;
