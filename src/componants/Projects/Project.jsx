import './project.css';
import projImg from './proj.webp';
import laptop from './laptop-removebg-preview.png';
import globe from './globe-removebg-preview.png';
import mern from './mern-removebg-preview.png';
import error from './error.webp';
import code from './react-removebg-preview.png';
import jnt from './jnt s.png';
import ps from './petspace.png';
import gmc from './image.png';
import has from './Screenshot (277).png';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Project() {
  return (
    <div className="background">
      <div className="promContent">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="promUp">
            <div className="promZero">
              <img src={laptop} />
              <h2>I prioritize client collaboration, fostering open communication</h2>
            </div>
            <div className="promZeroRight">
              <div className="promZeroRightOne">
                <h3>I'm very flexible with time zone communications</h3>
                <img src={globe} alt="" />
              </div>
              <div className="promZeroRightTwo">
                <h3>My Tech Stack</h3>
                <img src={mern} alt="" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="promDown">
            <div className="promDownTwo">
              <h3>Tech enthusiast with a passion for development.</h3>
              <img src={error} alt="" />
            </div>
            <div className="promDownThree">
              <h3>Self taught programmer</h3>
              <img className='probImg' src={code} alt="" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
       
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img src={jnt} alt="JN Traders" />
            <h3>JN Traders</h3>
            <p>An online marketplace for trading various goods, with features for easy ordering and delivery management.</p>
            <div className="tech-stack">
              
            </div>
            {/* <a href="/project/jn-traders" className="view-project">View Project</a>
         */}  </div>

         
          <div className="project-card">
            <img src={ps} alt="Petspace" />
            <h3>Petspace</h3>
            <p>A platform for pet lovers to find and adopt pets, with user-friendly features to explore available pets and shelters.</p>
            </div>

         
          <div className="project-card">
            <img src={gmc} alt="Get My Contacts" />
            <h3>Get My Contacts</h3>
            <p>An app to organize and sync contacts, enabling users to manage their personal network with ease.</p>
          </div>

          
          <div className="project-card">
            <img src={has} alt="Have A Seat" />
            <h3>Have A Seat</h3>
            <p>A restaurant management system allowing customers to view menus, order food, and pay bills directly from their phones.</p>
            
          
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="bottom-nav">
          <a href="/"><FaHome className="bottom-icon" title="Home" /> Home</a>
          <a href="/about"><FaUser className="bottom-icon" title="About" /> About</a>
          <a href="/project"><FaProjectDiagram className="bottom-icon" title="Projects" /> Projects</a>
          <a href="/contact"><FaEnvelope className="bottom-icon" title="Contact" /> Contact</a>
        </div>
      </motion.div>
    </div>
  );
}
