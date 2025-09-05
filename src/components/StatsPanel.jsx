import React from 'react';
import '../styles/dashboard.css';

const StatsPanel = ({ signals, events }) => {
  const totalSignals = signals.length;
  const congestedSignals = signals.filter(s => s.congestion > 60).length;
  const jamsReported = events.filter(e => e.type === 'jam').length;
  const accidentsReported = events.filter(e => e.type === 'accident').length;
  const ambulanceAlerts = 2; // Dummy data
  const usersContributing = 15; // Dummy data

  return (
    <div className="stats-panel">
      <h2>Live Stats</h2>
      <div className="stats-cards">
        <div className="card">
          <span role="img" aria-label="traffic light">🚦</span>
          <div>Total Active Signals</div>
          <div className="stat-value">{totalSignals}</div>
        </div>
        <div className="card">
          <span role="img" aria-label="red circle">🔴</span>
          <div>Congested Signals</div>
          <div className="stat-value">{congestedSignals}</div>
        </div>
        <div className="card">
          <span role="img" aria-label="jam">🚨</span>
          <div>Jams Reported</div>
          <div className="stat-value">{jamsReported}</div>
        </div>
        <div className="card">
          <span role="img" aria-label="accident">⚠️</span>
          <div>Accidents Reported</div>
          <div className="stat-value">{accidentsReported}</div>
        </div>
        <div className="card">
          <span role="img" aria-label="ambulance">🚑</span>
          <div>Ambulance Alerts</div>
          <div className="stat-value">{ambulanceAlerts}</div>
        </div>
        <div className="card">
          <span role="img" aria-label="users">👥</span>
          <div>Users Contributing</div>
          <div className="stat-value">{usersContributing}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
