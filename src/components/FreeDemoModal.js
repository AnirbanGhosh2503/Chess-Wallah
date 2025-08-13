import React, { useState, useEffect } from "react";
import { FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi"; // Using new icons
import emailjs from "emailjs-com";
import "./FreeDemoModal.css";

function FreeDemoModal({ isOpen, onClose, autoShowOnLoad = true }) {
  const [formData, setFormData] = useState({
    email: "",
    parentName: "",
    childName: "",
    phone: "",
    age: "",
    source: "",
  });

  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  useEffect(() => {
    if (autoShowOnLoad) setShow(true);
  }, [autoShowOnLoad]);

  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

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

    try {
      await emailjs.send(
        "service_1q6rbrf",
        "template_ysdx28v",
        formData,
        "PUmhM-4_UpXyOPN1M"
      );
      setSubmissionStatus("success");
    } catch (err) {
      console.error("Email error:", err);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShow(false);
        if (onClose) onClose();
      }, 3000); // Wait 3 seconds to show success/error message
    }
  };

  if (!show) return null;

  const renderFormContent = () => (
    <>
      <div className="modal-header">
        <h2 className="modal-title">Elevate Your Child's Future</h2>
        <p className="modal-subtitle">
          Book a free, personalized demo class to unlock their potential.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="demo-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="email">Parent’s Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={handleChange}
              required
            />
            <span className="input-focus-line"></span>
          </div>
          <div className="form-group">
            <label htmlFor="parentName">Parent’s Name</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              placeholder="Your name"
              onChange={handleChange}
              required
            />
            <span className="input-focus-line"></span>
          </div>
          <div className="form-group">
            <label htmlFor="childName">Child’s Name</label>
            <input
              type="text"
              id="childName"
              name="childName"
              placeholder="Child’s name"
              onChange={handleChange}
              required
            />
            <span className="input-focus-line"></span>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone (WhatsApp)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="10-digit mobile"
              pattern="[0-9]{10}"
              maxLength="10"
              onChange={handleChange}
              required
            />
            <span className="input-focus-line"></span>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <div className="custom-select-wrapper">
              <select id="age" name="age" onChange={handleChange} required>
                <option value="">Select Age</option>
                {[...Array(18)].map((_, i) => (
                  <option key={i} value={i + 3}>
                    {i + 3}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="source">How did you hear about us?</label>
            <div className="custom-select-wrapper">
              <select id="source" name="source" onChange={handleChange} required>
                <option value="">Select</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Google</option>
                <option>YouTube</option>
                <option>Word of Mouth</option>
                <option>Others</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          <span className="btn-text">
            {isSubmitting ? "Submitting..." : "Book My Demo"}
          </span>
          <span className="btn-icon">→</span>
        </button>
      </form>
    </>
  );

  const renderStatusMessage = () => (
    <div className="status-message">
      {submissionStatus === "success" ? (
        <>
          <div className="status-icon success-icon">
            <FiCheckCircle />
          </div>
          <h3 className="status-title">Success!</h3>
          <p className="status-text">
            Your request is in. We'll reach out on WhatsApp to schedule your demo.
          </p>
        </>
      ) : (
        <>
          <div className="status-icon error-icon">
            <FiAlertCircle />
          </div>
          <h3 className="status-title">Oops!</h3>
          <p className="status-text">
            Something went wrong. Please try again or contact us directly.
          </p>
        </>
      )}
    </div>
  );

  return (
    <div className="modal-overlay">
      <div className={`modal-box ${submissionStatus ? "status-view" : ""}`}>
        <button
          className="close-btn"
          onClick={() => {
            setShow(false);
            if (onClose) onClose();
          }}
        >
          <FiX />
        </button>
        {submissionStatus ? renderStatusMessage() : renderFormContent()}
        <div className="modal-bg-glow"></div>
      </div>
    </div>
  );
}

export default FreeDemoModal;