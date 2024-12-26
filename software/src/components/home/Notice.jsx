import React from "react";
import "./Notice.css";

const Notice= () => {
  return (
    <div className="features-container">
      <div className="features-grid">
        <div className="feature-card">
          <h2>
            Enterprise <span className="highlight">Mobility</span>
          </h2>
          <p>
            Create a seamless employee experience and corporate UI with mobile- and
            user-friendly, integrated SAP applications that boost productivity and
            work on- or offline, on any device and any system.
          </p>
        </div>
        <div className="feature-card">
          <h2>
            SAP-Native <span className="highlight">App Development</span>
          </h2>
          <p>
            Design, build, integrate, deploy, and maintain SAP Fiori apps—and in a fraction
            of the time it takes on other platforms.
          </p>
        </div>
        <div className="feature-card">
          <h2>
            Rapid <span className="highlight">Application Development</span>
          </h2>
          <p>
            Bridge no-code, low-code and pro-code for maximum productivity and flexibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
