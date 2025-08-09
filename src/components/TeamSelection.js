import React from 'react';
import './TeamSelection.css';
import communityImage from './Home/community.png' // replace with your image path

const TeamSelection = () => {
  return (
    <section className="community-section">
      <div className="container">
        <div className="row">
          <div className="image-wrapper">
            <img src={communityImage} alt="Chess Wallah Community" />
          </div>
          <div className="content">
            <h2 className="title">Join the Chess Wallah Community</h2>
            <div className="points">
              <p className="point">
                <strong>✓</strong> Engage with <strong>fellow chess lovers</strong>.
              </p>
              <p className="point">
                <strong>✓</strong> Daily puzzles and tournaments.
              </p>
              <p className="point">
                <strong>✓</strong> Learn and grow together.
              </p>
              <p className="highlight">
                Be part of something bigger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSelection;
