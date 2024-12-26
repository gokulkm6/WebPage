import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="text-content">
        <h1>Have any questions?</h1>
        <p>Feel free to contact us, and we will promptly respond to your inquiry.</p>
      </div>
      <div className="buttons">
        <button className="explore-button">Explore <span className="highlight">our platform</span></button>
        <button className="contact-button">Contact <span className="highlight">us</span></button>
      </div>
    </div>
  );
};

export default ContactSection;
