import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './EmailFloatingIcon.css';
import { company_info } from "../../data/company_info.js";

const EmailFloatingIcon = () => {
  const [showModal, setShowModal] = useState(false);
  const { email } = company_info[0];
  const subject = 'Request for Quote';
  const body = 'Hello! I would like to get a quote.';

  const openEmailClient = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open the email client
    window.location.href = mailtoLink;
    
    // Check if the email client opened successfully
    setTimeout(() => {
      if (document.hasFocus()) {
        // If the window still has focus, it means the email client didn't open
        setShowModal(true);
      }
    }, 500);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="email-floating-icon" onClick={openEmailClient}>
        <FaEnvelope />
      </div>
      {showModal && (
        <div className="email-modal">
          <div className="email-modal-content">
            <h2>No Email App Found</h2>
            <p>It seems you don't have an email app installed. You can:</p>
            <ul>
              <li>Install an email app from your device's app store</li>
              <li>Use a web-based email service like Gmail or Outlook</li>
              <li>Copy our email address: {email}</li>
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailFloatingIcon;
