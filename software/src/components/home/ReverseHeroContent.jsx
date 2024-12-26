import React from 'react';
import './ReverseHeroContent.css';
import blue from "../assets/blue.png"; // Replace with the actual path to your image

const ReverseHeroContent = () => {
  return (
    <section className="reverse-hero-content-section">
      <div className="reverse-hero-content-text">
        <h2>
          Set the Right Focus. <br />
          <span className="highlight">Get Your Digital Transformation on Track.</span>
        </h2>
        <p>
          Eliminate complex manual and paper-based processes, modernize outdated tools, and reduce high TCO driving your digital transformation journey forward. Easily reduce unnecessary IT cost and development spend.
        </p>
        <button className="content-button">More about our <span className="button-highlight">SAP Expertise</span></button>
      </div>
      <div className="reverse-hero-content-image">
        <img src={blue} alt="Abstract design" />
      </div>
    </section>
  );
};

export default ReverseHeroContent;
