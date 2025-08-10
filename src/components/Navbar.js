import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-2">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" alt="Logo" width="180" className="me-2" />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNav">
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
  );
}

export default Navbar;
