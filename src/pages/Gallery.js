import React, { useEffect } from "react";
import AOS from "aos";
import "./Gallery.css";
import student1 from "../assets/student1.png";
import student2 from "../assets/student2.png";
import student3 from "../assets/student3.png";
import student4 from "../assets/student4.png";
import student5 from "../assets/student5.png";
import student6 from "../assets/student6.png";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const happyStudents = [
    { img: student1, name: "John Doe" },
    { img: student2, name: "Jane Smith" },
    { img: student3, name: "Sam Wilson" },
  ];

  const achievers = [
    { img: student4, name: "Priya Sharma", award: "National Chess Champion" },
    { img: student5, name: "Rahul Verma", award: "Math Olympiad Gold" },
    { img: student6, name: "Ananya Das", award: "Science Fair Winner" },
  ];

  return (
    <div className="gallery-page">
      {/* Happy Students Section */}
      <section className="gallery-section">
        <h2 className="section-title" data-aos="fade-up">Our Happy Students</h2>
        <div className="row">
          {happyStudents.map((student, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="zoom-in">
              <div className="gallery-card">
                <img src={student.img} alt={student.name} />
                <h5>{student.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievers Section */}
      <section className="gallery-section achievers">
        <h2 className="section-title" data-aos="fade-up">Our Achievers</h2>
        <div className="row">
          {achievers.map((achiever, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="flip-left">
              <div className="gallery-card achiever-card">
                <img src={achiever.img} alt={achiever.name} />
                <h5>{achiever.name}</h5>
                <p>{achiever.award}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Demo CTA */}
      <section className="book-demo-cta" data-aos="fade-up">
        <h3>Book a Free Demo Class Today!</h3>
        <p>Experience our teaching style and see the difference yourself.</p>
        <button className="btn btn-success btn-lg">Book Now</button>
      </section>
    </div>
  );
};

export default Gallery;
