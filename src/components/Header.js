// // src/components/Header.js
// import React, { useState } from 'react';
// import './Header.css';
// import { FaBars } from 'react-icons/fa';

// const Header = () => {
//   const [navActive, setNavActive] = useState(false);

//   const handleNavToggle = () => {
//     setNavActive(!navActive);
//   };

//   const handleNavLinkClick = (e, targetId) => {
//     e.preventDefault();
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//     setNavActive(false); // Close navbar on link click
//   };

//   return (
//     <header className="header">
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <a href="/">Portfolio</a>
//         </div>
//         <div className={`navbar-links ${navActive ? 'active' : ''}`}>
//           <a href="#introduction" onClick={(e) => handleNavLinkClick(e, 'introduction')}>About</a>
//           <a href="#skills" onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a>
//           <a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
//           <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
//         </div>
//         <div className="navbar-toggle" onClick={handleNavToggle}>
//           <FaBars />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

// // Styled components for custom navbar styling
// const StyledHeader = styled.header`
//   background: linear-gradient(45deg, #6a11cb, #2575fc);
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 1000;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
//   height: 60px;
//   box-sizing: border-box;
//   overflow-x: hidden;
// `;

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     position: absolute;
//     top: 60px;
//     left: 0;
//     right: 0;
//     background: linear-gradient(45deg, #6a11cb, #2575fc);
//     display: ${props => (props.isOpen ? 'flex' : 'none')};
//     padding: 10px 20px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   }
// `;

// const NavItem = styled.a`
//   color: white;
//   text-decoration: none;
//   margin: 0 15px;
//   display: flex;
//   align-items: center;

//   &:hover {
//     color: #ffd700; // Gold color on hover
//   }

//   @media (max-width: 768px) {
//     margin: 15px 0;
//     width: 100%;
//   }
// `;

// const Icon = styled.span`
//   margin-right: 8px;
// `;

// const Hamburger = styled.div`
//   display: none;
//   flex-direction: column;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: flex;
//   }

//   div {
//     width: 25px;
//     height: 3px;
//     background: white;
//     margin: 4px 0;
//     transition: all 0.3s ease;
//   }
// `;

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <StyledHeader>
//       <NavItem href="#home" className="brand">BrandName</NavItem>
//       <Hamburger onClick={toggleNav}>
//         <div />
//         <div />
//         <div />
//       </Hamburger>
//       <Nav isOpen={isOpen}>
//           <NavItem href="#introduction">
//             <Icon><FaHome /></Icon>
//             Home
//           </NavItem>
//           <NavItem href="#skills">
//             <Icon><FaUser /></Icon>
//             Skills
//           </NavItem>
//           <NavItem href="#projects">
//             <Icon><FaTools /></Icon>
//             Projects
//           </NavItem>
//           <NavItem href="#contact">
//             <Icon><FaProjectDiagram /></Icon>
//             Contact
//           </NavItem>
//       </Nav>
//     </StyledHeader>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

// Styled components for custom navbar styling
const StyledHeader = styled.header`
  background: linear-gradient(45deg, black, #2575fc);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 60px; /* Adjust as needed */
    left: 0;
    width: 100%;
    background: linear-gradient(45deg, black, blue);
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999; /* Ensure it appears above other content */
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 15px 0; /* Adjust spacing */
  display: flex;
  align-items: center;

  &:hover {
    color: #ffd700; // Gold color on hover
  }

  @media (min-width: 769px) {
    margin: 0 15px; /* Adjust spacing for larger screens */
  }
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background: white;
    margin: 4px 0;
    transition: all 0.3s ease;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <NavItem href="#home" className="brand">BrandName</NavItem>
      <Hamburger onClick={toggleNav}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Nav isOpen={isOpen}>
        <NavItem href="#introduction">
          <Icon><FaHome /></Icon>
          Home
        </NavItem>
        <NavItem href="#skills">
          <Icon><FaUser /></Icon>
          Skills
        </NavItem>
        <NavItem href="#projects">
          <Icon><FaTools /></Icon>
          Projects
        </NavItem>
        <NavItem href="#contact">
          <Icon><FaEnvelope /></Icon>
          Contact
        </NavItem>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
