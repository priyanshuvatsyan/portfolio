import './Contact.css';
import contactImg from './contact.png'; // Replace with your actual image path

import {  FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="background">
      <div className="contact-container">
        {/* Image Side */}
        <div className="image-side">
          <img src={contactImg} alt="Contact" className="contact-image" />
        </div>

        {/* Text Side */}
        <div className="text-side">
          <p className="contact-title">Contact Me</p>
          <p className="availability-text">
            I am available from 9 AM - 5 PM on call. Or you can message me, I will reply within 24 hours. I can help you with Full Stack Project Development.
          </p>
          <button className="whatsapp-button">  <a
              href="https://wa.me/917876641139?text=Hello%20Priyanshu,%20I%20would%20like%20to%20connect%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Ping Me on WhatsApp
            </a></button>
          <button className="resume-button"><a href="https://drive.google.com/file/d/1regpHFx8OIvVv_BHg25rya8bJHMqoGYh/view?usp=sharing">See my Resume</a></button>
          <p className="contact-header">Mobile</p>
          <p className="contact-number">+91 7876641139</p>
        </div>
        
      </div>
      <div className="bottom-nav">
          <a href="/"><FaHome className="bottom-icon" title="Home" /> Home</a>
          <a href="/about"><FaUser className="bottom-icon" title="About" /> About</a>
          <a href="/project"><FaProjectDiagram className="bottom-icon" title="Projects" /> Projects</a>
          <a href="/contact"><FaEnvelope className="bottom-icon" title="Contact" /> Contact</a>
        </div>
    </div>
  );
}
