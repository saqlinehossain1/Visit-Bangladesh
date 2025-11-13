import React from 'react';
import '../styles/FeaturedSpots.css';

const FeaturedSpots = () => {
  const spots = [
    {
      id: 1,
      name: "Cox's Bazar",
      category: "Beach",
      image: "/images/cox.jpg",
      rating: 4.8,
      description: "World's longest natural sea beach"
    },
    {
      id: 2,
      name: "Sundarbans",
      category: "Nature",
      image: "/images/sun.jpg",
      rating: 4.9,
      description: "Largest mangrove forest in the world"
    },
    {
      id: 3,
      name: "Srimangal",
      category: "Hill",
      image: "/images/sree.jpg",
      rating: 4.7,
      description: "Tea capital of Bangladesh"
    },
    {
      id: 4,
      name: "Paharpur",
      category: "Heritage",
      image: "/images/ban.jpg",
      rating: 4.6,
      description: "Ancient Buddhist monastery"
    }
  ];

  return (
    <section className="featured-spots">
      <div className="container">
        <h2>Featured Destinations</h2>
        <p className="section-subtitle">Discover the most popular tourist spots in Bangladesh</p>
        
        <div className="spots-grid">
          {spots.map(spot => (
            <div key={spot.id} className="spot-card">
              <img src={spot.image} alt={spot.name} />
              <div className="spot-info">
                <span className="spot-category">{spot.category}</span>
                <h3>{spot.name}</h3>
                <p>{spot.description}</p>
                <div className="spot-footer">
                  <span className="rating">⭐ {spot.rating}</span>
                  <button className="btn-view">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpots;