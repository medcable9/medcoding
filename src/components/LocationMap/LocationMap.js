import React from "react";
import { company_info } from "../../data/company_info.js";
import "./LocationMap.css";

const ContactInfo = () => {
  const { address } = company_info[0];

  return (
    <div className="contact-info-container">
      <div className="map-section">
        <h2>Find us here</h2>
        <iframe
          title={address.name}
          src={`https://www.google.com/maps?q=${address.lat},${address.lng}&z=15&output=embed`}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
