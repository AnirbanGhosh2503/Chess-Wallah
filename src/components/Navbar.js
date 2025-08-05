import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">

        {/* Left: Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.png" alt="Logo" width="180" className="me-2" />
        </a>

        {/* Center: NavLinks */}
        <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
          <ul className="navbar-nav text-white flex-row">
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Our Services</a>
            </li>

            {/* Courses Dropdown */}
            <li
              className="nav-item dropdown px-3"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a className="nav-link dropdown-toggle" href="#">
                Courses
              </a>
              {showDropdown && (
                <ul className="dropdown-menu show bg-light text-dark">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <li key={level} className="dropdown-item dropdown-hover">
                      {level}
                      <div className="hover-preview">
                        Glimpse of {level} page coming soon
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="nav-item px-3">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Gallery</a>
            </li>
          </ul>
        </div>

            {/* Right: Buttons and Country Selector */}
            <div className="d-flex align-items-center gap-2">
            <a className="btn btn-outline-light" href="#">Our Classroom</a>
            <a className="btn btn-success text-white" href="#">Contact Us</a>

            {/* Country Selector */}
            <div className="country-dropdown ms-2">
                <button className="btn btn-flag d-flex align-items-center" type="button">
                <img src="/India.svg" alt="India" width="32" height="32" className="rounded-circle me-2" />
                <span className="dropdown-icon">&#9662;</span>
                </button>
                <ul className="country-menu position-absolute">
                <li><img src="/India.svg" alt="India" width="20"  height="20" className="rounded-circle me-2" />India</li>
                <li><img src="/canada.svg" alt="Canada" width="20" height="20" className="rounded-circle me-2" />Canada</li>
                <li><img src="/UK.svg" alt="UK" width="20" height="20" className="rounded-circle me-2" />United Kingdom</li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
