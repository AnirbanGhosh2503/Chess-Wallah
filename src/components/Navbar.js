import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary

// Mock Contact component for demo
const Contact = ({ onClose }) => (
  <div className="contact-modal-content">
    <h3 style={{ color: '#1a0033', marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '700' }}>Get In Touch</h3>
    <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
      Let's discuss how we can help you achieve your goals with our premium courses and services.
    </p>
    <form>
      <div style={{ marginBottom: '1.5rem' }}>
        <input 
          type="text" 
          placeholder="Your Name" 
          style={{ 
            width: '100%', 
            padding: '1rem 1.25rem', 
            border: '2px solid #e1e5e9', 
            borderRadius: '12px',
            fontSize: '1rem',
            background: '#fafbfc',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit'
          }} 
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.background = '#ffffff';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e1e5e9';
            e.target.style.background = '#fafbfc';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <input 
          type="email" 
          placeholder="Your Email" 
          style={{ 
            width: '100%', 
            padding: '1rem 1.25rem', 
            border: '2px solid #e1e5e9', 
            borderRadius: '12px',
            fontSize: '1rem',
            background: '#fafbfc',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit'
          }} 
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.background = '#ffffff';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e1e5e9';
            e.target.style.background = '#fafbfc';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <textarea 
          placeholder="Your Message" 
          rows="4"
          style={{ 
            width: '100%', 
            padding: '1rem 1.25rem', 
            border: '2px solid #e1e5e9', 
            borderRadius: '12px',
            fontSize: '1rem',
            background: '#fafbfc',
            resize: 'vertical',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit'
          }} 
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.background = '#ffffff';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e1e5e9';
            e.target.style.background = '#fafbfc';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>
      <button 
        type="submit" 
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          padding: '1rem 2.5rem',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.2)';
        }}
      >
        Send Message
      </button>
    </form>
  </div>
);

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.navbar-toggler')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' }
  ];

  const courseItems = [
    { 
      name: 'Beginner', 
      path: '/courses/beginner', 
      description: 'Start your journey with fundamental concepts and basic techniques.',
      icon: '🌱'
    },
    { 
      name: 'Intermediate', 
      path: '/courses/intermediate', 
      description: 'Build upon your foundation with advanced topics and practical applications.',
      icon: '🚀'
    },
    { 
      name: 'Advanced', 
      path: '/courses/advanced', 
      description: 'Master complex concepts and cutting-edge industry practices.',
      icon: '👑'
    }
  ];

  return (
    <>
      {/* Spacer to prevent content overlap */}
      <div className="navbar-spacer"></div>
      
      {/* Backdrop overlay for mobile menu */}
      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />}
      
      <nav className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo-image" />
              <div className="logo-shine"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <a href={link.path} className="nav-link">
                    <span className="link-text">{link.name}</span>
                    <div className="link-highlight"></div>
                    <div className="link-glow"></div>
                  </a>
                </li>
              ))}
              
              {/* Courses Dropdown */}
              <li 
                className="nav-item dropdown-container"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span className="nav-link dropdown-trigger">
                  <span className="link-text">Courses</span>
                  <svg className={`dropdown-arrow ${showDropdown ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                  <div className="link-highlight"></div>
                  <div className="link-glow"></div>
                </span>
                
                <div className={`premium-dropdown ${showDropdown ? 'show' : ''}`}>
                  <div className="dropdown-header">
                    <h4>Choose Your Path</h4>
                    <p>Select the perfect course level for your journey</p>
                  </div>
                  {courseItems.map((course, index) => (
                    <a key={index} href={course.path} className="dropdown-item">
                      <div className="course-icon">{course.icon}</div>
                      <div className="dropdown-content">
                        <h4 className="course-name">{course.name}</h4>
                        <p className="course-description">{course.description}</p>
                      </div>
                      <div className="dropdown-arrow-right">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </div>
                    </a>
                  ))}
                  <div className="dropdown-footer">
                    <a href="/courses" className="view-all-btn">
                      View All Courses
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side Buttons */}
          <div className="navbar-actions">
            <a href="/classroom" className="btn btn-glass">
              <span>Our Classroom</span>
              <div className="btn-particles"></div>
            </a>
            <button 
              className="btn btn-gradient"
              onClick={() => setShowContactModal(true)}
            >
              <span>Contact Us</span>
              <div className="btn-glow"></div>
              <div className="btn-shine"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="toggle-container">
              <span className="toggle-line"></span>
              <span className="toggle-line"></span>
              <span className="toggle-line"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <div className="mobile-logo">
            <img src="/logo.png" alt="Logo" className="mobile-logo-image" />
          </div>
          <div className="mobile-greeting">
            <h3>Welcome</h3>
            <p>Explore our amazing features</p>
          </div>
        </div>
        
        <div className="mobile-nav-content">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.path} 
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="mobile-link-text">{link.name}</span>
              <div className="mobile-link-glow"></div>
            </a>
          ))}
          
          {/* Mobile Courses Section */}
          <div className="mobile-courses-section">
            <div className="mobile-section-header">
              <span className="section-icon">📚</span>
              <span className="section-title">Courses</span>
            </div>
            <div className="mobile-courses-grid">
              {courseItems.map((course, index) => (
                <a 
                  key={index}
                  href={course.path} 
                  className="mobile-course-card"
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${(navLinks.length + index) * 0.1}s` }}
                >
                  <div className="course-card-icon">{course.icon}</div>
                  <div className="course-card-content">
                    <span className="course-card-name">{course.name}</span>
                    <p className="course-card-desc">{course.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Action Buttons */}
          <div className="mobile-actions">
            <a 
              href="/classroom" 
              className="mobile-btn mobile-btn-glass"
              onClick={() => setMenuOpen(false)}
            >
              <span>Our Classroom</span>
            </a>
            <button 
              className="mobile-btn mobile-btn-gradient"
              onClick={() => { 
                setMenuOpen(false); 
                setShowContactModal(true); 
              }}
            >
              <span>Contact Us</span>
              <div className="mobile-btn-glow"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button 
              className="modal-close"
              onClick={() => setShowContactModal(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <Contact onClose={() => setShowContactModal(false)} />
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        /* Navbar Spacer - prevents content overlap */
        .navbar-spacer {
          height: 80px;
        }

        /* Premium Navbar Styles */
        .premium-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(26, 0, 51, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1rem 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .premium-navbar.scrolled {
          background: rgba(26, 0, 51, 0.98);
          padding: 0.75rem 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(102, 126, 234, 0.3);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
        }

        /* Logo Styles */
        .navbar-logo {
          flex-shrink: 0;
        }

        .logo-container {
          position: relative;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-container:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        .logo-image {
          height: 45px;
          width: auto;
          position: relative;
          z-index: 2;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-container:hover .logo-image {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          position: relative;
          z-index: 2;
        }

        .logo-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .logo-container:hover .logo-shine {
          left: 100%;
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 10px;
          overflow: hidden;
        }

        .nav-link:hover {
          color: white;
          transform: translateY(-2px);
        }

        .link-text {
          position: relative;
          z-index: 2;
        }

        .link-highlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 10px;
        }

        .nav-link:hover .link-highlight {
          width: 100%;
        }

        .link-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .nav-link:hover .link-glow {
          width: 120px;
          height: 120px;
        }

        /* Dropdown Styles */
        .dropdown-container {
          position: relative;
        }

        .dropdown-trigger {
          cursor: pointer;
        }

        .dropdown-arrow {
          width: 16px;
          height: 16px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-arrow.rotated {
          transform: rotate(180deg);
        }

        .premium-dropdown {
          position: absolute;
          top: calc(100% + 1.5rem);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(26, 0, 51, 0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          min-width: 420px;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-20px) scale(0.95);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          z-index: 100;
        }

        .premium-dropdown.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0) scale(1);
        }

        .dropdown-header {
          text-align: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dropdown-header h4 {
          color: white;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dropdown-header p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          border-radius: 15px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          margin-bottom: 0.75rem;
          position: relative;
          overflow: hidden;
        }

        .dropdown-item:last-child {
          margin-bottom: 0;
        }

        .dropdown-item:hover {
          background: rgba(102, 126, 234, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
        }

        .course-icon {
          font-size: 2rem;
          margin-right: 1rem;
          transition: transform 0.3s ease;
        }

        .dropdown-item:hover .course-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .dropdown-content {
          flex: 1;
        }

        .course-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: white;
          transition: color 0.3s ease;
        }

        .dropdown-item:hover .course-name {
          color: #667eea;
        }

        .course-description {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1.4;
        }

        .dropdown-arrow-right {
          width: 20px;
          height: 20px;
          color: #667eea;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-item:hover .dropdown-arrow-right {
          opacity: 1;
          transform: translateX(0);
        }

        .dropdown-footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          background: rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
        }

        .view-all-btn svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .view-all-btn:hover svg {
          transform: translateX(3px);
        }

        /* Action Buttons */
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .btn {
          position: relative;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          font-size: 0.95rem;
          z-index: 1;
        }

        .btn-glass {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.1);
        }

        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          position: relative;
        }

        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .btn-gradient:hover .btn-glow {
          width: 100px;
          height: 100px;
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .btn-gradient:hover .btn-shine {
          left: 100%;
        }

        /* Mobile Toggle */
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .toggle-container {
          width: 24px;
          height: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .toggle-line {
          width: 100%;
          height: 3px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .mobile-toggle.active .toggle-line:nth-child(1) {
          transform: translateY(8.5px) rotate(45deg);
        }

        .mobile-toggle.active .toggle-line:nth-child(2) {
          opacity: 0;
          transform: translateX(-20px);
        }

        .mobile-toggle.active .toggle-line:nth-child(3) {
          transform: translateY(-8.5px) rotate(-45deg);
        }

        /* Mobile Backdrop */
        .mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1040;
          backdrop-filter: blur(5px);
          animation: fadeIn 0.3s ease;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          height: 100vh;
          width: min(450px, 90vw);
          background: linear-gradient(135deg, rgba(26, 0, 51, 0.98), rgba(38, 13, 77, 0.98));
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1050;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          box-shadow: -10px 0 50px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-header {
          padding: 2.5rem 2rem 2rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        }

        .mobile-logo-image {
          height: 40px;
          width: auto;
          transition: all 0.3s ease;
        }

        .mobile-logo .logo-text {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-greeting {
          margin-top: 1rem;
        }

        .mobile-greeting h3 {
          color: white;
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .mobile-greeting p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0;
        }

        .mobile-nav-content {
          padding: 2rem;
        }

        .mobile-nav-link {
          position: relative;
          display: block;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 1.25rem 1.5rem;
          border-radius: 15px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 0.75rem;
          overflow: hidden;
          border: 1px solid transparent;
          animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .mobile-nav-link:hover {
          color: white;
          background: rgba(102, 126, 234, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
        }

        .mobile-link-text {
          position: relative;
          z-index: 2;
        }

        .mobile-link-glow {
          position: absolute;
          top: 50%;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, rgba(102, 126, 234, 0.3), transparent);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(-50%);
          border-radius: 15px;
        }

        .mobile-nav-link:hover .mobile-link-glow {
          width: 100%;
        }

        /* Mobile Courses Section */
        .mobile-courses-section {
          margin: 2rem 0;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .section-icon {
          font-size: 1.5rem;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
        }

        .mobile-courses-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-course-card {
          display: flex;
          align-items: center;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
          position: relative;
          overflow: hidden;
        }

        .mobile-course-card:hover {
          background: rgba(102, 126, 234, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.2);
        }

        .course-card-icon {
          font-size: 2rem;
          margin-right: 1rem;
          transition: transform 0.3s ease;
        }

        .mobile-course-card:hover .course-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .course-card-content {
          flex: 1;
        }

        .course-card-name {
          font-weight: 600;
          color: white;
          font-size: 1rem;
          display: block;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .mobile-course-card:hover .course-card-name {
          color: #667eea;
        }

        .course-card-desc {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1.4;
        }

        /* Mobile Actions */
        .mobile-actions {
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-btn {
          padding: 1.25rem 1.5rem;
          border-radius: 15px;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }

        .mobile-btn-glass {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .mobile-btn-glass:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.1);
        }

        .mobile-btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          cursor: pointer;
          position: relative;
        }

        .mobile-btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        .mobile-btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .mobile-btn-gradient:hover .mobile-btn-glow {
          width: 120px;
          height: 120px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(10px);
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .modal-container {
          background: linear-gradient(135deg, #ffffff, #f8fafc);
          border-radius: 20px;
          padding: 3rem;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(26, 0, 51, 0.1);
          border: none;
          cursor: pointer;
          color: #1a0033;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(26, 0, 51, 0.2);
          transform: rotate(90deg);
        }

        .modal-close svg {
          width: 20px;
          height: 20px;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .navbar-actions {
            display: none;
          }

          .navbar-container {
            padding: 0 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-spacer {
            height: 70px;
          }

          .premium-navbar {
            padding: 0.75rem 0;
          }

          .premium-navbar.scrolled {
            padding: 0.6rem 0;
          }

          .navbar-container {
            padding: 0 1rem;
          }

          .logo-text {
            font-size: 1.3rem;
          }

          .mobile-menu {
            width: min(400px, 95vw);
          }

          .mobile-nav-content {
            padding: 1.5rem;
          }

          .mobile-header {
            padding: 2rem 1.5rem 1.5rem 1.5rem;
          }

          .mobile-courses-section {
            margin: 1.5rem 0;
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .navbar-spacer {
            height: 65px;
          }

          .modal-container {
            padding: 2rem;
            margin: 1rem;
          }

          .mobile-header {
            padding: 1.5rem 1rem 1rem 1rem;
          }

          .mobile-nav-content {
            padding: 1rem;
          }

          .mobile-logo-image {
            height: 28px;
          }

          .mobile-logo .logo-text {
            font-size: 1.5rem;
          }

          .mobile-greeting h3 {
            font-size: 1.2rem;
          }

          .premium-dropdown {
            min-width: 320px;
            left: 0;
            transform: none;
          }

          .premium-dropdown.show {
            transform: none;
          }
        }

        /* Scrollbar Styles */
        .mobile-menu::-webkit-scrollbar {
          width: 6px;
        }

        .mobile-menu::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.5);
          border-radius: 3px;
        }

        .mobile-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.7);
        }

        /* Additional Premium Effects */
        .btn-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .btn-particles::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .btn-glass:hover .btn-particles::before {
          width: 100px;
          height: 100px;
        }

        /* Focus Styles for Accessibility */
        .nav-link:focus,
        .btn:focus,
        .mobile-nav-link:focus {
          outline: 2px solid #667eea;
          outline-offset: 2px;
        }

        .mobile-toggle:focus {
          outline: 2px solid #667eea;
          outline-offset: 2px;
          border-radius: 8px;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .premium-navbar {
            background: rgba(0, 0, 0, 0.95);
            border-bottom: 2px solid #667eea;
          }

          .nav-link {
            color: white;
          }

          .dropdown-item {
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .mobile-nav-link {
            animation: none;
          }

          .mobile-course-card {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;