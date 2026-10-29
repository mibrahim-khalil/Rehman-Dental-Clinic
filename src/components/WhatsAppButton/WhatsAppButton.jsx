import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WA_APPOINTMENT } from '../../data/clinic';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a href={WA_APPOINTMENT} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;