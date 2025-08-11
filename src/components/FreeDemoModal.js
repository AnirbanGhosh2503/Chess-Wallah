import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import emailjs from "emailjs-com";
import "./FreeDemoModal.css";

function FreeDemoModal({ isOpen, onClose, autoShowOnLoad = true }) {
  const [formData, setFormData] = useState({
    email: "",
    parentName: "",
    childName: "",
    phone: "",
    age: "",
    source: ""
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (autoShowOnLoad) setShow(true);
  }, [autoShowOnLoad]);

  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Integration
    const phoneNumber = "9475959839";
    const message = `New Demo Booking:
Parent Email: ${formData.email}
Parent Name: ${formData.parentName}
Child Name: ${formData.childName}
Phone: ${formData.phone}
Age: ${formData.age}
Source: ${formData.source}`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");

    // EmailJS Integration
    emailjs.send(
      "service_1q6rbrf",
      "template_ysdx28v",
      formData,
      "PUmhM-4_UpXyOPN1M"
    ).then(res => console.log("Email sent:", res.text))
     .catch(err => console.error("Email error:", err));

    setShow(false);
    if (onClose) onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={() => { setShow(false); if (onClose) onClose(); }}>
          <FiX />
        </button>

        <h2 className="modal-title">Book a Free Demo</h2>
        <p className="modal-subtitle">
          Tell us a bit about your child. We’ll schedule a friendly assessment and demo class.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Parent’s Email ID</label>
            <input type="email" name="email" placeholder="you@example.com" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Parent’s Full Name</label>
            <input type="text" name="parentName" placeholder="Your Name" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Child’s Name</label>
            <input type="text" name="childName" placeholder="Child’s Name" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone (WhatsApp Number)</label>
            <input type="tel" name="phone" placeholder="10-digit mobile" pattern="[0-9]{10}" maxLength="10" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Age</label>
            <select name="age" onChange={handleChange} required>
              <option value="">Select Age</option>
              {[...Array(18)].map((_, i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>How did you hear about us?</label>
            <select name="source" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Google</option>
              <option>YouTube</option>
              <option>Word of Mouth</option>
              <option>Others</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default FreeDemoModal;
