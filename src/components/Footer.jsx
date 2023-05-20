import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.instagram.com/ticiano.matheus/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:matheusticiano34@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/matheusticiano" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/matheus-ticiano-b2928724a/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-info">
          <p3>Support and business contact: matheusticiano34@gmail.com</p3>
          <p3>Copyright © Ravendawn Tavern</p3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
