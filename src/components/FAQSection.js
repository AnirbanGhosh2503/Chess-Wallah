import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQSection.css";

const faqs = [
  "What is the minimum age requirement to enroll my child in Chess Training Classes?",
  "How will you assess my child's chess level at the time of enrollment?",
  "How can we enroll our kids with Chessbrainz Chess Academy?",
  "What is the fee structure of Chessbrainz?",
  "How many sessions does it take to learn basic chess?",
  "When will a student be eligible to participate in a chess tournament?",
  "What is the recommended frequency and schedule for chess sessions?",
  "How will the student receive information about upcoming chess tournaments in the nearby area?",
  "Will the student receive certificates upon completing each level?",
  "How can we make the payment of fees to Chessbrainz?"
];

const answers = [
  "Minimum age requirement is 5 years.",
  "We evaluate through a quick assessment session.",
  "You can fill out the registration form or contact us.",
  "Fees vary by level. Contact us for details.",
  "Typically around 12-15 sessions for basics.",
  "Students can join tournaments after the beginner level.",
  "We recommend 2 sessions per week for consistent progress.",
  "We send updates via email, WhatsApp, and our internal dashboard.",
  "Yes, each student receives a certificate after completing each level.",
  "We offer online payments via UPI, cards, or net banking."
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container container-fluid">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <p className="faq-subheading">Chessbrainz Common FAQ's</p>
      <div className="faq-list">
        {faqs.map((question, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span className="faq-bullet">•</span>
              {question}
              <span className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}>
                <FaChevronDown />
              </span>
            </div>
            <div className="faq-answer">
              <p>{answers[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
