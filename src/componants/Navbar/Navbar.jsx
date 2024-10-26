
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">{"<Pri.Va/>"}</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/project">Projects</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
