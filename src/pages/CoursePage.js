import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CoursePage.css";
import FreeDemoModal from "../components/FreeDemoModal"; // Corrected path

export default function CoursePage() {
  const { level } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false); // Added modal state

  const beginnerCurriculum = [
    "Class 1 - Introduction and Fundamentals of chess | Homework - Points remember",
    "Class 2 - Every Piece's Movement (Queen, Rook, Bishop) | Homework - Practice moving the pieces (link will be shared)",
    "Class 3 - Knight Movement and Pawn Movement | Homework - (link will be shared)",
    "Class 4 - Check in one and Out of Check | Homework - (link will be shared)",
    "Class 5 - Check and mate (Mate in one Basic) | Homework - (link will be shared)",
    "Class 6 - Final Revision of all previous topics with puzzles",
    "Class 7 - Castling theory with puzzles practice | Homework - Theory will be given to learn and Practice link",
    "Class 8 - Short revision of castling then En-passant theory | Homework - Theory will be given to learn and revise",
    "Class 9 - Piece value and Check in two | Homework - practice link",
    "Class 10 - Play Introduction (Centre control, Pieces develop theory) | Homework - practice link",
    "Class 11 - King's Pawn opening (Basic 10 Move opening theory)",
    "Class 12 - King's pawn Opening revision Test (11th class ka test)",
    "Class 13 - Double Attack | Homework - practice link",
    "Class 14 - Check Mate With Double Rook | Homework - practice link",
    "Class 15 - Final revision of all previous topics with puzzles test",
    "Class 16 - Game Analysis",
    "Class 17 - The Pin | Homework - practice link",
    "Class 18 - The fork | Homework - practice link",
    "Class 19 - Game Analysis | Homework - practice link",
    "Class 20 - Under Promotion",
    "Class 21 - Double knight opening",
    "Class 22 - Double knight opening revision practice | Homework - practice link with theory revision",
    "Class 23 - Queen check mate | Homework - Practice link",
    "Class 24 - Middle game basic strategy planning (Attack and defence)"
  ];

  const intermediateCurriculum = [
    "Class 1- Introduction and Fundamentals  of chess | Homework - Points remember",
    "Class 2 - Every Pieces Movement ( Queen , Rook , Bishop) , | Homework - Practice moving the pieces (link will be shared)",
    "Class 3 - Knight Movement and Pawn Movement | Homework - (link will be shared)",
    "Class 4 - Check in one and Out of Check | Homework - (link will be shared)",
    "Class 5 - Check and mate ( Mate in one Basic ) | Homework - (link will be shared)",
    "Class 6 - Final Revision of all previous topics with puzzles",
    "Class 7 - Castling theory with puzzles practice | Home work - Theory will be given to learn and Practice link",
    "Class 8 - Short revision of castling then En-passant theory | Home work - Theory will be given to learn and revise",
    "Class 9 - Piece value and Check in two | Homework - practice link",
    "Class 10 - Play Introduction ( Centre control, Pieces develop theory ) | Homework - practice link",
    "Class 11 - King's Pawn opening ( Basic 10 Move opening theory)",
    "Class 12 - King's pawn Opening revision Test ( 11th class ka test )",
    "Class 13 - Double Attack | Home work - practice link",
    "Class 14 - Check Mate With Double Rook | Home work - practice link",
    "Class 15 - Final revision of all previous topics with puzzles test",
    "Class 16 - game Analysis",
    "Class 17 - The Pin | Home work - practice link",
    "Class 18 - The fork | Homework - practice link",
    "Class 19 - Game Analysis | Homework - practice link",
    "Class 20 - Under Promotion",
    "Class 21 - Double knight opening",
    "Class 22 - double knight opening revision practice | Home work - practice link with theory revision",
    "Class 23 - Queen check mate | Homework - Practice link",
    "Class 24 -  middle game basic strategy planning ( Attack and defence )"
  ];

  const allCourses = {
    beginner: {
      title: "Beginner's Chess Bootcamp",
      description: "Learn chess from scratch — opening principles, tactics, and the joy of the game.",
      price: "₹999",
      curriculum: beginnerCurriculum
    },
    intermediate: {
      title: "Intermediate Strategy Mastery",
      description: "Level up your middlegame with powerful strategies, positional understanding, and planning.",
      price: "₹1999",
      curriculum: intermediateCurriculum
    },
    advanced: {
      title: "Advanced Tournament Prep",
      description: "Designed for competitive players aiming for FIDE-rated tournaments and beyond.",
      price: "₹2999",
      curriculum: beginnerCurriculum // temp same
    }
  };

  const course = allCourses[level] || null;
  if (!course) return <h1 style={{ color: "white", textAlign: "center" }}>Course not found</h1>;

  return (
    <div className="coursepage-container">
      {/* Hero Section */}
      <div className="course-hero">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <div className="course-price-enroll">
          <span className="course-price">{course.price}</span>
          <button
            className="btn btn-success btn-lg mt-5"
            onClick={() => setIsModalOpen(true)} // open modal
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Curriculum */}
      <div className="curriculum-section">
        <h2>Curriculum</h2>
        <div className="curriculum-grid">
          {course.curriculum.map((item, index) => (
            <div className="curriculum-card" key={index}>
              <span className="class-number">{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal Component */}
      <FreeDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        autoShowOnLoad={false}
      />
    </div>
  );
}