import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./AgentsAndCustomers.css";
import mapMarker from "../../assets/images/map-marker.webp";

import { agents, agents_cities, customers, globalExportCountries } from "../../data/agents_customers";

const customIcon = new L.Icon({
  iconUrl: mapMarker,
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const AgentCard = ({ name, logo }) => (
  <div className="agent-card">
    <img src={logo} alt={name} className="agent-logo" />
    <h3 className="agent-name">{name}</h3>
  </div>
);

const CustomerItem = ({ name, logo }) => (
  <div className="customer-item">
    <img src={logo} alt={name} className="customer-logo" />
    <p className="customer-name">{name}</p>
  </div>
);

const AgentsAndCustomers = () => {
  return (
    <div className="agents-customers-container">
      <section className="agents-section">
        <h2 className="section-title">Our Official Agents</h2>
        <p className="section-description">Serving you in the following cities:</p>
        <ul className="cities-list">
          {agents_cities.map((city, index) => (
            <li key={index} className="city-item">{city}</li>
          ))}
        </ul>
        <div className="agents-grid">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </section>

      <section className="customers-section">
        <h2 className="section-title">Our Esteemed Customers</h2>
        {Object.entries(customers).map(([category, subcategories]) => (
          <div key={category} className="customer-category">
            <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="subcategories-grid">
              {Object.entries(subcategories).map(([subcategory, customerList]) => (
                <div key={subcategory} className="subcategory">
                  <h4 className="subcategory-title">{subcategory}</h4>
                  <div className="customer-list">
                    {customerList.map((customer, index) => (
                      <CustomerItem key={index} {...customer} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="export-countries-section">
        <h2 className="section-title">Global Reach</h2>
        <MapContainer center={[20, 0]} zoom={3} style={{ height: '500px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {globalExportCountries.map((country, index) => (
            <Marker key={index} position={[country.lat, country.lng]} icon={customIcon}>
              <Popup>{country.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </div>
  );
};

export default AgentsAndCustomers;
