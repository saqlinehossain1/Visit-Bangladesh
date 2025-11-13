import React from 'react';
import '../styles/Events.css';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      name: "Pohela Boishakh",
      date: "April 14, 2024",
      location: "Dhaka",
      image: "/images/po.jpg"
    },
    {
      id: 2,
      name: "Eid Festival",
      date: "June 2024",
      location: "Nationwide",
      image: "/images/eid.jpg"
    },
    {
      id: 3,
      name: "Durga Puja",
      date: "October 2024",
      location: "Dhaka, Chattogram",
      image: "/images/dur.jpg"
    }
  ];

  return (
    <section className="events-section">
      <div className="container">
        <h2>Upcoming Events & Festivals</h2>
        <p className="section-subtitle">Experience the rich cultural heritage of Bangladesh</p>
        
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.name} />
              <div className="event-info">
                <h3>{event.name}</h3>
                <p className="event-date">📅 {event.date}</p>
                <p className="event-location">📍 {event.location}</p>
                <button className="btn-learn-more">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;