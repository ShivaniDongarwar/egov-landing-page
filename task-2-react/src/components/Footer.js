import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* LEFT: LOGO + TEXT */}
          <div className="col-md-4">
            <h3 className="logo">eGov</h3>
            <p className="footer-text">
              Catalysing digital transformation in public service delivery at
              speed &amp; scale.
            </p>
            {/* SOCIAL ICONS */}
            <div className="social-icons">
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
              <a href="#">
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>
          {/* MIDDLE: LINKS */}
          <div className="col-md-4">
            <h5>Useful Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">CTA Section</a>
              </li>
            </ul>
          </div>
          {/* RIGHT: SUBSCRIBE */}
          <div className="col-md-4">
            <h5>Subscribe Now</h5>
            <p>Receive updates in your inbox.</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>➤</button>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="footer-bottom text-center mt-4">
          <p>© 2026 eGov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
