import React, { useState, useEffect } from "react";
import logoimg from "../assets/logo.png"; // Replace with your actual logo path

// Mock logo - replace with your actual logo import
const logo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='20' fill='%2336d1dc'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3EL%3C/text%3E%3C/svg%3E";

// Mock Contact component for demo
const Contact = ({ onClose }) => (
  <div className="contact-modal-content">
    <h3 style={{ color: '#0A2463', marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '700' }}>Get In Touch</h3>
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
            e.target.style.borderColor = '#0A2463';
            e.target.style.background = '#ffffff';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(10, 36, 99, 0.15)';
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
            e.target.style.borderColor = '#0A2463';
            e.target.style.background = '#ffffff';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(10, 36, 99, 0.15)';
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
            e.target.style.borderColor = '#0A2463';
            e.target.style.background = '#ffffff';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(10, 36, 99, 0.15)';
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
          background: 'linear-gradient(135deg, #0A2463 0%, #247BA0 100%)',
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
          e.target.style.boxShadow = '0 20px 40px rgba(10, 36, 99, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 10px 25px rgba(10, 36, 99, 0.2)';
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
    { name: 'Beginner', path: '/courses/beginner', icon: '🌱' },
    { name: 'Intermediate', path: '/courses/intermediate', icon: '🚀' },
    { name: 'Advanced', path: '/courses/advanced', icon: '👑' }
  ];

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        /* Navbar Spacer */
        .navbar-spacer {
          height: 80px;
        }

        /* Premium Navbar */
        .premium-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 36, 99, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1rem 0;
          box-shadow: 0 4px 30px rgba(10, 36, 99, 0.2);
        }

        .premium-navbar.scrolled {
          background: rgba(10, 36, 99, 0.98);
          padding: 0.75rem 0;
          box-shadow: 0 8px 32px rgba(10, 36, 99, 0.4);
          border-bottom: 1px solid rgba(36, 123, 160, 0.3);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
        }

        /* Logo */
        .navbar-logo {
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-logo:hover {
          transform: scale(1.05) rotateY(10deg);
        }

        .logo-image {
          height: 50px;
          width: auto;
          filter: drop-shadow(0 4px 12px rgba(255, 255, 255, 0.2));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-logo:hover .logo-image {
          filter: drop-shadow(0 8px 20px rgba(36, 123, 160, 0.4));
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
          padding: 0.75rem 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 8px;
          overflow: hidden;
        }

        .nav-link:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .link-text {
          position: relative;
          z-index: 2;
        }

        .link-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #36d1dc, #5b86e5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          border-radius: 1px;
        }

        .nav-link:hover .link-underline {
          width: 100%;
        }

        /* Dropdown */
        .dropdown-container {
          position: relative;
        }

        .dropdown-trigger {
          cursor: pointer;
        }

        .dropdown-arrow {
          width: 16px;
          height: 16px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-arrow.rotated {
          transform: rotate(180deg);
        }

        .premium-dropdown {
          position: absolute;
          top: calc(100% + 1rem);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10, 36, 99, 0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.75rem;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-10px) scale(0.95);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 40px rgba(10, 36, 99, 0.4);
          z-index: 100;
        }

        .premium-dropdown.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0) scale(1);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          margin-bottom: 0.25rem;
        }

        .dropdown-item:last-child {
          margin-bottom: 0;
        }

        .dropdown-item:hover {
          background: rgba(36, 123, 160, 0.2);
          border-color: rgba(36, 123, 160, 0.3);
          color: #ffffff;
          transform: translateX(4px);
        }

        .course-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .dropdown-item:hover .course-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .course-name {
          font-weight: 500;
          font-size: 0.95rem;
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
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-outline {
          background: transparent;
          color: rgba(255, 255, 255, 0.9);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%);
          color: white;
          border: none;
          position: relative;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(54, 209, 220, 0.3);
        }

        .btn-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary:hover .btn-ripple {
          width: 100px;
          height: 100px;
        }

        /* Mobile Toggle */
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          position: relative;
        }

        .hamburger {
          width: 24px;
          height: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background: #ffffff;
          border-radius: 1px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .mobile-toggle.active .hamburger span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .mobile-toggle.active .hamburger span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .mobile-toggle.active .hamburger span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
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
          backdrop-filter: blur(8px);
          animation: fadeIn 0.3s ease;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          height: 100vh;
          width: min(400px, 85vw);
          background: linear-gradient(135deg, rgba(10, 36, 99, 0.98), rgba(36, 123, 160, 0.98));
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          z-index: 1050;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: -10px 0 50px rgba(10, 36, 99, 0.3);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-header {
          padding: 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-logo {
          height: 45px;
          width: auto;
          margin-bottom: 1rem;
          filter: drop-shadow(0 4px 12px rgba(255, 255, 255, 0.2));
        }

        .mobile-title {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #36d1dc, #5b86e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-nav-content {
          padding: 2rem;
        }

        .mobile-links {
          margin-bottom: 2rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 0.75rem;
          border: 1px solid transparent;
          animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link:hover {
          color: #ffffff;
          background: rgba(36, 123, 160, 0.2);
          border-color: rgba(36, 123, 160, 0.3);
          transform: translateX(8px) scale(1.02);
          box-shadow: 0 8px 25px rgba(36, 123, 160, 0.2);
        }

        .mobile-nav-link svg {
          width: 18px;
          height: 18px;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover svg {
          opacity: 1;
          transform: translateX(4px);
        }

        /* Mobile Courses */
        .mobile-courses {
          margin-bottom: 2rem;
        }

        .courses-title {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          text-align: center;
          background: linear-gradient(135deg, #36d1dc, #5b86e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }

        .course-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 1rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
          text-align: center;
        }

        .course-card:hover {
          background: rgba(36, 123, 160, 0.2);
          border-color: rgba(36, 123, 160, 0.4);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 30px rgba(36, 123, 160, 0.3);
          color: #ffffff;
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          transition: transform 0.3s ease;
        }

        .course-card:hover .card-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .card-title {
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Mobile Actions */
        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-btn {
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1rem;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .mobile-btn.outline {
          background: transparent;
          color: rgba(255, 255, 255, 0.9);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .mobile-btn.outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .mobile-btn.primary {
          background: linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%);
          color: white;
          border: none;
        }

        .mobile-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(54, 209, 220, 0.3);
        }

        /* Contact Modal */
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
          padding: 1rem;
          backdrop-filter: blur(10px);
        }

        .modal-container {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
          color: #666;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #333;
        }

        .modal-close svg {
          width: 20px;
          height: 20px;
        }

        .contact-modal-content {
          margin-top: 0.5rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .navbar-container {
            padding: 0 1.5rem;
          }
          
          .nav-links {
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .navbar-actions {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .navbar-container {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .navbar-container {
            padding: 0 1rem;
          }

          .mobile-menu {
            width: 100vw;
          }

          .modal-container {
            margin: 1rem;
            padding: 1.5rem;
          }
        }
      `}</style>

      {/* Spacer to prevent content overlap */}
      <div className="navbar-spacer"></div>
      
      {/* Backdrop overlay for mobile menu */}
      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />}
      
      <nav className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={logoimg} alt="Logo" className="logo-image" />
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <a href={link.path} className="nav-link">
                    <span className="link-text">{link.name}</span>
                    <div className="link-underline"></div>
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
                  <div className="link-underline"></div>
                </span>
                
                <div className={`premium-dropdown ${showDropdown ? 'show' : ''}`}>
                  {courseItems.map((course, index) => (
                    <a key={index} href={course.path} className="dropdown-item">
                      <span className="course-icon">{course.icon}</span>
                      <span className="course-name">{course.name}</span>
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side Buttons */}
          <div className="navbar-actions">
            <a href="/classroom" className="btn btn-outline">
              <span>Our Classroom</span>
            </a>
            <button 
              className="btn btn-primary"
              onClick={() => setShowContactModal(true)}
            >
              <span>Contact Us</span>
              <div className="btn-ripple"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <img src={logo} alt="Logo" className="mobile-logo" />
          <h3 className="mobile-title">Menu</h3>
        </div>
        
        <div className="mobile-nav-content">
          <div className="mobile-links">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.path} 
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span>{link.name}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            ))}
          </div>
          
          {/* Mobile Courses Grid */}
          <div className="mobile-courses">
            <h4 className="courses-title">Courses</h4>
            <div className="courses-grid">
              {courseItems.map((course, index) => (
                <a 
                  key={index}
                  href={course.path} 
                  className="course-card"
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${(navLinks.length + index) * 0.1}s` }}
                >
                  <span className="card-icon">{course.icon}</span>
                  <span className="card-title">{course.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Actions */}
          <div className="mobile-actions">
            <a 
              href="/classroom" 
              className="mobile-btn outline"
              onClick={() => setMenuOpen(false)}
            >
              Our Classroom
            </a>
            <button 
              className="mobile-btn primary"
              onClick={() => { 
                setMenuOpen(false); 
                setShowContactModal(true); 
              }}
            >
              Contact Us
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
    </>
  );
}

export default Navbar;