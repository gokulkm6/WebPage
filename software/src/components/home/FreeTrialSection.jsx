import React from "react";
import "./FreeTrialSection.css";

function FreeTrialSection() {
  return (
    <div className="free-trial-container">
      <div className="left-section">
        <h1>Try Neptune <span className="highlight">for Free</span></h1>
        <p>
          See for yourself how Neptune is streamlining app development, 
          deployment, integration, and maintenance for more than 5 million end users.
        </p>
        <p>
          With our Neptune Software Free Trial, you get 2 developer licenses 
          for innovating on your systems.
        </p>
      </div>
      <div className="right-section">
        <h2>The Easy Way</h2>
        <ul>
          <li><strong>Try for free:</strong> No hidden commitment or credit card required</li>
          <li><strong>Start designing, building & managing:</strong> Test any app or functionality before deciding</li>
          <li><strong>Have any questions?</strong> See resources and courses to get started</li>
          <li><strong>Upgrade your plan when you are ready:</strong> And be live in an instant</li>
        </ul>
        <button className="cta-button">Access your free trial</button>
      </div>
    </div>
  );
}

export default FreeTrialSection;