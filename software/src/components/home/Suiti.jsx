import React from "react";
import "./Suit.css";

function SuitOrGeekSection() {
  return (
    <div className="suit-or-geek-container">
      <h1>
        Are You a <span className="highlight">Suit</span> or a <span className="highlight">Geek</span>?
      </h1>
      <div className="cards-container">
        <div className="card suit-card">
          <p>
            <strong>#Suit!</strong> Book a meeting and get your <strong>business value!</strong>
          </p>
          <button className="action-button">Contact us</button>
        </div>
        <div className="card geek-card">
          <p>
            <strong>#Geek!</strong> Chat to our tech team and <strong>try it yourself!</strong>
          </p>
          <button className="action-button">Book a demo</button>
        </div>
      </div>
    </div>
  );
}

export default SuitOrGeekSection;