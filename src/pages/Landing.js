import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedSpots from '../components/FeaturedSpots';
import UpcomingEvents from '../components/UpcomingEvents';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <FeaturedSpots />
      <UpcomingEvents />
      <Footer />
    </div>
  );
};

export default Landing;