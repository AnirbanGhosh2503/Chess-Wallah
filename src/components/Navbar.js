import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import "./Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">

        {/* Left: Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" alt="Logo" width="180" className="me-2" />
        </Link>

        {/* Center: Navigation */}
        <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
          <ul className="navbar-nav text-white flex-row">
            <li className="nav-item px-3">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/services">Our Services</Link>
            </li>

            {/* Courses Dropdown */}
            <li
              className="nav-item dropdown px-3"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="nav-link dropdown-toggle">Courses</span>
              {showDropdown && (
                <ul className="dropdown-menu show bg-light text-dark">
                  <li>
                    <Link className="dropdown-item" to="/courses/beginner">Beginner</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/courses/intermediate">Intermediate</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/courses/advanced">Advanced</Link>
                  </li>
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
        </div>

        {/* Right: Buttons */}
        <div className="d-flex align-items-center gap-2">
          <Link className="btn btn-outline-light" to="/classroom">Our Classroom</Link>
          <Link className="btn btn-success text-white" to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
