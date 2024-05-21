// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: false, // Allow animations to happen every time you scroll
      mirror: true // Animate elements when scrolling past them again
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
