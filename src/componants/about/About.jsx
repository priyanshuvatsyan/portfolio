import './About.css';
import profileImg from './degree.webp'; // Replace with your actual profile image path
import {FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <div className="background">
      <div className="about-container">
        {/* Image Side */}
        <div className="image-side">
          <img src={profileImg} alt="Profile" className="profile-image" />
        </div>

        {/* Education Side */}
        <div className="education-side">
          <h1>Education</h1>
          <p>Basic Qualifications</p>

          {/* Logos */}
          <div className="logos-container">
            <a href="https://www.geeksforgeeks.org/user/priyanshu5nay/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="Geeks for Geeks" className="logo gfg" />
            </a>
            <a href="https://leetcode.com/u/priyanshuvatsyan/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="logo leetcode" />
            </a>
          </div>
        </div>
      </div>

      {/* Degree Section */}
      <div className="degree-section">
        <p className='degree' >Degree</p>
        <div className="degree-details">
          <h2>Chandigarh University</h2>
          <h3>B.E in Computer Engineering (2021 - Present)</h3>
        <p className='details' >
          ⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN, AI, etc.<br />
          ⚡ Apart from this, I have a strong command on Java DSA and Full Stack Development.
        </p>
        </div>
        <div className="bottom-nav">
          <a href="/"><FaHome className="bottom-icon" title="Home" /> Home</a>
          <a href="/about"><FaUser className="bottom-icon" title="About" /> About</a>
          <a href="/project"><FaProjectDiagram className="bottom-icon" title="Projects" /> Projects</a>
          <a href="/contact"><FaEnvelope className="bottom-icon" title="Contact" /> Contact</a>
        </div>
      </div>
    </div>
  );
}
