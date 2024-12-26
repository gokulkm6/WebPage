import React from "react";
import "./Best.css";
import a from "../assets/sour.png";
import b from "../assets/great.png";
import c from "../assets/third.png";
import d from "../assets/4.png";
import e from "../assets/5.png";
import f from "../assets/6.png";

function BestInClassSection() {
  const badges = [
    { image: a, alt: "SourceForge" },
    { image: b, alt: "Great Place To Work" },
    { image: c, alt: "Fastest Implementation" },
    { image: d, alt: "SAP Certified" },
    { image: e, alt: "Momentum Leader" },
    { image: f, alt: "Gartner Peer Insights" },
  ];

  return (
    <div className="best-in-class-container">
      <h1>
        Find Out Why We Are the <span className="highlight">Best-In-Class</span>
      </h1>
      <div className="badges-container">
        {badges.map((badge, index) => (
          <div key={index} className="badge-card">
            <img src={badge.image} alt={badge.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestInClassSection;