import React from "react";
import "./CoursesPage.css";

export default function CoursesPage() {
  const courses = [
    {
      title: "Beginner's Chess Bootcamp",
      description:
        "Learn chess from scratch — opening principles, tactics, and the joy of the game.",
      price: "₹999",
    },
    {
      title: "Intermediate Strategy Mastery",
      description:
        "Level up your middlegame with powerful strategies, positional understanding, and planning.",
      price: "₹1999",
    },
    {
      title: "Advanced Tournament Prep",
      description:
        "Designed for competitive players aiming for FIDE-rated tournaments and beyond.",
      price: "₹2999",
    },
  ];

  return (
    <div className="courses-container">
      <h1 className="courses-title">Our Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <div className="course-footer">
              <span className="course-price">{course.price}</span>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
