import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-2">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/logo.png" alt="Logo" width="180" className="me-2" />
          </Link>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Nav Links */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-3">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/services">Our Services</Link>
              </li>

              {/* Courses dropdown */}
              <li
                className="nav-item dropdown px-3"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span className="nav-link dropdown-toggle" role="button">Courses</span>
                {showDropdown && (
                  <ul className="dropdown-menu show bg-light text-dark">
                    <li><Link className="dropdown-item" to="/courses/beginner">Beginner</Link></li>
                    <li><Link className="dropdown-item" to="/courses/intermediate">Intermediate</Link></li>
                    <li><Link className="dropdown-item" to="/courses/advanced">Advanced</Link></li>
                  </ul>
                )}
              </li>

              <li className="nav-item px-3">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
            </ul>

            {/* Right side buttons */}
            <div className="d-flex gap-2 mt-2 mt-lg-0">
              <Link className="btn btn-outline-light" to="/classroom">Our Classroom</Link>
              <Link className="btn btn-success text-white" to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          &times;
        </span>

        <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link className="nav-link" to="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>

        {/* Courses */}
        <div className="mobile-dropdown">
          <span className="nav-link">Courses</span>
          <div className="mobile-dropdown-items">
            <Link to="/courses/beginner" onClick={() => setMenuOpen(false)}>Beginner</Link>
            <Link to="/courses/intermediate" onClick={() => setMenuOpen(false)}>Intermediate</Link>
            <Link to="/courses/advanced" onClick={() => setMenuOpen(false)}>Advanced</Link>
          </div>
        </div>

        <Link className="nav-link" to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link className="nav-link" to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>

        <button className="btn btn-outline-light mt-3" onClick={() => setMenuOpen(false)}>Our Classroom</button>
        <button className="btn btn-success mt-2" onClick={() => setMenuOpen(false)}>Contact Us</button>
      </div>
    </>
  );
}

export default Navbar;
