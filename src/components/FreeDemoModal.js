import React, { useState, useEffect } from "react";
import "./FreeDemoModal.css";

function FreeDemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <h2 className="modal-title">Book a Free Demo Today</h2>
        <p className="modal-subtitle">Be a part of a growing global chess community of kids</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Parent’s Email ID</label>
          <input type="email" placeholder="e.g. parent@example.com" required />

          <label>Parent’s Full Name</label>
          <input type="text" placeholder="Full name" required />

          <label>Child’s Name</label>
          <input type="text" placeholder="Child's name" required />

          <label>Mobile Number</label>
          <div className="phone-input">
            <span className="prefix">+91</span>
            <input
              type="tel"
              placeholder="WhatsApp number"
              required
              pattern="[0-9]{10}"
              maxLength="10"
            />
          </div>

          <label>Select Age</label>
          <select required>
            <option value="">--Select Age--</option>
            {[...Array(18)].map((_, i) => (
              <option key={i} value={i + 3}>{i + 3}</option>
            ))}
          </select>

          <label>How Did You Hear About Us?</label>
          <select required>
            <option value="">--Select Option--</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Google</option>
            <option>YouTube</option>
            <option>Word of Mouth</option>
            <option>Others</option>
          </select>

          <button type="submit" className="login-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FreeDemoModal;
