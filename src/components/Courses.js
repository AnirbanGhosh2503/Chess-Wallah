import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <section className="courses-section py-5" id="courses">
      <div className="container text-center">
        <h2 className="section-title mb-5 text-black">
          Our <span className="highlight">Courses</span>
        </h2>

        <div className="row g-4 justify-content-center">
          {/* Beginner */}
          <div className="col-md-6 col-lg-4">
            <div className="course-card h-100">
              <div className="icon-background">
                <img src="/assets/courses/beginner.png" alt="Beginner Icon" className="course-icon-img" />
              </div>
              <h3 className="course-title">Beginner</h3>
              <ul className="course-features text-start">
                <li>48 Training Sessions</li>
                <li>12 Tactical Puzzle Sessions</li>
                <li>12 Online Tournaments</li>
                <li>Study Material Provided</li>
                <li>Feedback After Every Class</li>
                <li>Performance Tracking</li>
              </ul>
              <p className="course-desc">
                Learn piece movement, checkmate basics, castling and how to play complete games.
              </p>
              <button className="btn btn-explore">Explore More</button>
            </div>
          </div>

          {/* Intermediate */}
          <div className="col-md-6 col-lg-4">
            <div className="course-card h-100">
              <div className="icon-background">
                <img src="/assets/courses/intermediate.png" alt="Intermediate Icon" className="course-icon-img" />
              </div>
              <h3 className="course-title">Intermediate</h3>
              <ul className="course-features text-start">
                <li>48 Training Sessions</li>
                <li>24 Tactical Puzzle Sessions</li>
                <li>24 Online Tournaments</li>
                <li>Detailed Materials</li>
                <li>Feedback + Game Analysis</li>
                <li>Performance Reports</li>
              </ul>
              <p className="course-desc">
                Improve strategy, openings, and prepare for national tournaments and FIDE ratings.
              </p>
              <button className="btn btn-explore">Explore More</button>
            </div>
          </div>

          {/* Advanced */}
          <div className="col-md-6 col-lg-4">
            <div className="course-card h-100">
              <div className="icon-background">
                <img src="/assets/courses/advanced.png" alt="Advanced Icon" className="course-icon-img" />
              </div>
              <h3 className="course-title">Advanced</h3>
              <ul className="course-features text-start">
                <li>48 Training Sessions</li>
                <li>24 Advanced Puzzle Sessions</li>
                <li>24 Rated Tournaments</li>
                <li>Elite Study Materials</li>
                <li>Mentoring for Championships</li>
                <li>FIDE Performance Analysis</li>
              </ul>
              <p className="course-desc">
                Compete at the highest level with prep for international championships and analysis.
              </p>
              <button className="btn btn-explore">Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;