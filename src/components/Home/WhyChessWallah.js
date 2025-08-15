import React from "react";
import "./WhyChessWallah.css";
import usChessLogo from "../../assets/us-chess.png";
import tournamentIcon from "../../assets/trophy.png";
import interactiveIcon from "../../assets/interaction.png";
import certificateIcon from "../../assets/certificate.png";
import aiIcon from "../../assets/ai-report.png";
import mentorIcon from "../../assets/mentor.png";
import childImg from "../../assets/chess-kid.jpeg";

const WhyChessWallah = () => {
  const features = [
    { icon: tournamentIcon, title: "Weekly Tournaments & Community Sessions" },
    { icon: interactiveIcon, title: "Personalized Interactive Platform for Chess Playing" },
    { icon: certificateIcon, title: "Certificate Signed By GM Srinath" },
    { icon: aiIcon, title: "AI Analysis & Reports" },
    { icon: usChessLogo, title: "Affiliated with US Chess", isLogo: true },
    { icon: mentorIcon, title: "Guidance and Mentoring for Championships" },
  ];

  return (
    <section className="why-chess-wallah">
      <div className="container">
        <div className="content-wrapper">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title text-black">
              Why <span className="highlight">Chess Wallah</span>?
            </h2>
            <p className="section-subtitle">
              Discover what makes our chess academy the perfect choice for your child's chess journey
            </p>
          </div>

          <div className="main-content">
            {/* Left Side: Features */}
            <div className="features-section">
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-box">
                      <div className="icon-wrapper">
                        <img 
                          src={feature.icon} 
                          alt={feature.title} 
                          className={`feature-icon ${feature.isLogo ? "logo-icon" : ""}`} 
                        />
                      </div>
                      <div className="feature-content">
                        <h3 className="feature-title">{feature.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="image-section">
              <div className="image-wrapper">
                <img 
                  src={childImg} 
                  alt="Kid playing chess - Chess Wallah Academy" 
                  className="chess-kid-img" 
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-text">
                    <h4>Join 10,000+ Happy Students</h4>
                    <p>Start your chess journey today!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChessWallah;
