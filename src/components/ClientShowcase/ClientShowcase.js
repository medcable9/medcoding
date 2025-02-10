import React from "react";
import "./ClientShowcase.css";
import { clients } from "../../data/agents_customers";

const ClientShowcase = () => {
  return (
    <section className="client-showcase">
      <h2 className="showcase-title">Our Trusted Clients</h2>
      <div className="client-grid">
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.logo} alt="Client Logo" className="client-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientShowcase;