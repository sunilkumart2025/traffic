import React, { useState } from 'react';
import '../styles/dashboard.css';

const Controls = ({ signals, updateSignal }) => {
  const [confirmation, setConfirmation] = useState('');

  const handleAction = (action, signalId = null) => {
    if (action === 'forceGreen' && signalId) {
      updateSignal(signalId, 10); // Set to low congestion
      setConfirmation(`✅ Action executed: Force Green on ${signals.find(s => s.id === signalId).name}`);
    } else if (action === 'forceRed' && signalId) {
      updateSignal(signalId, 80); // Set to high congestion
      setConfirmation(`✅ Action executed: Force Red on ${signals.find(s => s.id === signalId).name}`);
    } else if (action === 'ambulance') {
      setConfirmation('✅ Action executed: Activate Ambulance Corridor');
    } else if (action === 'clear') {
      setConfirmation('✅ Action executed: Clear Jam/Accident');
    }
    setTimeout(() => setConfirmation(''), 3000); // Clear after 3 seconds
  };

  return (
    <div className="controls">
      <h2>Admin Controls</h2>
      <div className="control-buttons">
        <button onClick={() => handleAction('forceGreen', 1)}>🟢 Force Signal Green (Guindy)</button>
        <button onClick={() => handleAction('forceRed', 1)}>🔴 Force Signal Red (Guindy)</button>
        <button onClick={() => handleAction('ambulance')}>🚑 Activate Ambulance Corridor</button>
        <button onClick={() => handleAction('clear')}>🚨 Clear Jam/Accident</button>
      </div>
      {confirmation && <div className="confirmation">{confirmation}</div>}
    </div>
  );
};

export default Controls;
