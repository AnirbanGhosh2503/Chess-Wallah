import React, { useState, useEffect } from "react";
import { FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
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

  // State to manage input focus for dynamic labels
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    if (autoShowOnLoad) setShow(true);
  }, [autoShowOnLoad]);

  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

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
      }, 3000);
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
          {["email", "parentName", "childName", "phone"].map((name) => (
            <div className="form-group" key={name}>
              <label 
                htmlFor={name}
                className={formData[name] || focusedInput === name ? "active" : ""}
              >
                {name === "email" && "Parent’s Email ID"}
                {name === "parentName" && "Parent’s Name"}
                {name === "childName" && "Child’s Name"}
                {name === "phone" && "Phone (WhatsApp)"}
              </label>
              <input
                type={name === "email" ? "email" : "text"}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </div>
          ))}

          <div className="form-group select-group">
            <label 
              htmlFor="age"
              className={formData.age || focusedInput === "age" ? "active" : ""}
            >
              Age
            </label>
            <div className="custom-select-wrapper">
              <select
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              >
                <option value="" disabled>Select Age</option>
                {[...Array(18)].map((_, i) => (
                  <option key={i} value={i + 3}>
                    {i + 3}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group select-group">
            <label
              htmlFor="source"
              className={formData.source || focusedInput === "source" ? "active" : ""}
            >
              How did you hear about us?
            </label>
            <div className="custom-select-wrapper">
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              >
                <option value="" disabled>Select</option>
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