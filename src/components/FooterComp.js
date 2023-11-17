import React from 'react';
import './FooterComp.css';

function FooterComp() {
  return (
    <footer className="footer">
      <div className="footer-column-1">
        <div className="footer-logo">
          <img src="images/Logo_3.png" alt="Company Logo" />
        </div>
        <p className="footer-text">Qwikay is here to help you, from pickup to drop-off</p>
        <p className="copy-right">&copy; 2023 Qwikway</p>
      </div>
      <div className="footer-column">
        <h4>Qwikway</h4>
        <ul>
          <li><a href="/">Cities</a></li>
          <li><a href="/">Join our partners</a></li>
          <li><a href="/">Earn with Qwikway</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="/">Blog</a></li>
          <li><a href="/">About us</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Get in touch</h4>
        <ul>
          <li><a href="/">FAQs</a></li>
          <li><a href="/">Support</a></li>
          <li><a href="/">Help center</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h5>Hassle free package deliver:</h5>
        <div className="app-buttons">
          <a href="/" className="download-button">
            <img src="images/Button.png" alt="Download on the App Store" />
          </a>
          <a href="/" className="download-button">
            <img src="images/Button2.png" alt="Get it on Google Play" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComp;
