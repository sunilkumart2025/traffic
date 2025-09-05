import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = ({ signals, events }) => {
  const getSignalColor = (congestion) => {
    if (congestion < 30) return 'green';
    if (congestion <= 60) return 'orange';
    return 'red';
  };

  const getStatus = (congestion) => {
    if (congestion < 30) return 'Clear';
    if (congestion <= 60) return 'Moderate';
    return 'Crowded';
  };

  const getRoadStatus = (congestion) => {
    return congestion > 60 ? 'Partially Closed' : 'Open';
  };

  return (
    <MapContainer center={[13.0827, 80.2707]} zoom={12} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {signals.map(signal => (
        <Marker
          key={signal.id}
          position={[signal.lat, signal.lng]}
          icon={L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: ${getSignalColor(signal.congestion)}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          })}
        >
          <Popup>
            <div>
              <h3>{signal.name}</h3>
              <p>Status: {getStatus(signal.congestion)}</p>
              <p>Congestion: {signal.congestion}%</p>
              <p>Road Status: {getRoadStatus(signal.congestion)}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      {events.map((event, index) => (
        <Marker
          key={index}
          position={[event.lat, event.lng]}
          icon={L.divIcon({
            className: 'custom-marker',
            html: `<div style="font-size: 20px;">${event.type === 'jam' ? '🚨' : '⚠️'}</div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          })}
        >
          <Popup>
            <div>
              <p>{event.type === 'jam' ? 'Jam Reported' : 'Accident Reported'} at {event.location}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
