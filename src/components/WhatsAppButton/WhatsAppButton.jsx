import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;