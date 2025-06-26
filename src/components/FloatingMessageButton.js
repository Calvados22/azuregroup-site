// src/components/FloatingMessageButton.jsx
import React, { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaComments,
  FaTimes,
} from "react-icons/fa";
import "./FloatingMessageButton.css";

export default function FloatingMessageButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-container">
      <button
        className="toggle-button"
        onClick={() => setOpen((prev) => !prev)}
        title={open ? "Close" : "Contact Us"}
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>

      <div className={`floating-buttons ${open ? "open" : ""}`}>
        <a
          href="tel:+212600000000"
          className="floating-icon phone"
          title="Call"
        >
          <FaPhone />
        </a>
        <a
          href="https://wa.me/212600000000"
          className="floating-icon whatsapp"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:contact@azuregroup.com"
          className="floating-icon email"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/company/azuregroup-ma/posts/?feedView=all"
          className="floating-icon linkedin"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
