import React from 'react';
import chessImage from '../assets/chess-kids.jpg';
import peerIcon from '../assets/peer-learning.png';
import friendshipIcon from '../assets/friendship.png';
import tournamentIcon from '../assets/tournament.png';

const CommunitySection = () => {
  return (
    <section className="community-section">
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .community-section {
          background-color: #F8F8F8;
          color: #333;
          padding: 60px 0;
          width: 100vw;
          margin: 0;
          overflow-x: hidden;
          position: relative;
        }

        .community-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #B87333, #D4A574, #B87333);
        }

        .community-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #B87333, #D4A574, #B87333);
        }

        .container-fluid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .row {
          display: flex;
          align-items: center;
          gap: 40px;
          margin: 0;
        }

        .col-md-6 {
          flex: 1;
          min-width: 0;
        }

        .image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
        }

        .image-wrapper img {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 20px;
          border: 4px solid #B87333;
          box-shadow: 0 8px 25px rgba(184, 115, 51, 0.3);
          object-fit: cover;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-wrapper img:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 35px rgba(184, 115, 51, 0.5);
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 2rem;
          line-height: 1.3;
        }

        .title strong {
          color: #B87333;
        }

        .points {
          margin-top: 30px;
        }

        .point {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: #555;
          gap: 1rem;
        }

        .point:last-child {
          margin-bottom: 0;
        }

        .point strong {
          color: #333;
        }

        .highlight {
          color: #63B04C !important;
          font-weight: bold !important;
          text-decoration: none !important;
          text-decoration-line: none !important;
          text-decoration-style: none !important;
          text-decoration-color: transparent !important;
          border: none !important;
          border-bottom: none !important;
          border-top: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

        .point-text span {
          text-decoration: none !important;
          text-decoration-line: none !important;
          border: none !important;
          border-bottom: none !important;
          outline: none !important;
        }

        .point-text * {
          text-decoration: none !important;
          text-decoration-line: none !important;
          border: none !important;
          border-bottom: none !important;
          outline: none !important;
        }

        /* Reset all possible underline sources */
        .community-section span,
        .community-section .highlight,
        .community-section .point-text span {
          text-decoration: none !important;
          text-decoration-line: none !important;
          text-decoration-style: none !important;
          text-decoration-color: transparent !important;
          text-decoration-thickness: 0 !important;
          text-underline-offset: 0 !important;
          border: 0 !important;
          border-bottom: 0 !important;
          outline: 0 !important;
          box-shadow: none !important;
        }

        .icon-background {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #B87333, #D4A574);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(184, 115, 51, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .point:hover .icon-background {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 20px rgba(184, 115, 51, 0.4);
        }

        .icon {
          width: 30px;
          height: 30px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .point-text {
          flex: 1;
          margin: 0;
          line-height: 1.5;
          padding-top: 0.25rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .community-section {
            padding: 40px 0;
          }

          .container-fluid {
            padding: 0 15px;
          }

          .row {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }

          .title {
            font-size: 1.6rem;
            margin-bottom: 1.5rem;
          }

          .image-wrapper img {
            max-width: 400px;
            border-width: 3px;
          }

          .points {
            margin-top: 20px;
            text-align: left;
          }

          .point {
            margin-bottom: 1.5rem;
            gap: 0.8rem;
          }

          .icon-background {
            width: 50px;
            height: 50px;
          }

          .icon {
            width: 24px;
            height: 24px;
          }

          .point-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .community-section {
            padding: 30px 0;
          }

          .title {
            font-size: 1.4rem;
          }

          .image-wrapper img {
            max-width: 350px;
            border-radius: 15px;
          }

          .icon-background {
            width: 45px;
            height: 45px;
          }

          .icon {
            width: 22px;
            height: 22px;
          }

          .point-text {
            font-size: 0.95rem;
          }

          .point {
            margin-bottom: 1.2rem;
            gap: 0.6rem;
          }
        }
      `}</style>

      <div className="container-fluid">
        <div className="row">
          {/* Left: Image */}
          <div className="col-md-6">
            <div className="image-wrapper">
              <img 
                src={chessImage} 
                alt="Kids playing chess" 
                className="img-fluid rounded" 
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-md-6">
            <h2 className="title">
              Introduce Your Kid To The Global Community Of <br />
              <strong>Chess-Playing Kids</strong>
            </h2>

            <div className="points">
              <div className="point">
                <div className="icon-background">
                  <img src={peerIcon} alt="Peer Learning" className="icon" />
                </div>
                <p className="point-text">
                  <strong>Peer Learning</strong> During <span className="highlight">Weekly Community Sessions</span>.
                </p>
              </div>

              <div className="point">
                <div className="icon-background">
                  <img src={friendshipIcon} alt="Friendships" className="icon" />
                </div>
                <p className="point-text">
                  Interact And <span className="highlight">Develop Friendships</span> With Kids From Different Nationalities.
                </p>
              </div>

              <div className="point">
                <div className="icon-background">
                  <img src={tournamentIcon} alt="Tournaments" className="icon" />
                </div>
                <p className="point-text">
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