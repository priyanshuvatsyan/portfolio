import './Home.css';
import imageSrc from './coder 2.webp';
import coderImg from './coder.webp';

import './FloatingImage.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import {
  SiFirebase,
  SiMongodb,
  SiVercel,
  SiCloudinary
} from 'react-icons/si';
import cloud from './cloud.svg';
import devops from './devops.svg';
import { motion } from 'framer-motion';
import { FaGit, FaGithub, FaTools } from 'react-icons/fa'; // DevOps, Git, GitHub
import { SiPostman } from 'react-icons/si'; // Postman

export default function Home() {
  return (
    <div>
      <div className="background">
        <div className="content">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
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
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="image-content">
              <img src={imageSrc} alt="Floating" className="floating-image" />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="section-heading">What I Do?</h2>
        </motion.div>
        <div className="skills-section">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="skills-image">
              <img src={coderImg} alt="Skills" className="skills-photo" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
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
          </motion.div>
        </div>



        <div className="skills-section">


<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="skills-image skills-image-mobile ">
              <img src={cloud} alt="Skills" className="skills-photo" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>

            <div className="skills-content">
              <p className="skills-title">Cloud Architecture & Database Management</p>
              <div className="tech-icons">

                <SiFirebase className="icon" style={{ color: '#FFCA28' }} /> {/* Firebase */}
                <SiMongodb className="icon" style={{ color: '#47A248' }} /> {/* MongoDB */}
                <SiVercel className="icon" style={{ color: '#000000' }} /> {/* Vercel */}
                <SiCloudinary className="icon" style={{ color: '#00AFF0' }} /> {/* Cloudinary */}
              </div>

              <p className='tags'>⚡ Designing scalable cloud infrastructure and database architectures</p>
              <p className='tags'>⚡ Implementing caching strategies with Redis and performance optimization</p>
              <p className='tags'>⚡ Managing data storage solutions across SQL and NoSQL databases</p>
            </div>

          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="skills-image skills-image-pc">
              <img src={cloud} alt="Skills" className="skills-photo" />
            </div>
          </motion.div>
        </div>


        <div className="skills-section">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="skills-image">
              <img src={devops} alt="Skills" className="skills-photo" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="skills-content">
              <p className="skills-title">Quality Assurance</p>
              <div className="tech-icons">
      <FaTools className="icon" style={{ color: '#E94E77' }} title="DevOps" />
      <FaGit className="icon" style={{ color: '#F1502F' }} title="Git" />
      <FaGithub className="icon" style={{ color: '#181717' }} title="GitHub" />
      <SiPostman className="icon" style={{ color: '#FF6C37' }} title="Postman" />
      <span className="etc-text">etc.</span>
    </div>
              <p className='tags'>⚡ Writing comprehensive test suites using Jest and maintaining code quality</p>
             
              <p className='tags'>⚡ Managing application logging, monitoring, and deployment processes</p>
            </div>
          </motion.div>
        </div>


        {/* Bottom Navigation Icons */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="bottom-nav">
            <a href="/"><FaHome className="bottom-icon" title="Home" /> Home</a>
            <a href="/about"><FaUser className="bottom-icon" title="About" /> About</a>
            <a href="/project"><FaProjectDiagram className="bottom-icon" title="Projects" /> Projects</a>
            <a href="/contact"><FaEnvelope className="bottom-icon" title="Contact" /> Contact</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}