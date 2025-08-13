import React, { useState, useEffect } from "react";
import "./Hero.css";
import CountUp from 'react-countup';
import FreeDemoModal from "./FreeDemoModal"; // make sure path is correct
import heroimg from "../assets/hero.jpg"; // unused import, can be removed if not needed

const words = ["interactive", "productive", "enjoyable", "fun", "educational"];

function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-section d-flex flex-column flex-md-row align-items-center justify-content-between px-4">
        {/* Left Text Section */}
        <div className="text-section col-md-6 mb-4">
          <h1 className="main-heading fw-bold text-white">
            Learn, Play, <span className="text-green">Conquer</span>!
          </h1>
          <p className="sub-heading mt-4 text-white">
            Our Online Chess Classes Are <br />{" "}
            <span className={`text-changing fw-bold ${fade ? "fade-in" : "fade-out"}`}>
              {words[currentWordIndex]}
            </span>{" "}
            for kids.
          </p>
          <button
            className="btn btn-success btn-lg mt-5"
            onClick={() => setIsModalOpen(true)} // open modal
          >
            Book Free Demo
          </button>

          {/* Dynamic Stats Section */}
          <div className="stats d-flex flex-wrap gap-5 mt-5 text-white">
            <div>
              <h3 className="text-green fw-bold">
                <CountUp end={10000} duration={3} separator="," />+
              </h3>
              <p>Parents</p>
            </div>
            <div>
              <h3 className="text-green fw-bold">
                <CountUp end={50} duration={3} />+
              </h3>
              <p>Countries</p>
            </div>
            <div>
              <h3 className="text-green fw-bold">
                <CountUp end={400} duration={3} />+
              </h3>
              <p>FIDE Rated Coaches</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="image-section col-md-6 position-relative text-center mt-5 mt-md-0">
          <div className="img-wrapper position-relative">
            <img
              src={heroimg}
              alt="GM Srinath"
              className="img-fluid rounded-circle shadow-lg big-image"
            />
            <div className="caption-box-inside">
              <strong style={{ color: "#000000" }}>Grandmaster Srinath Narayanan</strong>
              <br />
              Captain Of The Gold-Winning Indian Chess Olympiad Team
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <FreeDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        autoShowOnLoad={false} // prevent showing on page load
      />
    </>
  );
}

export default Hero;
