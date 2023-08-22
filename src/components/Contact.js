import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2><b>Contact Me</b></h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
        
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jeevan-kumar-068726252/"><b>LinkedIn</b></a>
          <a href="https://twitter.com/korra_jeevan"><b>X</b></a>
          <a href="https://github.com/jeevan10017"><b>GitHub</b></a>
          <a href="https://www.instagram.com/jeevankumarkorra/?next=%2F"><b>Instagram</b></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
