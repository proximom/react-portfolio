// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me!</h2>  
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="data" placeholder="Title" required />
        <input type="date" required />
        <textarea placeholder="Your text" style={{height: 100}}required></textarea>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/muhammad-ahsan-farooq-33bbb9264/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/proximom" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.instagram.com/m.ahsan.f/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
