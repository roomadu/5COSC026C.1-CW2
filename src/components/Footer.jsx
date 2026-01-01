import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CONTACT SECTION */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: dreamproperties@gmail.com</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/#search-section">Search Properties</a>
          <a href="/#properties-section">Properties</a>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="/images/instergram.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 DreamProperties. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
