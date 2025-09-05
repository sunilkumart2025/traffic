import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import '../styles/dashboard.css';

const Charts = ({ signals }) => {
  // Dummy data for line chart
  const trendData = [
    { time: '9 AM', congestion: 20 },
    { time: '10 AM', congestion: 35 },
    { time: '11 AM', congestion: 50 },
    { time: '12 PM', congestion: 65 },
    { time: '1 PM', congestion: 55 },
    { time: '2 PM', congestion: 40 },
  ];

  // Bar chart data from signals
  const barData = signals.map(sig => ({ name: sig.name, congestion: sig.congestion }));

  return (
    <div className="charts">
      <h2>Analytics</h2>
      <div className="chart-container">
        <h3>Congestion Trend</h3>
        <LineChart width={300} height={200} data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="congestion" stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="chart-container">
        <h3>Top Busiest Junctions</h3>
        <BarChart width={300} height={200} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="congestion" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;
