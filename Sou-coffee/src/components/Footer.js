import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
      <div className="coffee-shop-footer">
        <Logo />
        <div className="site-links">
          <nav className="links-container">
            <Link to="about">About</Link>
            <Link to="menu">Menu</Link>
            <Link to="visit">Visit</Link>
          </nav>
        </div>
        <div className="other">
          <div className="contact-info">
            <p className="hours"><span className="icon far fa-clock fa-fw"></span> Hours: Hằng ngày 7AM - 8PM</p>
            <p className="address"><span className="icon fas fa-map-marker-alt fa-fw"></span> 242 Huỳnh Văn Nghệ, Đà Nẵng5</p>
            <p className="phone"><span className="icon fas fa-phone-alt fa-fw"></span> <a href="tel:0386751108">038 675 1108</a></p>
          </div>
          <div className="social-media-links">
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" title="Facebook">
              <span className="fab fa-facebook fa-fw"></span>
            </a>
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" title="Instagram">
              <span className="fab fa-instagram fa-fw"></span>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter" title="Twitter">
              <span className="fab fa-twitter fa-fw"></span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="app-footer">Created by <a href="https://www.facebook.com/tienthinh.nguyen.3975012/" target="_blank">Thịnh Nguyễn</a> &copy; {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;