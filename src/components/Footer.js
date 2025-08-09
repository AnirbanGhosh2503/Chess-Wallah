import React from "react";
import "../styles/Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-tagline">
        <h2>CHESSWALLAH</h2>
        <p>Nurturing the next generation of chess champions.</p>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Company Policy</li>
            <li>Our Students</li>
            <li>Online Training</li>
            <li>Our Blog</li>
            <li>Contact Portal</li>
            <li>Association Directory</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONTACT US</h4>
          <ul>
            <li><FaMapMarkerAlt /> Head Office: Mumbai, India</li>
            <li><FaPhoneAlt /> +91 7003920065</li>
            <li><FaEnvelope /> contact@chessbrainz.com</li>
          </ul>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-column">
          <h4>FIND US</h4>
          <ul>
            <li>
              <strong>Chessbrainz Headquarters</strong><br />
              Office No. 608, Bhaveshwar Arcade Annexe<br />
              Nityanand Nagar, Ghatkopar West<br />
              Mumbai, Maharashtra 400086, India
            </li>
            <li>
              <strong>USA Office</strong><br />
              Chessbrainz<br />
              528 W. Commerce St. #4951<br />
              Dallas, TX 75208, USA
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
