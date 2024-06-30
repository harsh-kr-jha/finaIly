import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

const Header = () => (
  <header>
    <div className="logo">
      fin.aI.ly
    </div>
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/analysis">Analysis</Link></li>
        <li><Link to="/recommendations">Recommendations</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
