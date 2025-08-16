import React, { useState } from 'react';

// FreeDemoModal component from your existing code
const FreeDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button" aria-label="Close">
          ×
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
          <button type="button" className="modal-submit-button">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      id: 'beginner',
      title: 'Beginner',
      iconUrl: '/assets/courses/beginner.png',
      features: [
        '48 Training Sessions',
        '12 Tactical Puzzle Sessions', 
        '12 Online Tournaments',
        'Study Material Provided',
        'Feedback After Every Class',
        'Performance Tracking'
      ],
      description: 'Learn piece movement, checkmate basics, castling and how to play complete games.',
      level: 'beginner'
    },
    {
      id: 'intermediate',
      title: 'Intermediate', 
      iconUrl: '/assets/courses/intermediate.png',
      features: [
        '48 Training Sessions',
        '24 Tactical Puzzle Sessions',
        '24 Online Tournaments', 
        'Detailed Materials',
        'Feedback + Game Analysis',
        'Performance Reports'
      ],
      description: 'Improve strategy, openings, and prepare for national tournaments and FIDE ratings.',
      level: 'intermediate'
    },
    {
      id: 'advanced',
      title: 'Advanced',
      iconUrl: '/assets/courses/advanced.png', 
      features: [
        '48 Training Sessions',
        '24 Advanced Puzzle Sessions',
        '24 Rated Tournaments',
        'Elite Study Materials', 
        'Mentoring for Championships',
        'FIDE Performance Analysis'
      ],
      description: 'Compete at the highest level with prep for international championships and analysis.',
      level: 'advanced'
    }
  ];

  const handleExploreMore = (level) => {
    // This will open the modal with the detailed course page
    setIsModalOpen(true);
  };

  return (
    <>
      <style>
        {`
          .courses-section {
            background-color: #F8F8F8;
            color: #333;
            position: relative;
            padding: 4rem 0;
          }

          /* Add subtle warm wood border at top and bottom of section */
          .courses-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #B87333, #D4A574, #B87333);
          }

          .courses-section::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #B87333, #D4A574, #B87333);
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
          }

          .section-title .highlight {
            color: #63B04C;
          }

          .courses-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            justify-items: center;
          }

          .course-card {
            background-color: #fff;
            border: 2px solid #63B04C;
            border-radius: 18px;
            padding: 2rem 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            position: relative;
            width: 100%;
            max-width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .course-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 25px rgba(184, 115, 51, 0.15);
          }

          .course-card:nth-child(2) {
            border-color: #B87333;
          }

          .course-card:nth-child(2):hover {
            box-shadow: 0 8px 25px rgba(184, 115, 51, 0.2);
          }

          /* Centered icon at top */
          .icon-background {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #B87333, #D4A574);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            box-shadow: 0 4px 15px rgba(184, 115, 51, 0.3);
            transition: transform 0.3s ease;
            flex-shrink: 0;
          }

          .course-card:hover .icon-background {
            transform: rotate(5deg) scale(1.05);
          }

          .course-icon-img {
            height: 40px;
            width: 40px;
            object-fit: contain;
            filter: brightness(0) invert(1);
          }

          .course-title {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #333;
          }

          .course-features {
            list-style: none;
            padding: 0;
            margin-bottom: 1.2rem;
            width: 100%;
          }

          .course-features li {
            margin-bottom: 0.4rem;
            position: relative;
            padding-left: 1.2rem;
            font-size: 0.9rem;
            text-align: left;
          }

          .course-features li::before {
            content: "✔ ";
            color: #63B04C;
            position: absolute;
            left: 0;
            font-weight: bold;
          }

          .course-desc {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 1.5rem;
            text-align: center;
            line-height: 1.5;
            flex-grow: 1;
          }

          .btn-explore {
            background: linear-gradient(135deg, #63B04C, #4e8f3f);
            color: white;
            border: 2px solid #B87333;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 50px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            font-size: 0.95rem;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin-top: auto;
          }

          .btn-explore:hover {
            background: linear-gradient(135deg, #B87333, #D4A574);
            color: #000;
            border-color: #63B04C;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(184, 115, 51, 0.4);
          }

          .btn-explore::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.3s ease, height 0.3s ease;
          }

          .btn-explore:hover::before {
            width: 300px;
            height: 300px;
          }

          /* Modal Styles */
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
            font-size: 1.5rem;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
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
            box-sizing: border-box;
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

          /* Responsive Design */
          @media (max-width: 768px) {
            .section-title {
              font-size: 2rem;
              margin-bottom: 2rem;
            }
            
            .course-card {
              padding: 1.5rem 1rem;
              margin-bottom: 1.5rem;
            }
            
            .icon-background {
              width: 60px;
              height: 60px;
              margin-bottom: 1rem;
            }
            
            .course-icon-img {
              height: 32px;
              width: 32px;
            }
            
            .course-title {
              font-size: 1.2rem;
              margin-bottom: 0.8rem;
            }
            
            .course-features li {
              font-size: 0.85rem;
              margin-bottom: 0.3rem;
            }
            
            .course-desc {
              font-size: 0.85rem;
              margin-bottom: 1.2rem;
            }
            
            .btn-explore {
              padding: 10px 20px;
              font-size: 0.9rem;
            }

            .courses-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
          }

          @media (max-width: 576px) {
            .courses-section {
              padding: 2rem 0;
            }
            
            .courses-container {
              padding: 0 0.5rem;
            }
            
            .section-title {
              font-size: 1.8rem;
            }
            
            .course-card {
              padding: 1.2rem 1rem;
            }
            
            .icon-background {
              width: 55px;
              height: 55px;
            }
            
            .course-icon-img {
              height: 28px;
              width: 28px;
            }
            
            .course-title {
              font-size: 1.1rem;
            }
            
            .course-features li {
              font-size: 0.8rem;
            }
            
            .course-desc {
              font-size: 0.8rem;
            }
          }
        `}
      </style>

      <section className="courses-section" id="courses">
        <div className="courses-container">
          <h2 className="section-title text-black">
            Our <span className="highlight">Courses</span>
          </h2>
          
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="icon-background">
                  <img 
                    src={course.iconUrl} 
                    alt={`${course.title} Icon`} 
                    className="course-icon-img" 
                  />
                </div>
                <h3 className="course-title">{course.title}</h3>
                <ul className="course-features">
                  {course.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="course-desc">
                  {course.description}
                </p>
                <button 
                  className="btn-explore"
                  onClick={() => handleExploreMore(course.level)}
                >
                  Explore More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Courses;