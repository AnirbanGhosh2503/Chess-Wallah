import React from "react";
import "./AboutUs.css";
import team1 from "../assets/student2.png";
import team2 from "../assets/student2.png";
import team3 from "../assets/student2.png";
import srinath from "../assets/srinath.png";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero text-center text-white d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Empowering students, shaping futures.</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2 className="section-title">Our Mission</h2>
            <p>
              We believe in providing quality education that inspires and empowers students to achieve their dreams.  
              Our personalized teaching methods, experienced mentors, and engaging learning environment ensure  
              every student reaches their fullest potential.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={srinath}
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section py-5 text-center bg-light">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="mb-5">Passionate educators and professionals dedicated to student success.</p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="team-card shadow-sm">
                <img src={team1} alt="Team Member" className="img-fluid rounded-circle mb-3" />
                <h5>John Doe</h5>
                <p className="text-muted">Founder & Head Coach</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-card shadow-sm">
                <img src={team2} alt="Team Member" className="img-fluid rounded-circle mb-3" />
                <h5>Jane Smith</h5>
                <p className="text-muted">Academic Coordinator</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-card shadow-sm">
                <img src={team3} alt="Team Member" className="img-fluid rounded-circle mb-3" />
                <h5>Alex Johnson</h5>
                <p className="text-muted">Lead Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Demo CTA */}
      <section className="cta-section text-center py-5">
        <h2 className="mb-3">Ready to Begin Your Journey?</h2>
        <p className="mb-4">Book a free demo class today and experience the difference!</p>
        <a href="/book-demo" className="btn btn-success btn-lg">
          Book a Demo
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
