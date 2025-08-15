import React from 'react';
import './AboutUsSection.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import srinathImg from '../../assets/SN.png';
import pratikImg from '../../assets/Pratik.png';

const people = [
  {
    name: "Srinath Narayanan",
    title: "Chess Grandmaster",
    description: `Grandmaster Srinath Narayanan is one of India's most respected chess minds. An accomplished player, a celebrated coach, and a vital force in shaping the country's chess future. A former World Youth Chess Champion, Srinath has coached some of the world's top talents and currently serves as the coach of the Indian National Team. Under his leadership, Team India clinched the gold medal at the 2024 Chess Olympiad, marking a historic triumph on the global stage. His strategic brilliance and mentorship continue to inspire the next generation of champions at Chessbrainz.`,
    img: srinathImg, // Put your local image path here
    reverse: false,
  },
  {
    name: "Pratik Vaidya",
    title: "Founder Of Chessbrainz",
    description: `Pratik, our founder and international-level chess player, envisions a world where every child embraces the thrill of chess. With a passion for the game that transcends borders, Pratik has launched this academy to make chess a household joy for kids globally. Join us on an exciting journey as we transform the chessboard into a playground of strategy, fun, and boundless possibilities. Let's together popularize the magic of chess in the hearts of children worldwide!`,
    img: pratikImg, // Put your local image path here
    reverse: true,
  },
];

const AboutUsSection = () => {
  return (
    <div className="about-container">
      {people.map((person, index) => (
        <div
          className={`about-card ${person.reverse ? 'reverse' : ''}`}
          key={index}
        >
          <div className="about-image">
            <div className="image-frame">
              <img src={person.img} alt={person.name} />
            </div>
          </div>
          <div className="about-content">
            <h2>{person.title}</h2>
            <h3>{person.name}</h3>
            <p>{person.description}</p>
            <div className="about-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <div className="icon-wrapper">
                  <FaInstagram />
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <div className="icon-wrapper">
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsSection;