import React, { useEffect, useState, useRef } from "react";
import { Users, Lightbulb, Award, Star, Zap, Heart, PlayCircle, ArrowRight } from "lucide-react";
import FreeDemoModal from "../components/FreeDemoModal";

const App = () => {
  const [inView, setInView] = useState(false);
  const impactRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define the color palette as a constant object for easy access and consistency
  const colors = {
    darkBg: "#0d1117",
    cardBg: "#161b22",
    primaryAccent: "#58a6ff", // A refined cool blue
    secondaryAccent: "#c471ed", // A rich purple
    text: "#c9d1d9",
    textLight: "#8b949e",
    gradient: "linear-gradient(135deg, #58a6ff, #c471ed)",
    gradientText: "linear-gradient(135deg, #a6c1ee, #c9d1d9)",
  };

  useEffect(() => {
    // This effect handles the animation for the impact numbers
    const handleScroll = () => {
      if (impactRef.current) {
        const rect = impactRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated counter component
  const AnimatedNumber = ({ value, duration = 1500 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = parseInt(value, 10);
        const increment = end / (duration / 16); // ~60fps
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCount(Math.ceil(start));
        }, 16);

        return () => clearInterval(timer);
      }
    }, [value, duration, inView]);

    return <span>{count}</span>;
  };

  return (
    <>
    <div className="app-container">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

          :root {
            --dark-bg: ${colors.darkBg};
            --card-bg: ${colors.cardBg};
            --primary-accent: ${colors.primaryAccent};
            --secondary-accent: ${colors.secondaryAccent};
            --text-color: ${colors.text};
            --text-light: ${colors.textLight};
            --card-border: rgba(255, 255, 255, 0.1);
          }

          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--dark-bg);
            color: var(--text-color);
            overflow-x: hidden;
            line-height: 1.6;
          }

          .app-container {
            min-height: 100vh;
            perspective: 1000px;
          }

          /* General Section Styles */
          .section {
            padding: 8rem 1.5rem;
            max-width: 1300px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          .section-heading {
            font-size: 3.5rem;
            font-weight: 900;
            text-align: center;
            margin-bottom: 0.5rem;
            background: ${colors.gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 10px rgba(88, 166, 255, 0.3);
          }

          .section-subheading {
            font-size: 1.25rem;
            font-weight: 300;
            color: var(--text-light);
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
            margin-bottom: 4rem;
          }

          .section-heading-underline {
            width: 100px;
            height: 5px;
            background: ${colors.gradient};
            margin: 0.5rem auto 0;
            border-radius: 9999px;
            opacity: 0.8;
          }

          /* Animations */
          @keyframes glow-pulse {
            0% { box-shadow: 0 0 5px var(--primary-accent); }
            50% { box-shadow: 0 0 20px var(--primary-accent), 0 0 30px var(--primary-accent); }
            100% { box-shadow: 0 0 5px var(--primary-accent); }
          }
          
          @keyframes fadeInFromTop {
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* Hero Section */
          .hero-section {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            z-index: 1;
            overflow: hidden;
            border-bottom-left-radius: 6rem;
            border-bottom-right-radius: 6rem;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
            background: linear-gradient(135deg, #101520, #0d1117);
            padding: 2rem 1.5rem; /* Add padding for mobile */
          }
          
          .hero-bg-gradient {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 60% 70%, rgba(88, 166, 255, 0.1) 0%, transparent 40%), radial-gradient(circle at 40% 30%, rgba(196, 113, 237, 0.1) 0%, transparent 40%);
            animation: gradient-move 20s ease-in-out infinite;
            z-index: -1;
          }
          
          .hero-content h1 {
            font-size: 4rem;
            font-weight: 900;
            letter-spacing: -2px;
            margin-bottom: 1rem;
            animation: fadeInFromTop 1s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
            background: ${colors.gradientText};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 15px rgba(201, 209, 217, 0.4);
          }

          .hero-content p {
            font-size: 1.5rem;
            font-weight: 300;
            color: var(--text-light);
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.4s;
            opacity: 0;
          }

          .hero-buttons {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.6s;
            opacity: 0;
          }

          .hero-buttons a {
            padding: 1rem 2.5rem;
            font-weight: 700;
            border-radius: 9999px;
            transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            border: 2px solid transparent;
          }
          
          .hero-buttons .primary-btn {
            background: ${colors.gradient};
            color: white;
            box-shadow: 0 10px 20px rgba(88, 166, 255, 0.2);
          }
          
          .hero-buttons .primary-btn:hover {
            transform: scale(1.1) translateY(-5px);
            box-shadow: 0 15px 30px rgba(88, 166, 255, 0.4);
            animation: glow-pulse 2s infinite;
          }
          
          .hero-buttons .secondary-btn {
            background: none;
            color: var(--primary-accent);
            border-color: var(--primary-accent);
            box-shadow: inset 0 0 0 2px var(--primary-accent), 0 5px 15px rgba(88, 166, 255, 0.1);
          }
          
          .hero-buttons .secondary-btn:hover {
            transform: scale(1.1);
            color: white;
            background-color: var(--primary-accent);
            border-color: var(--primary-accent);
            box-shadow: 0 10px 20px rgba(88, 166, 255, 0.3);
          }
          
          /* Mobile-specific styles for the Hero section */
          @media (max-width: 768px) {
            .hero-section {
              padding: 6rem 1.5rem; /* Reduced vertical padding */
              height: auto; /* Allow height to adjust to content */
              min-height: 100vh;
            }
          
            .hero-content h1 {
              font-size: 2.5rem;
              letter-spacing: -1px;
            }
          
            .hero-content p {
              font-size: 1.1rem;
            }
          
            .hero-buttons {
              flex-direction: column; /* Stack buttons vertically */
              gap: 1rem;
              margin-top: 2rem;
            }
          
            .hero-buttons a {
              width: 100%; /* Make buttons full width */
              justify-content: center;
            }
          
            .hero-section {
              border-bottom-left-radius: 3rem;
              border-bottom-right-radius: 3rem;
            }
          }

          /* Values Section */
          .values-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2.5rem;
          }

          @media (min-width: 768px) {
            .values-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .value-card {
            background: var(--card-bg);
            padding: 2.5rem;
            border-radius: 2rem;
            border: 1px solid var(--card-border);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform-style: preserve-3d;
            perspective: 1000px;
          }

          .value-card:hover {
            transform: rotateY(5deg) scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            border-color: var(--primary-accent);
            z-index: 10;
          }
          
          .value-card-icon {
            transform: translateZ(20px); /* 3D effect */
            margin-bottom: 1.5rem;
          }
          
          .value-card h3 {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: ${colors.gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transform: translateZ(10px); /* 3D effect */
          }

          .value-card p {
            color: var(--text-light);
            transform: translateZ(5px); /* 3D effect */
          }

          /* Team Section */
          .team-section {
            padding: 8rem 1.5rem;
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
          }
          
          .team-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 4rem;
            max-width: 1000px;
            margin: 0 auto;
          }

          @media (min-width: 640px) {
            .team-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .team-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .team-card {
            background: var(--card-bg);
            padding: 2.5rem;
            border-radius: 2.5rem;
            border: 1px solid var(--card-border);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
            text-align: center;
            position: relative;
          }

          .team-card:hover {
            transform: translateY(-20px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
            border-color: var(--primary-accent);
          }

          .team-card img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            margin-bottom: 2rem;
            object-fit: cover;
            position: relative;
            z-index: 1;
            filter: grayscale(100%);
            transition: all 0.4s ease;
          }
          
          .team-card:hover img {
            filter: grayscale(0%);
            transform: scale(1.1);
          }

          .profile-ring {
            position: absolute;
            top: 1.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 4px solid;
            z-index: 0;
            transition: all 0.4s ease;
          }

          .team-card:nth-child(1) .profile-ring { border-color: var(--primary-accent); }
          .team-card:nth-child(2) .profile-ring { border-color: var(--secondary-accent); }
          .team-card:nth-child(3) .profile-ring { border-color: var(--primary-accent); }

          .team-card h3 {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--text-color);
          }

          .team-card p {
            color: var(--primary-accent);
            font-weight: 500;
            margin-top: 0.5rem;
            font-size: 1rem;
          }

          /* Impact Section */
          .impact-section {
            background: linear-gradient(145deg, #101520, #0d1117);
            color: white;
            border-top-left-radius: 6rem;
            border-top-right-radius: 6rem;
            box-shadow: inset 0 20px 50px rgba(0, 0, 0, 0.5);
            padding-bottom: 10rem;
          }

          .impact-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .impact-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .impact-card {
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 2rem;
            backdrop-filter: blur(10px);
            transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            text-align: center;
            border: 1px solid var(--card-border);
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .impact-card:hover {
            transform: scale(1.05);
            background: rgba(22, 27, 34, 0.8);
          }
          
          .impact-card h3 {
            font-size: 4rem;
            font-weight: 900;
            color: var(--primary-accent);
            margin-bottom: 0.5rem;
            z-index: 1;
            position: relative;
            text-shadow: 0 0 10px rgba(88, 166, 255, 0.5);
          }
          
          .impact-card p {
            font-size: 1.25rem;
            color: var(--text-light);
            z-index: 1;
            position: relative;
          }

          /* Testimonials Section */
          .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 3rem;
            max-width: 1000px;
            margin: 0 auto;
          }

          @media (min-width: 1024px) {
            .testimonial-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          .testimonial-card {
            background: var(--card-bg);
            padding: 2.5rem;
            border-radius: 2.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--card-border);
            transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
            transform-origin: bottom center;
          }

          .testimonial-card:hover {
            transform: translateY(-20px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
            border-color: var(--secondary-accent);
          }
          
          .quote {
            font-size: 1.25rem;
            font-style: italic;
            color: var(--text-light);
            margin-bottom: 2rem;
            position: relative;
          }
          
          .quote::before {
            content: '"';
            font-family: 'Times New Roman', serif;
            font-size: 5rem;
            position: absolute;
            top: -2rem;
            left: -1rem;
            color: var(--primary-accent);
            opacity: 0.3;
            z-index: 0;
          }

          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
            position: relative;
            z-index: 1;
          }

          .testimonial-author img {
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid;
          }
          
          .testimonial-card:nth-child(1) .testimonial-author img { border-color: var(--primary-accent); }
          .testimonial-card:nth-child(2) .testimonial-author img { border-color: var(--secondary-accent); }

          .testimonial-author h4 {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-color);
          }

          .testimonial-author p {
            font-size: 1rem;
            color: var(--text-light);
          }

          /* CTA Section */
          .cta-section {
            background: ${colors.gradient};
            color: white;
            text-align: center;
            padding: 8rem 1.5rem;
            border-top-left-radius: 6rem;
            border-top-right-radius: 6rem;
            box-shadow: inset 0 20px 50px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
            animation: fadeIn 1.5s ease-out forwards;
          }
          
          .cta-bg-shape {
            position: absolute;
            width: 150%;
            height: 150%;
            background: rgba(255, 255, 255, 0.05);
            transform: rotate(45deg);
            z-index: 0;
            top: -25%;
            left: -25%;
            animation: rotate-slow 20s linear infinite;
          }
          
          .cta-content {
            position: relative;
            z-index: 1;
          }

          .cta-section h2 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          }

          .cta-section p {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 700px;
            margin: 0 auto 3rem;
          }

          .cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            background: white;
            color: var(--dark-bg);
            font-weight: 700;
            padding: 1.25rem 3rem;
            border-radius: 9999px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
            position: relative;
            overflow: hidden;
          }

          .cta-btn:hover {
            transform: scale(1.1) translateY(-5px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          }
            .aboutus-demo-btn {
            background: linear-gradient(135deg, #58a6ff 0%, #c471ed 100%);
            color: #fff;
            font-weight: 800;
            font-size: 1.25rem;
            padding: 1.1rem 3.2rem;
            border: 2px solid #fff;
            border-radius: 9999px;
            box-shadow: 0 4px 24px rgba(255,255,255,0.35), 0 8px 32px rgba(88,166,255,0.18), 0 2px 16px #c471ed33;
            transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
            margin-top: 2.5rem;
            letter-spacing: 1px;
            cursor: pointer;
            outline: none;
            display: inline-block;
            position: relative;
            z-index: 2;
          }
          .aboutus-demo-btn:hover, .aboutus-demo-btn:focus {
            background: linear-gradient(135deg, #3a7bd5 0%, #a86ae4 100%);
            transform: scale(1.06) translateY(-3px);
            box-shadow: 0 0 0 6px rgba(255,255,255,0.18), 0 12px 36px rgba(196,113,237,0.22), 0 4px 24px #58a6ff33;
            color: #fff;
            border-color: #fff;
          }
            @media (max-width: 600px) {
            .section,
            .team-section,
            .impact-section,
            .cta-section {
              padding: 2.5rem 0.5rem !important;
              border-radius: 1.5rem !important;
            }

            .section-heading {
              font-size: 2rem !important;
            }

            .section-subheading {
              font-size: 1rem !important;
              margin-bottom: 2rem !important;
            }

            .values-grid,
            .team-grid,
            .impact-grid,
            .testimonial-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }

            .value-card,
            .team-card,
            .impact-card,
            .testimonial-card {
              padding: 1.2rem !important;
              border-radius: 1.2rem !important;
            }

            .hero-section {
              padding: 3rem 0.5rem !important;
              min-height: 60vh !important;
              border-bottom-left-radius: 1.5rem !important;
              border-bottom-right-radius: 1.5rem !important;
            }

            .hero-content h1 {
              font-size: 1.5rem !important;
              margin-bottom: 0.7rem !important;
            }

            .hero-content p {
              font-size: 1rem !important;
            }

            .hero-buttons {
              flex-direction: column !important;
              gap: 0.7rem !important;
              margin-top: 1.2rem !important;
            }

            .hero-buttons a {
              width: 100% !important;
              justify-content: center !important;
              font-size: 1rem !important;
              padding: 0.8rem 1.2rem !important;
            }

            .cta-section h2 {
              font-size: 1.5rem !important;
            }

            .cta-section p {
              font-size: 1rem !important;
              margin-bottom: 1.5rem !important;
            }

            .aboutus-demo-btn {
              font-size: 1rem !important;
              padding: 0.8rem 1.2rem !important;
              margin-top: 1.2rem !important;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-gradient"></div>
        <div className="hero-content">
          <h1 className="hero-heading">Our Mission is to Empower</h1>
          <p className="hero-subheading">
            Shaping the future of education, one student at a time.
          </p>
          <div className="hero-buttons">
            <a href="#" className="primary-btn">
              <PlayCircle size={20} />
              <span>Watch Our Video</span>
            </a>
            <a href="#our-story" className="secondary-btn">
              <Star size={20} />
              <span>Explore Our Story</span>
            </a>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="our-story" className="section">
        <div className="section-header">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="section-heading-underline"></div>
          <p className="section-subheading">
            These principles guide our every action and commitment to our students and community.
          </p>
        </div>
        <div className="values-grid">
          {/* Value Card 1: Innovation */}
          <div className="value-card">
            <Zap size={48} color={colors.primaryAccent} className="value-card-icon" />
            <h3>Innovation</h3>
            <p>
              We constantly seek new ways to improve learning, using modern tools and creative methods.
            </p>
          </div>
          {/* Value Card 2: Community */}
          <div className="value-card">
            <Heart size={48} color={colors.secondaryAccent} className="value-card-icon" />
            <h3>Community</h3>
            <p>
              We believe in building a supportive and inclusive environment where everyone can thrive.
            </p>
          </div>
          {/* Value Card 3: Excellence */}
          <div className="value-card">
            <Award size={48} color={colors.primaryAccent} className="value-card-icon" />
            <h3>Excellence</h3>
            <p>
              We are committed to delivering the highest standards of education and service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section team-section">
        <div className="section-header">
          <h2 className="section-heading">Meet Our Team</h2>
          <div className="section-heading-underline"></div>
          <p className="section-subheading">
            A group of passionate educators and professionals dedicated to student success.
          </p>
        </div>
        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-card">
            <div className="profile-ring"></div>
            <img 
              src="https://placehold.co/150x150/58a6ff/0d1117?text=JD" 
              alt="John Doe" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/58a6ff/0d1117?text=JD"; }}
            />
            <h3>John Doe</h3>
            <p>Founder & Head Coach</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="team-card">
            <div className="profile-ring"></div>
            <img 
              src="https://placehold.co/150x150/c471ed/0d1117?text=JS" 
              alt="Jane Smith" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/c471ed/0d1117?text=JS"; }}
            />
            <h3>Jane Smith</h3>
            <p>Academic Coordinator</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="team-card">
            <div className="profile-ring"></div>
            <img 
              src="https://placehold.co/150x150/58a6ff/0d1117?text=AJ" 
              alt="Alex Johnson" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/58a6ff/0d1117?text=AJ"; }}
            />
            <h3>Alex Johnson</h3>
            <p>Lead Instructor</p>
          </div>
        </div>
      </section>
      
      {/* Our Impact Section: Animated statistics */}
      <section id="impact-section" className="section impact-section" ref={impactRef}>
        <div className="section-header">
          <h2 className="section-heading">Our Impact</h2>
          <div className="section-heading-underline"></div>
          <p className="section-subheading">
            We are proud of the achievements our students and community have made.
          </p>
        </div>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>
              <AnimatedNumber value={2500} />+
            </h3>
            <p>Students Enrolled</p>
          </div>
          <div className="impact-card">
            <h3>
              <AnimatedNumber value={150} />+
            </h3>
            <p>Certified Coaches</p>
          </div>
          <div className="impact-card">
            <h3>
              <AnimatedNumber value={20} />+
            </h3>
            <p>Awards Won</p>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-heading">What Our Students Say</h2>
          <div className="section-heading-underline"></div>
          <p className="section-subheading">
            Inspiring words from the hearts of our learning community.
          </p>
        </div>
        <div className="testimonial-grid">
          {/* Testimonial Card 1 */}
          <div className="testimonial-card">
            <p className="quote">
              "The personalized guidance and supportive community completely transformed my understanding of chess. I'm now confidently competing in tournaments and loving every moment of my progress!"
            </p>
            <div className="testimonial-author">
              <img 
                src="https://placehold.co/64x64/58a6ff/0d1117?text=AJ" 
                alt="Student Alex Johnson" 
              />
              <div>
                <h4>Alex Johnson</h4>
                <p>Tournament Player</p>
              </div>
            </div>
          </div>
          {/* Testimonial Card 2 */}
          <div className="testimonial-card">
            <p className="quote">
              "I highly recommend this program to anyone serious about learning. The instructors are not only experts but also incredibly passionate about teaching. It's a game-changer!"
            </p>
            <div className="testimonial-author">
              <img 
                src="https://placehold.co/64x64/c471ed/0d1117?text=SS" 
                alt="Student Sarah Singh"
              />
              <div>
                <h4>Sarah Singh</h4>
                <p>Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Demo CTA Section */}
      <section className="cta-section">
        <div className="cta-bg-shape"></div>
        <div className="cta-content">
          <h2 className="cta-heading">Ready to Begin Your Journey?</h2>
          <p className="cta-subheading">
            Experience the difference our personalized approach makes.
          </p>
          {/* The button is now a placeholder as the modal component was not provided */}
          <button
            className="aboutus-demo-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Book Free Demo
          </button>
        </div>
      </section>
    </div>
    <FreeDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        autoShowOnLoad={false} // prevent showing on page load
      />
    </>
  );
};

export default App;
