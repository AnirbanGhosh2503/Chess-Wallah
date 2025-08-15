import React from 'react';
import './CommunitySection.css';
import chessImage from '../assets/chess-kids.jpg';
import peerIcon from '../assets/peer-learning.png';
import friendshipIcon from '../assets/friendship.png';
import tournamentIcon from '../assets/tournament.png';

const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="image-wrapper">
              <img src={chessImage} alt="Kids playing chess" className="img-fluid rounded" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-md-6">
            <h2 className="title mb-4">
              Introduce Your Kid To The Global Community Of <br />
              <strong>Chess-Playing Kids</strong>
            </h2>

            <div className="points">
              <div className="point mb-4 d-flex align-items-start">
                <div className="icon-background">
                  <img src={peerIcon} alt="Peer Learning" className="icon me-3" />
                </div>
                <p>
                  <strong>Peer Learning</strong> During <span className="highlight">Weekly Community Sessions</span>.
                </p>
              </div>
              <div className="point mb-4 d-flex align-items-start">
                <div className="icon-background">
                  <img src={friendshipIcon} alt="Friendships" className="icon me-3" />
                </div>
                <p>
                  Interact And <span className="highlight">Develop Friendships</span> With Kids From Different Nationalities.
                </p>
              </div>
              <div className="point d-flex align-items-start">
                <div className="icon-background">
                  <img src={tournamentIcon} alt="Tournaments" className="icon me-3" />
                </div>
                <p>
                  Develop A Competitive Spirit With Our <span className="highlight">Weekly Practice Tournaments</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;