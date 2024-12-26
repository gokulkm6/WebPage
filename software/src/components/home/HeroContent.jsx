import React from 'react';
import './HeroContent.css';
import sun from "../assets/sun.png"; 

const HeroContent = () => {
  return (
    <section className="hero-content-section">
      <div className="hero-content-image">
        <img src={sun} alt="Abstract design" />
      </div>
      <div className="hero-content-text">
        <h2>
          Set the Right Focus. <br />
          <span className="highlight">Get Your Digital Transformation on Track.</span>
        </h2>
        <p>
          Eliminate complex manual and paper-based processes, modernize outdated tools, and reduce high TCO driving your digital transformation journey forward. Easily reduce unnecessary IT cost and development spend.
        </p>
        <button className="content-button">More about our <span className="button-highlight">SAP Expertise</span></button>
      </div>
    </section>
  );
};

export default HeroContent;
