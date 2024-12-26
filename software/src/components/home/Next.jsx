import React from "react";
import "./Next.css";

const Next= () => {
  return (
    <div className="features-container">
      <h1 className="features-title">
        Neptune <span className="highlight">Features</span>
      </h1>
      <div className="features-grid">
        <div className="feature-card">
          <h2>
            Employee <span className="highlight">Digital Experience</span>
          </h2>
          <p>
            Apply the user experience (UX) you want. Neptune is the only platform to unify
            your user interface with your corporate identity across your entire system
            landscape.
          </p>
        </div>
        <div className="feature-card">
          <h2>
            Holistic <span className="highlight">Integration</span>
          </h2>
          <p>
            Reduce middleware dependencies. Our API-based integration seamlessly connects
            your systems, providing on-demand, on-the-go access to business logic.
          </p>
        </div>
        <div className="feature-card">
          <h2>
            Platform <span className="highlight">Foundation</span>
          </h2>
          <p>
            Leverage a simplified architecture with hybrid capabilities, allowing you to
            choose and scale your own infrastructure—whether on-premise, cloud, or
            multi-cloud—without being locked into a specific hyperscaler.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Next;
