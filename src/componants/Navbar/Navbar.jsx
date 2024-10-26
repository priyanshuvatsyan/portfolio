import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu on small screens
  };

  return (
    <nav className="navbar">
      <h1 className="logo">{"<Pri.Va/>"}</h1>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="navbar-toggler-icon">☰</span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/project">Projects</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
