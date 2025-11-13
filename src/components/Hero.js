import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Discover the Beauty of Bangladesh</h1>
          <p>Explore pristine beaches, ancient heritage sites, lush hills, and vibrant culture</p>
          <div className="hero-buttons">
            <button className="btn-explore">Explore Now</button>
            <button className="btn-watch">Watch Video</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;