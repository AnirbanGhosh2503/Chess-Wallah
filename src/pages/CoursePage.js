import React, { useState } from "react";
import { BookOpen, Star, Gem, GraduationCap, ArrowRightCircle, Award, Users, MessageSquare, PlayCircle, X } from "lucide-react";

// A simple, responsive modal component
const FreeDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button" aria-label="Close">
          <X size={24} />
        </button>
        <h2 className="modal-title">Book a Free Demo</h2>
        <p className="modal-description">
          Ready to start your chess journey? Fill out the form below to book a free demo class with our certified instructors.
        </p>
        <div className="modal-form">
          <div>
            <label htmlFor="name" className="modal-label">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="modal-input" />
          </div>
          <div>
            <label htmlFor="email" className="modal-label">Email</label>
            <input type="email" id="email" placeholder="you@example.com" className="modal-input" />
          </div>
          <button onClick={onClose} className="modal-submit-button">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [level, setLevel] = useState("beginner"); // State to manage course level

  // Data for the curriculum
  const beginnerCurriculum = [
    "Introduction and Fundamentals of chess",
    "Every Piece's Movement (Queen, Rook, Bishop)",
    "Knight Movement and Pawn Movement",
    "Check in one and Out of Check",
    "Check and mate (Mate in one Basic)",
    "Final Revision of all previous topics with puzzles",
    "Castling theory with puzzles practice",
    "Short revision of castling then En-passant theory",
    "Piece value and Check in two",
    "Play Introduction (Centre control, Pieces develop theory)",
    "King's Pawn opening (Basic 10 Move opening theory)",
    "King's pawn Opening revision Test",
    "Double Attack",
    "Check Mate With Double Rook",
    "Final revision of all previous topics with puzzles test",
    "Game Analysis",
    "The Pin",
    "The fork",
    "Game Analysis",
    "Under Promotion",
    "Double knight opening",
    "Double knight opening revision practice",
    "Queen check mate",
    "Middle game basic strategy planning (Attack and defence)"
  ];

  const intermediateCurriculum = [
    "Advanced Piece Movement Drills",
    "Complex Tactical Motifs: Pin, Fork, Skewer, Discovered Attack",
    "Positional Play: Outposts, Weak Squares, Pawn Structure",
    "Middlegame Strategy and Planning",
    "Key Opening Principles: The Ruy Lopez, Sicilian Defense",
    "Endgame Essentials: King and Pawn, Rook Endgames",
    "Analyzing Grandmaster Games",
    "Psychology of Competitive Chess",
    "Tournament Preparation and Time Management",
    "Intermediate Endgame Drills",
    "Mastering Pawn Endings",
    "Understanding the Initiative",
    "Defensive Techniques",
    "Creating and Converting Advantages",
    "Advanced Tactical Puzzles",
    "Building a Solid Opening Repertoire",
    "Practical Game Analysis",
    "Playing against different styles",
    "Understanding Bishop Pair vs Knight Pair",
    "Advanced Middlegame Concepts",
    "Queen and Rook Endgames",
    "Opposite-Color Bishop Endgames",
    "Building a Thinking Process",
    "Preparation for Intermediate Tournaments",
  ];

  const advancedCurriculum = [
    "Deep Opening Repertoire Study (Modern Theory)",
    "Mastering Complex Endgames (Queen, Bishop vs Knight)",
    "Strategic Sacrifices and Prophylaxis",
    "Calculation and Visualization Techniques",
    "Playing with an Isolated Pawn and Opposite-Colored Bishops",
    "Practical Tournament Game Analysis",
    "Attacking the King in the Center",
    "Hypermodern Openings and Positional Grinding",
    "Preparing for a Specific Opponent",
    "Advanced Endgame Theory",
    "Rook and Pawn Endgames",
    "The Principle of Two Weaknesses",
    "Deep Calculation Drills",
    "Mastering Exchange Sacrifices",
    "Advanced Positional Concepts",
    "Practical Training Games",
    "Using Engines for Analysis",
    "Psychology of Grandmaster Play",
    "Building an Opening Database",
    "Advanced Tactical Combinations",
    "Endgame Tablebase Study",
    "Fortress and Stalemate",
    "Playing with a Material Disadvantage",
    "Tournament Mental Preparation",
  ];

  const allCourses = {
    beginner: {
      title: "Beginner's Chess Bootcamp",
      description: "Learn chess from scratch — opening principles, tactics, and the joy of the game.",
      price: "₹999",
      curriculum: beginnerCurriculum,
    },
    intermediate: {
      title: "Intermediate Strategy Mastery",
      description: "Level up your middlegame with powerful strategies, positional understanding, and planning.",
      price: "₹1999",
      curriculum: intermediateCurriculum,
    },
    advanced: {
      title: "Advanced Tournament Prep",
      description: "Designed for competitive players aiming for FIDE-rated tournaments and beyond.",
      price: "₹2999",
      curriculum: advancedCurriculum,
    },
  };

  const course = allCourses[level];

  // Divide the curriculum into two rows of three columns each
  const getCurriculumRows = (items) => {
    const itemsPerColumn = Math.ceil(items.length / 6);
    const firstRowItems = items.slice(0, itemsPerColumn * 3);
    const secondRowItems = items.slice(itemsPerColumn * 3);

    const firstRowColumns = [
      firstRowItems.slice(0, itemsPerColumn),
      firstRowItems.slice(itemsPerColumn, itemsPerColumn * 2),
      firstRowItems.slice(itemsPerColumn * 2),
    ];
    const secondRowColumns = [
      secondRowItems.slice(0, itemsPerColumn),
      secondRowItems.slice(itemsPerColumn, itemsPerColumn * 2),
      secondRowItems.slice(itemsPerColumn * 2),
    ];

    return [firstRowColumns, secondRowColumns];
  };

  const curriculumRows = getCurriculumRows(course.curriculum);

  // SVG for diamond icon
  const diamondIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="diamond-icon">
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
    </svg>
  );

  return (
    <div className="app-container">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
          
          body, html {
            margin: 0;
            padding: 0;
          }

          .app-container {
            background-color: #f3f4f6;
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #1f2937;
            padding: 2rem 0 3rem 0;
          }

          .container {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .course-selector {
            text-align: center;
            margin-bottom: 2rem;
          }

          .selector-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 1rem;
          }

          .level-selector {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 2rem;
          }

          @media (min-width: 640px) {
            .level-selector {
              gap: 1rem;
            }
          }

          .level-button {
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            border: 2px solid #e5e7eb;
            background-color: #fff;
            color: #4b5563;
          }
          .level-button:hover {
            background-color: #f3f4f6;
            border-color: #d1d5db;
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .level-button.active {
            background-color: #2563eb;
            color: #fff;
            border-color: #2563eb;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          .hero-section {
            background-image: linear-gradient(to bottom right, #3b82f6, #4f46e5);
            color: #fff;
            border-radius: 1.5rem;
            padding: 2rem;
            margin-bottom: 4rem;
            text-align: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transition: all 0.5s;
            transform: scale(1);
          }
          .hero-section:hover {
            transform: scale(1.01);
          }

          @media (min-width: 768px) {
            .hero-section {
              padding: 3rem;
            }
          }

          .hero-title {
            font-size: 2.25rem;
            line-height: 1;
            font-weight: 800;
            margin-bottom: 1rem;
            color: #fff;
          }

          @media (min-width: 768px) {
            .hero-title {
              font-size: 3rem;
            }
          }

          @media (min-width: 1024px) {
            .hero-title {
              font-size: 3.75rem;
            }
          }

          .hero-description {
            font-size: 1.125rem;
            line-height: 1.75rem;
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
            opacity: 0.95;
            color: #fff;
          }

          @media (min-width: 768px) {
            .hero-description {
              font-size: 1.25rem;
              line-height: 1.75rem;
            }
          }

          .enroll-button-container {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }

          @media (min-width: 768px) {
            .enroll-button-container {
              flex-direction: row;
            }
          }

          .price {
            font-size: 2.25rem;
            font-weight: 700;
            color: #fff;
          }

          .enroll-button {
            padding: 1rem 2rem;
            background-color: #fff;
            color: #2563eb;
            font-weight: 700;
            border-radius: 9999px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transition: all 0.3s;
            transform: translateY(0);
            border: none;
            cursor: pointer;
          }
          .enroll-button:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            background-color: #f9fafb;
            transform: translateY(-4px);
          }

          .section-title {
            font-size: 2.25rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            color: #1f2937;
          }

          /* Updated styles for the two-row curriculum layout to be more responsive */
          .curriculum-grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          
          .curriculum-row {
            display: grid;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .curriculum-row {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
          /* End of updated styles */

          .curriculum-card {
            background-color: #fff;
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s;
            border: 1px solid #e5e7eb;
            transform: scale(1);
          }
          .curriculum-card:hover {
            transform: scale(1.02);
          }

          .curriculum-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #2563eb;
          }

          .curriculum-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .curriculum-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            color: #374151;
          }

          .diamond-icon {
            flex-shrink: 0;
            margin-top: 0.25rem;
            color: #3b82f6;
          }
          
          .why-learn-section {
            margin-top: 4rem;
          }

          .why-learn-grid {
            display: grid;
            gap: 2rem;
          }
          @media (min-width: 768px) {
            .why-learn-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }

          .feature-card {
            background-color: #fff;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            text-align: center;
            border: 1px solid #e5e7eb;
            transition: transform 0.3s;
            transform: scale(1);
          }
          .feature-card:hover {
            transform: scale(1.02);
          }

          .feature-icon {
            color: #2563eb;
            margin-bottom: 1rem;
            display: flex;
            justify-content: center;
          }

          .feature-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1f2937;
          }

          .feature-description {
            color: #4b5563;
          }

          .testimonials-section {
            margin-top: 4rem;
          }

          .testimonials-grid {
            display: grid;
            gap: 2rem;
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }

          @media (min-width: 768px) {
            .testimonials-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          .testimonial-card {
            background-color: #fff;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border: 1px solid #e5e7eb;
            transition: transform 0.3s;
            transform: scale(1);
          }
          .testimonial-card:hover {
            transform: scale(1.02);
          }

          .testimonial-text {
            font-style: italic;
            color: #374151;
            margin-bottom: 1rem;
          }

          .testimonial-author {
            font-weight: 600;
            color: #2563eb;
            text-align: right;
          }

          /* Modal CSS */
          .modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
            animation: fadeIn 0.3s ease-out forwards;
          }

          .modal-content {
            background-color: #fff;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            max-width: 32rem;
            width: 91.666667%;
            transform: scale(1);
            transition: all 0.3s;
            animation: slideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            position: relative;
          }

          .modal-close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: #6b7280;
            cursor: pointer;
            border: none;
            background: none;
            transition: transform 0.3s;
          }
          .modal-close-button:hover {
            color: #1f2937;
            transform: rotate(90deg);
          }

          .modal-title {
            font-size: 1.875rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 0.5rem;
          }

          .modal-description {
            color: #4b5563;
            margin-bottom: 1.5rem;
          }

          .modal-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .modal-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            margin-bottom: 0.25rem;
          }

          .modal-input {
            width: 100%;
            padding: 0.5rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .modal-input:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
            border-color: #3b82f6;
            box-shadow: 0 0 0 1px #3b82f6;
          }

          .modal-submit-button {
            width: 100%;
            padding: 0.75rem 0;
            background-color: #2563eb;
            color: #fff;
            font-weight: 600;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: background-color 0.2s;
            border: none;
            cursor: pointer;
          }
          .modal-submit-button:hover {
            background-color: #1d4ed8;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px) scale(0.9); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
        `}
      </style>

      <div className="container">
        {/* Course Selection */}
        <div className="course-selector">
          <h1 className="selector-title">Choose Your Chess Journey</h1>
          <div className="level-selector">
            <button
              onClick={() => setLevel("beginner")}
              className={`level-button ${level === "beginner" ? "active" : ""}`}
            >
              <GraduationCap size={20} /> Beginner
            </button>
            <button
              onClick={() => setLevel("intermediate")}
              className={`level-button ${level === "intermediate" ? "active" : ""}`}
            >
              <Star size={20} /> Intermediate
            </button>
            <button
              onClick={() => setLevel("advanced")}
              className={`level-button ${level === "advanced" ? "active" : ""}`}
            >
              <Gem size={20} /> Advanced
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">{course.title}</h1>
          <p className="hero-description">{course.description}</p>
          <div className="enroll-button-container">
            <span className="price">{course.price}</span>
            <button onClick={() => setIsModalOpen(true)} className="enroll-button">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Curriculum Section with Grid Layout */}
        <div className="why-learn-section">
          <h2 className="section-title">Course Curriculum</h2>
          <div className="curriculum-grid">
            {curriculumRows.map((row, rowIndex) => (
              <div key={rowIndex} className="curriculum-row">
                {row.map((column, colIndex) => (
                  <div key={colIndex} className="curriculum-card">
                    <h3>
                      {`Month ${rowIndex * 3 + colIndex + 1}`}
                    </h3>
                    <ul className="curriculum-list">
                      {column.map((item, itemIndex) => (
                        <li key={itemIndex} className="curriculum-item">
                          <div className="diamond-icon-container">{diamondIcon}</div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Why Learn with Us Section */}
        <div className="why-learn-section">
          <h2 className="section-title">Why Learn with Us</h2>
          <div className="why-learn-grid">
            <div className="feature-card">
              <div className="feature-icon"><Award size={64} /></div>
              <h3 className="feature-title">Expert Instructors</h3>
              <p className="feature-description">Learn from FIDE-certified coaches with years of experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Users size={64} /></div>
              <h3 className="feature-title">Community Driven</h3>
              <p className="feature-description">Join a vibrant community of passionate chess players and learners.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><MessageSquare size={64} /></div>
              <h3 className="feature-title">Personalized Feedback</h3>
              <p className="feature-description">Get one-on-one game analysis and tailored advice to improve fast.</p>
            </div>
          </div>
        </div>

        {/* What Our Students Say Section */}
        <div className="testimonials-section">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"The classes are well-structured and the instructors are incredibly patient. I went from knowing nothing to winning local tournaments!"</p>
              <p className="testimonial-author">— Alex J.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"I highly recommend this bootcamp! The curriculum is comprehensive and the puzzles are so much fun. My rating has gone up significantly."</p>
              <p className="testimonial-author">— Priya S.</p>
            </div>
          </div>
        </div>
      </div>

      <FreeDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;