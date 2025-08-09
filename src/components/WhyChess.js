import React, { useEffect, useState } from 'react';
import {
  FiEye,
  FiEdit3,
  FiBookOpen,
  FiDatabase,
  FiActivity,
  FiUserCheck,
  FiTarget
} from 'react-icons/fi';

import './WhyChess.css';

const benefits = [
  { icon: <FiEye />, text: 'Develops Perspective' },
  { icon: <FiEdit3 />, text: 'Boosts Planning Skills' },
  { icon: <FiBookOpen />, text: 'Improves Academic Grades' },
  { icon: <FiDatabase />, text: 'Improves Memory' },
  { icon: <FiActivity />, text: 'Elevates Creativity' },
  { icon: <FiUserCheck />, text: 'Increases Self-Awareness' },
  { icon: <FiTarget />, text: 'Deepens Focus' }
];

const WhyChess = () => {
  const [animateBoard, setAnimateBoard] = useState(false);

  useEffect(() => {
    setAnimateBoard(true);
  }, []);

  return (
    <section className="why-chess-container">
      <h2 className="why-chess-title">Why Chess For Kids</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>
            <p>{benefit.text}</p>
          </div>
        ))}
      </div>
      <img
        src="/reels/chessboard.png"
        alt="Chess Board"
        className={`chessboard-img ${animateBoard ? 'zoom-in' : ''}`}
      />
    </section>
  );
};

export default WhyChess;
