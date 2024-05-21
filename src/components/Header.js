// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import { FiUser, FiCode, FiFolder, FiMail } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <a href="#introduction"><FiUser /> About</a>
        <a href="#skills"><FiCode /> Skills</a>
        <a href="#projects"><FiFolder /> Projects</a>
        <a href="#contact"><FiMail /> Contact</a>
      </nav>
      <button className="menu-button" onClick={toggleMenu}>
        <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
    </header>
  );
};

export default Header;
