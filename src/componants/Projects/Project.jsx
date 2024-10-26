import './project.css';
import projImg from './proj.webp';
import {  FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function Project() {
  return (
    <div className="background">
      <div className="project-container">
        <div className="image-container">
          <img src={projImg} alt="Project" className="project-image" />
        </div>
        <div className="text-container">
          <h1>Projects</h1>
          <p>
            My projects make use of a vast variety of the latest technology tools.
            My best experience is to create full stack projects and deploy them to web applications.
          </p>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="projects-grid">
        <div className="project-card">
          <h3>Get My Contact</h3>
          <p>A personal contact management app for storing and accessing contacts.</p>
          <a href="https://github.com/priyanshuvatsyan/GetMyContacts">View Project</a>
        </div>
        <div className="project-card">
          <h3>Have a Seat</h3>
          <p>A restaurant table booking system with QR code ordering.</p>
          <a href="https://github.com/priyanshuvatsyan/Have-a-seat">View Project</a>
        </div>
        <div className="project-card">
          <h3>Facemask Detector</h3>
          <p>An AI-powered app for detecting facemasks in real-time.</p>
          <a href="#facemask-detector">View Project</a>
        </div>
        <div className="project-card">
          <h3>Code Editor</h3>
          <p>A web-based code editor supporting multiple languages.</p>
          <a href="https://github.com/priyanshuvatsyan/Code-editor-">View Project</a>
        </div>
        <div className="project-card">
          <h3>Hi Music</h3>
          <p>A music streaming app with curated playlists and albums.</p>
          <a href="https://github.com/priyanshuvatsyan/Hi-Music">View Project</a>
        </div>
        <div className="project-card">
          <h3>Hello Placement</h3>
          <p>A platform for students to prepare for campus placements.</p>
          <a href="https://github.com/priyanshuvatsyan/Hello-Placement">View Project</a>
        </div>
        <div className="project-card">
          <h3>Text Craft</h3>
          <p>A tool for crafting and formatting text with rich features.</p>
          <a href="https://github.com/priyanshuvatsyan/TextCraft">View Project</a>
        </div>
      </div>

      {/* Happy Clients Section */}
      <h2 className="clients-heading">Happy Clients</h2>
      <div className="clients-grid">
        <div className="client-card">
          <h3>JN Traders</h3>
          <p>We developed their e-commerce site with a business management system to enhance their business operations.</p>
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
