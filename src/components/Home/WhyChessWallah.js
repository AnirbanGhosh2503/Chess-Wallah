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
    { icon: usChessLogo, title: "Affiliated with", isLogo: true },
    { icon: mentorIcon, title: "Guidance and Mentoring for Championships" },
  ];

  return (
    <section className="why-chess-wallah container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Side: Features */}
        <div className="col-lg-7">
          <h2 className="section-title mb-4">Why <span className="highlight">Chess Wallah</span>?</h2>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6">
                <div className="feature-box d-flex align-items-center gap-3">
                  <img src={feature.icon} alt="icon" className={`feature-icon ${feature.isLogo ? "logo-icon" : ""}`} />
                  <p className="mb-0">{feature.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-lg-5 text-center mt-4 mt-lg-0">
        <img src={childImg} alt="Kid playing chess" className="chess-kid-img" />
        </div>
      </div>
    </section>
  );
};

export default WhyChessWallah;
