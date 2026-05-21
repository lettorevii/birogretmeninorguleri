import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">Bir Öğretmenin Örgüleri</div>
          <p className="footer-tagline">El emeği, göz nuru</p>
        </div>

        <div className="footer-column">
          <h4>Hızlı Bağlantılar</h4>
          <ul>
            <li><a href="#about">Hakkında</a></li>
            <li><a href="#products">Ürünler</a></li>
            <li><a href="#gallery">Galeri</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Sosyal Medya</h4>
          <a
            href="https://www.instagram.com/bir.ogretmenin.orguleri/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bir Öğretmenin Örgüleri — Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
