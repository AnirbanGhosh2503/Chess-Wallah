import React from "react";
import "./SrinathVideo.css";

function SrinathVideo() {
  return (
    <section className="srinath-section py-5">
      <div className="container d-flex justify-content-center">
        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/a3cCNBja8vY?si=rzwUkvNxO59x4qzS"
              title="Why I Joined Chessbrainz"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SrinathVideo;
