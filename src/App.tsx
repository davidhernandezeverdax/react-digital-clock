import React, { useState, useEffect } from 'react';
import './style.css';

export const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="real-time-clock-container">
      <div className="clock-display">{time.toLocaleTimeString()}</div>
    </div>
  );
};
