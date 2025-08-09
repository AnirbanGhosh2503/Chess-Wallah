import React from 'react';
import './ReelsSection.css';

const reels = [
  { id: 1, label: 'REEL #1', link: 'https://www.instagram.com/reel/xyz1/' },
  { id: 2, label: 'REEL #2', link: 'https://www.instagram.com/reel/xyz2/' },
  { id: 3, label: 'REEL #3', link: 'https://www.instagram.com/reel/xyz3/' },
  { id: 4, label: 'REEL #4', link: 'https://www.instagram.com/reel/xyz4/' },
  { id: 5, label: 'REEL #5', link: 'https://www.instagram.com/reel/xyz5/' },
  { id: 6, label: 'REEL #6', link: 'https://www.instagram.com/reel/xyz6/' },
];

export default function ReelsSection() {
  return (
    <section className="reels-section">
      <h2 className="reels-title">
            What’s Happening at <span style={{ color: '#00ff88' }}>Chess Wallah</span>
        </h2>
      <div className="reels-underline"></div>
      <div className="reels-grid">
        {reels.slice(0, 4).map(reel => (
          <a className="reel-card" key={reel.id} href={reel.link} target="_blank" rel="noopener noreferrer">
            <img src={`/reels/reel${reel.id}.jpg`} alt={reel.label} className="reel-image" />
            <span className="reel-label">{reel.label}</span>
          </a>
        ))}

        {/* Empty placeholders to center last 2 reels */}
        <div className="reel-placeholder" />
        {reels.slice(4).map(reel => (
          <a className="reel-card" key={reel.id} href={reel.link} target="_blank" rel="noopener noreferrer">
            <img src={`/reels/reel${reel.id}.jpg`} alt={reel.label} className="reel-image" />
            <span className="reel-label">{reel.label}</span>
          </a>
        ))}
        <div className="reel-placeholder" />
      </div>
    </section>
  );
}
