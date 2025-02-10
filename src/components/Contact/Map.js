import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <section className="google-maps-section">
      <h2>Find Us Here</h2>
      <p>Visit our office or find us on the map below:</p>
      <iframe
        title="Google Maps Location"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093745!2d144.96305791531683!3d-37.81410797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b8e6b9b4a7!2sFederation%20Square%20Melbourne%20VIC%203000%20Australia!5e0!3m2!1sen!2sus!4v1614123456789`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
