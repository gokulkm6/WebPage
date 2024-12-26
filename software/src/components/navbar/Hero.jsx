import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Content for the hero section
  const slides = [
    {
      title: "We Unite the Suits\nWith the Geeks.",
      description:
        "With a focus on bridging the gap between business and IT, we enable tech teams, business counterparts, and operations worldwide to easily build and deliver custom solutions at scale and with ease.",
    },
    {
      title: "Simple\n Smart\n SAP-Native.",
      description:
        "Bridge no-code, low-code and pro-code for maximum productivity and flexibility.\n Simplify your app development & processes. Unlock the full potential of SAP.",
    },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          {slides[currentSlide].title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p>{slides[currentSlide].description}</p>
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;

