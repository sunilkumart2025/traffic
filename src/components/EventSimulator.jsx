import React from 'react';
import '../styles/dashboard.css';

const locations = [
  { name: 'Mount Road', lat: 13.0820, lng: 80.2700 },
  { name: 'OMR Junction', lat: 12.9500, lng: 80.2200 },
];

const EventSimulator = ({ addEvent }) => {
  const reportEvent = (type) => {
    const location = locations[Math.floor(Math.random() * locations.length)];
    addEvent({ type, location: location.name, lat: location.lat, lng: location.lng });
  };

  return (
    <div className="event-simulator">
      <h2>🎮 Simulation</h2>
      <button onClick={() => reportEvent('jam')}>🚨 Report Jam</button>
      <button onClick={() => reportEvent('accident')}>⚠️ Report Accident</button>
    </div>
  );
};

export default EventSimulator;
