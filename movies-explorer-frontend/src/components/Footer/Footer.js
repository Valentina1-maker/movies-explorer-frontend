import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__links-bar">
        <p className="footer__copyright">
          &#169;2022
        </p>
        <nav className="footer__navtab">
          <ul className="footer__links">
            <li className="footer__links-item">
              <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__links-item">
              <a href="https://github.com/Valentina1-maker" className="footer__link" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li className="footer__links-item">
              <a href="https://t.me/sarasvatj" className="footer__link" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;