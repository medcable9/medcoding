import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
import "./ContactUs.css";
import { company_info } from "../../data/company_info.js";

const ContactUs = () => {
  const { address } = company_info[0];
  return (
    <div>
      <ContactForm />
      <section className="google-maps-section">
        <h2>Find Us Here</h2>
        <iframe
          title={address.name}
          src={`https://www.google.com/maps?q=${address.lat},${address.lng}&z=15&output=embed`}
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
