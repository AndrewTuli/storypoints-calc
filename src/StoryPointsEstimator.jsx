import React, { useState } from 'react';
import './StoryPointsEstimator.css';

const DOMAIN_LEARNING_OPTIONS = [
  { value: 1, label: 'Familiar Domain (Minimal Learning) (1)' },
  { value: 3, label: 'Moderate Complexity (Requires Research) (3)' },
  { value: 8, label: 'High Complexity (Deep Dive Needed) (8)' },
  { value: 13, label: 'Completely New Domain (Fundamental Research) (13)' }
];

const TECHNICAL_COMPLEXITY_OPTIONS = [
  { value: 2, label: 'Simple Implementation (2)' },
  { value: 5, label: 'Moderate Technical Complexity (5)' },
  { value: 8, label: 'High Technical Challenge (8)' }
];

const UNCERTAINTY_OPTIONS = [
  { value: 1, label: 'Clearly Defined Requirements (1)' },
  { value: 3, label: 'Some Uncertainty (3)' },
  { value: 8, label: 'High Uncertainty (8)' }
];

const closestFibonacci = (num) => {
  const fib = [1, 2, 3, 5, 8, 13, 21, 34];
  return fib.reduce((prev, curr) => (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev));
};

const StoryPointsEstimator = () => {
  const [domain, setDomain] = useState(1);
  const [technical, setTechnical] = useState(2);
  const [uncertainty, setUncertainty] = useState(1);

  const totalSP = closestFibonacci(domain * 0.4 + technical * 0.4 + uncertainty * 0.2);

  return (
    <div className="sp-container">
      <h2>Story Points Estimator</h2>

      <div className="form-group">
        <label>Domain Learning (weight 0.4):</label>
        <select value={domain} onChange={(e) => setDomain(Number(e.target.value))}>
          {DOMAIN_LEARNING_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Technical Complexity  (weight 0.4):</label>
        <select value={technical} onChange={(e) => setTechnical(Number(e.target.value))}>
          {TECHNICAL_COMPLEXITY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Uncertainty  (weight 0.2):</label>
        <select value={uncertainty} onChange={(e) => setUncertainty(Number(e.target.value))}>
          {UNCERTAINTY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="sp-result">
        Story Points: <strong>{totalSP}</strong>
      </div>
    </div>
  );
};

export default StoryPointsEstimator;
