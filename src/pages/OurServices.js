import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurServices.css";
import studentImage from "../assets/student3.png";

export default function OurServices() {
  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header text-center">
        <h1>Our Services</h1>
        <p>Helping you improve your game with personalized and group training</p>
      </section>

      {/* 1-on-1 Classes */}
      <section className="service-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 service-text">
            <h2>1-on-1 Classes</h2>
            <p>
              Get personalized coaching tailored to your skill level and goals. 
              Our expert coaches provide focused attention to help you improve 
              faster with structured lessons and analysis of your games.
            </p>
            <ul>
              <li>Personalized lesson plans</li>
              <li>Game analysis & strategy improvement</li>
              <li>Flexible timing</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src={studentImage}
              alt="1-on-1 Coaching"
              className="img-fluid rounded shadow service-img"
            />
          </div>
        </div>
      </section>

      {/* Group Classes */}
      <section className="service-section container py-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6 service-text">
            <h2>Group Classes</h2>
            <p>
              Learn together in an interactive and competitive environment. 
              Group classes allow students to challenge each other, improve 
              their skills, and develop teamwork while having fun.
            </p>
            <ul>
              <li>Engaging group activities</li>
              <li>Peer-to-peer learning</li>
              <li>Affordable pricing</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945"
              alt="Group Classes"
              className="img-fluid rounded shadow service-img"
            />
          </div>
        </div>
      </section>

      {/* Book a Demo */}
      <section className="book-demo text-center py-5">
        <h2>Book Your Free Demo Class Today!</h2>
        <p>
          Experience our teaching style and see how we can help you achieve 
          your chess goals.
        </p>
        <a href="/book-demo" className="btn btn-success btn-lg shadow">
          Book a Demo
        </a>
      </section>
    </div>
  );
}
