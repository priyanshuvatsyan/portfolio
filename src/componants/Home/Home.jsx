import './Home.css';
import imageSrc from './coder 2.webp';
import coderImg from './coder.webp';
import './FloatingImage.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <div className="background">
        <div className="content">
          <div className="text-content">
            <h2>Priyanshu Vatsyan</h2>
            <h3>(Software Developer)</h3>
            <p>
              A passionate individual who always thrives to work on end-to-end products that
              develop sustainable and scalable social and technical systems to create impact.
            </p>
            <a
              href="https://wa.me/917876641139?text=Hello%20Priyanshu,%20I%20would%20like%20to%20connect%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Ping Me on WhatsApp
            </a>
          </div>

          <div className="image-content">
            <img src={imageSrc} alt="Floating" className="floating-image" />
          </div>
        </div>

        <h2 className="section-heading">What I Do?</h2>
        <div className="skills-section">
          <div className="skills-image">
            <img src={coderImg} alt="Skills" className="skills-photo" />
          </div>

          <div className="skills-content">
            <p className="skills-title">Full Stack Development</p>
            <div className="tech-icons">
              <FaHtml5 className="icon" style={{ color: '#E34F26' }} />
              <FaCss3Alt className="icon" style={{ color: '#1572B6' }} />
              <FaJs className="icon" style={{ color: '#F7DF1E' }} />
              <FaReact className="icon" style={{ color: '#61DAFB' }} />
              <FaNodeJs className="icon" style={{ color: '#339933' }} />
              <FaDatabase className="icon" style={{ color: '#47A248' }} />
              <span className="etc-text">etc.</span>
            </div>
            <p className='tags'>⚡ Building responsive website front end using React frameworks</p>
            <p className='tags'>⚡ Developing Backend Support for the Frontend using Firebase with Express JS</p>
            <p className='tags'>⚡ Creating application backend in Node, Express</p>
          </div>
        </div>

        {/* Bottom Navigation Icons */}
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
