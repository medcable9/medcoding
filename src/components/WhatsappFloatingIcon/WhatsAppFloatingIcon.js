import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloatingIcon.css';

const WhatsAppFloatingIcon = () => {
  const phoneNumber = '+1234567890'; // Replace with your company's WhatsApp number
  const message = 'Hello! I would like to get a quote.';

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-floating-icon" onClick={openWhatsApp}>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppFloatingIcon;
