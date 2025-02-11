import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
import "./ContactUs.css";

const companyLocation = [
  { name: "Beirut, Lebanon", lat: 33.45133343518141, lng: 35.361417915341946 }
];

const ContactUs = () => {
  const { lat, lng } = companyLocation[0];

  return (
    <div>
      <ContactForm />
      <section className="google-maps-section">
        <h2>Find Us Here</h2>
        <p>Visit our office or find us on the map below:</p>
        <iframe
          title="Google Maps Location"
          src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
