import React, { useState } from "react";
import "./Contact.css";
import { FaUser, FaEnvelope, FaTag, FaPaperPlane } from "react-icons/fa";

// The main ContactFormSleek component
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handles input and textarea changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to an API
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="sleek-container">
      <div className="sleek-card">
        {/* Card header with title and subtitle */}
        <div className="sleek-header">
          <h1 className="sleek-title">
            Let's <span className="sleek-green-text">Connect</span>
          </h1>
          <p className="sleek-subtitle">
            We'd love to hear from you. Send us a message and we'll reply as soon as we can.
          </p>
        </div>

        {/* The main animated contact form */}
        <form className="sleek-form" onSubmit={handleSubmit}>
          {/* Name input field */}
          <div className="form-group-sleek">
            <label htmlFor="name" className="form-label-sleek">Name</label>
            <FaUser className="form-icon-sleek" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="form-input-sleek"
              required
            />
          </div>

          {/* Email input field */}
          <div className="form-group-sleek">
            <label htmlFor="email" className="form-label-sleek">Email</label>
            <FaEnvelope className="form-icon-sleek" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="form-input-sleek"
              required
            />
          </div>

          {/* Subject input field */}
          <div className="form-group-sleek">
            <label htmlFor="subject" className="form-label-sleek">Subject</label>
            <FaTag className="form-icon-sleek" />
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder=" "
              className="form-input-sleek"
              required
            />
          </div>

          {/* Message textarea */}
          <div className="form-group-sleek textarea-group">
            <label htmlFor="message" className="form-label-sleek">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="form-textarea-sleek"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit button with glow effect */}
          <button type="submit" className="submit-button-sleek">
            <FaPaperPlane className="submit-icon-sleek" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;