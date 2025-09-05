import React, { useState } from 'react';
import MapView from '../components/MapView';
import StatsPanel from '../components/StatsPanel';
import Controls from '../components/Controls';
import Charts from '../components/Charts';
import EventSimulator from '../components/EventSimulator';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [signals, setSignals] = useState([
    { id: 1, name: 'Guindy', lat: 13.0067, lng: 80.2206, congestion: 25 },
    { id: 2, name: 'Tambaram', lat: 12.9249, lng: 80.1000, congestion: 45 },
    { id: 3, name: 'Anna Nagar', lat: 13.0850, lng: 80.2101, congestion: 70 },
  ]);

  const [events, setEvents] = useState([]);

  const updateSignal = (id, newCongestion) => {
    setSignals(signals.map(sig => sig.id === id ? { ...sig, congestion: newCongestion } : sig));
  };

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="dashboard">
      <div className="map-container">
        <MapView signals={signals} events={events} />
      </div>
      <div className="sidebar">
        <StatsPanel signals={signals} events={events} />
        <Controls signals={signals} updateSignal={updateSignal} />
        <EventSimulator addEvent={addEvent} />
        <Charts signals={signals} />
      </div>
    </div>
  );
};

export default Dashboard;
