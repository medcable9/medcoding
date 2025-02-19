import React from "react";
import "./AgentsSection.css";
import { agents } from "../../data/agents_customers";

const AgentsSection = () => {
  return (
    <section className="agents-section">
      <div className="agents-content">
        <h2>Our Official Agents</h2>
        <p className="section-description">Serving you all over Lebanon 🇱🇧</p>
      </div>
      <div className="agents-container">
        {agents.map((agent) => (
          <div key={agent.id} className="agents-card">
            <img src={agent.image} alt={agent.name} className="agent-image" />
            {/* <h3>{agent.name}</h3>
            <p className="phone">{agent.phone}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentsSection;
