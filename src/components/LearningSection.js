import React from "react";
import { motion } from "framer-motion";
import "../styles/LearningSection.css"; // Assuming you have a CSS file for styles

const LearningSection = ({ heading, points, imageURL, reverse = false }) => {
  return (
    <div className={`learning-section ${reverse ? "reverse" : ""}`}>
      <motion.div
        className="learning-image"
        initial={{ opacity: 0, scale: 0.9, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={imageURL} alt="Learning Visual" />
      </motion.div>
       
      <motion.div
        className="learning-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2>{heading}</h2>
        <ul>
          {points.map((point, index) => (
            <li key={index}>• {point}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default LearningSection;