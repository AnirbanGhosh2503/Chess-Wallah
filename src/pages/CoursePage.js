import React, { useState } from "react";
import { BookOpen, Star, Gem, GraduationCap, ArrowRightCircle, Award, Users, MessageSquare, PlayCircle } from "lucide-react";

// A simple, responsive modal component
const FreeDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <h2 className="modal-title">Book a Free Demo</h2>
        <p className="modal-description">
          Ready to start your chess journey? Fill out the form below to book a free demo class with our certified instructors.
        </p>
        <form className="modal-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>
          <button type="submit" className="modal-submit-btn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

// Custom Timeline components
const Timeline = ({ children }) => (
  <div className="timeline-container">
    {children}
  </div>
);

const TimelineItem = ({ title, description, icon }) => (
  <div className="timeline-item">
    <div className="timeline-icon">{icon}</div>
    <div className="timeline-content">
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
);

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
    "Tournament Preparation and Time Management"
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
    "Preparing for a Specific Opponent"
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

  // Icons for the curriculum items
  const curriculumIcons = [
    <BookOpen size={18} />,
    <Gem size={18} />,
    <Star size={18} />,
    <PlayCircle size={18} />,
    <GraduationCap size={18} />,
  ];

  return (
    <div className="course-page-container">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        :root {
          --primary-color: #00ff88;
          --secondary-color: #004d26;
          --bg-color: #111;
          --card-bg: #181818;
          --text-color: #f0f0f0;
          --highlight-text: #00ff88;
          --shadow-light: rgba(0, 255, 136, 0.1);
          --shadow-dark: rgba(0, 255, 136, 0.2);
        }

        .course-page-container {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-color);
          color: var(--text-color);
          min-height: 100vh;
          padding-bottom: 5rem;
          line-height: 1.6;
        }
        
        .header {
          position: sticky;
          top: 0;
          z-index: 10;
          background-color: rgba(24, 24, 24, 0.8);
          backdrop-filter: blur(8px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--primary-color);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .course-selector-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .course-selector-btn:not(.active) {
          background-color: #2c2c2c;
          color: #b0b0b0;
        }
        
        .course-selector-btn:not(.active):hover {
          background-color: #3d3d3d;
          color: white;
          transform: translateY(-2px);
        }

        .course-selector-btn.active {
          background-color: var(--primary-color);
          color: black;
          box-shadow: 0 4px 15px var(--shadow-dark);
          transform: translateY(-2px);
          border: 2px solid var(--primary-color);
        }

        .course-selector-btn.active:hover {
          background-color: var(--primary-color);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .hero-section {
          position: relative;
          margin-top: 2rem;
          overflow: hidden;
          border-radius: 1.5rem;
          padding: 4rem 2rem;
          text-align: center;
          color: black;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('https://placehold.co/1200x800/15803d/ffffff?text=Chess+Pieces') no-repeat center center/cover;
          opacity: 0.1;
          z-index: 1;
        }

        .hero-section > * {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.2;
          color: #0d0d0d;
          text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 700px;
          margin: 1rem auto;
          color: #222;
        }

        .hero-cta {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .course-price {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0d0d0d;
        }

        .enroll-btn {
          position: relative;
          padding: 1rem 2.5rem;
          border-radius: 1rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0d0d0d;
          background: white;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        
        .enroll-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, var(--primary-color), #fff);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .enroll-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        
        .enroll-btn:hover::before {
          opacity: 1;
        }
        
        .enroll-btn-text {
          position: relative;
          z-index: 2;
        }

        .section {
          margin-top: 4rem;
        }
        
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          text-align: center;
          color: var(--primary-color);
          margin-bottom: 3rem;
        }

        /* Timeline */
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background-color: var(--primary-color);
          opacity: 0.3;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          display: flex;
          align-items: flex-start;
        }

        .timeline-icon {
          position: absolute;
          left: -1.75rem;
          top: 0;
          height: 3rem;
          width: 3rem;
          background-color: var(--primary-color);
          color: var(--bg-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          box-shadow: 0 0 10px var(--shadow-dark);
          transition: transform 0.3s ease;
        }
        
        .timeline-item:hover .timeline-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .timeline-content {
          margin-left: 1.5rem;
          padding: 1.5rem;
          background-color: var(--card-bg);
          border-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          border: 1px solid rgba(0, 255, 136, 0.2);
          width: 100%;
        }

        .timeline-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .timeline-description {
          font-size: 1rem;
          color: var(--text-color);
        }

        /* Features Section */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background-color: var(--card-bg);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(0, 255, 136, 0.2);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px var(--shadow-dark);
        }

        .feature-icon {
          color: var(--primary-color);
          font-size: 3rem;
          margin-bottom: 1rem;
          display: inline-block;
          animation: bounce 2s infinite;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--highlight-text);
          margin-bottom: 0.5rem;
        }

        .feature-description {
          color: #ccc;
        }

        /* Testimonials Section */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .testimonial-card {
          background-color: var(--card-bg);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(0, 255, 136, 0.2);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          text-align: center;
        }
        
        .testimonial-text {
          font-style: italic;
          color: #ccc;
          margin-bottom: 1rem;
        }
        
        .testimonial-author {
          font-weight: 600;
          color: var(--highlight-text);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          position: relative;
          width: 90%;
          max-width: 500px;
          background-color: #1a1a1a;
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.1);
          border: 2px solid var(--primary-color);
          animation: slideIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: transparent;
          color: var(--primary-color);
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .modal-close-btn:hover {
          transform: rotate(90deg);
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .modal-description {
          color: #ccc;
          margin-bottom: 1.5rem;
        }

        .modal-form .form-group {
          margin-bottom: 1rem;
        }
        
        .modal-form label {
          display: block;
          font-weight: 600;
          color: #ccc;
          margin-bottom: 0.5rem;
        }
        
        .modal-form input {
          width: 100%;
          padding: 0.75rem;
          background-color: #2c2c2c;
          border: 1px solid var(--primary-color);
          border-radius: 0.5rem;
          color: white;
          outline: none;
          transition: border-color 0.3s ease;
        }
        
        .modal-form input:focus {
          border-color: #fff;
          box-shadow: 0 0 5px var(--shadow-light);
        }
        
        .modal-submit-btn {
          width: 100%;
          padding: 0.75rem;
          background-color: var(--primary-color);
          color: black;
          font-weight: 700;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        
        .modal-submit-btn:hover {
          background-color: #fff;
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateY(-50px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header {
            flex-wrap: wrap;
            padding: 0.5rem 0;
            gap: 0.5rem;
          }

          .hero-section {
            padding: 3rem 1rem;
          }

          .hero-cta {
            flex-direction: column;
            gap: 1rem;
          }

          .course-selector-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .timeline-container {
            padding-left: 1rem;
          }
        }
        `}
      </style>
      
      {/* Course Level Selector */}
      <div className="header">
        <button
          onClick={() => setLevel("beginner")}
          className={`course-selector-btn ${level === "beginner" ? "active" : ""}`}
        >
          <GraduationCap size={20} /> Beginner
        </button>
        <button
          onClick={() => setLevel("intermediate")}
          className={`course-selector-btn ${level === "intermediate" ? "active" : ""}`}
        >
          <Star size={20} /> Intermediate
        </button>
        <button
          onClick={() => setLevel("advanced")}
          className={`course-selector-btn ${level === "advanced" ? "active" : ""}`}
        >
          <Gem size={20} /> Advanced
        </button>
      </div>

      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">{course.title}</h1>
          <p className="hero-description">{course.description}</p>
          <div className="hero-cta">
            <span className="course-price">{course.price}</span>
            <button onClick={() => setIsModalOpen(true)} className="enroll-btn">
              <span className="enroll-btn-text">Enroll Now</span>
            </button>
          </div>
        </div>

        {/* Curriculum Section with Timeline */}
        <div className="section">
          <h2 className="section-title">Course Curriculum</h2>
          <Timeline>
            {course.curriculum.map((item, index) => (
              <TimelineItem
                key={index}
                title={`Class ${index + 1}`}
                description={item}
                icon={curriculumIcons[index % curriculumIcons.length]}
              />
            ))}
          </Timeline>
        </div>

        {/* Why Learn with Us Section */}
        <div className="section">
          <h2 className="section-title">Why Learn with Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Award size={48} /></div>
              <h3 className="feature-title">Expert Instructors</h3>
              <p className="feature-description">Learn from FIDE-certified coaches with years of experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Users size={48} /></div>
              <h3 className="feature-title">Community Driven</h3>
              <p className="feature-description">Join a vibrant community of passionate chess players and learners.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><MessageSquare size={48} /></div>
              <h3 className="feature-title">Personalized Feedback</h3>
              <p className="feature-description">Get one-on-one game analysis and tailored advice to improve fast.</p>
            </div>
          </div>
        </div>

        {/* What Our Students Say Section */}
        <div className="section">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonial-grid">
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
