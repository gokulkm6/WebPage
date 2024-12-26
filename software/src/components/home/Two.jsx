import React from 'react';
import './Two.css';
import sampleImage from  "../assets/pic.png";

const Two = () => {
  return (
    <section className="two-column-section">
      <div className="text-column">
        <h2>
          Unify Your Systems, <br />
          <span className="highlight">Simplify Your Workflows.</span>
        </h2>
        <p>
          Integrate disconnected systems with easy and seamless SAP integration capabilities, ensure consistent data views with single-entry points, and eliminate inefficiencies with easily built digital solutions.
        </p>
      </div>
      <div className="image-column">
        <img src={sampleImage} alt="Workflow illustration" />
      </div>
    </section>
  );
};

export default Two;
