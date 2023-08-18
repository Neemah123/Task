import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer_background">
        <div>
          <img src="Logo.png" className="footer_image" />
        </div>
        <div className="footer_text">
          <div className="footer_features footer">
            <ul>
              <li>
                <h4>Features</h4>
              </li>
              <li>
                <Link>How it works</Link>
              </li>
              <li>
                <Link>For teams</Link>
              </li>
              <li>
                <Link>Task Management</Link>
              </li>
              <li>
                <Link>Collaboration</Link>
              </li>
            </ul>
          </div>
          <div className="footer_resources footer">
            <ul>
              <li>
                <h4>Resources</h4>
              </li>
              <li>
                <Link>Download Apps</Link>
              </li>
              <li>
                <Link>Help Center</Link>
              </li>
              <li>
                <Link>FAQs</Link>
              </li>
              <li>
                <Link>Inspiration Hub</Link>
              </li>
            </ul>
          </div>
          <div className="footer_contact footer">
            <ul>
              <li>
                <h4>Contact</h4>
              </li>
              <li>
                <Link>Get in Touch</Link>
              </li>
              <li>
                <Link>Feedback</Link>
              </li>
              <li>
                <Link>PartnerShip</Link>
              </li>
            </ul>
          </div>
          <div className="footer_company footer">
            <ul>
              <li>
                <h4>Company</h4>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="social_media">
            <img src="facebook.png" />
            <img src="linkedin (2).png" />
            <img src="twitter (2).png" />
            <img src="instagram.png" />
            <img src="discord (2).png" />
          </div>
        </div>
      </div>
      <div className="terms">
        <ul>
          <li>Terms </li>
          <li>
            <img src="Vector 3.png" />
          </li>
          <li>Privacy </li>
          <li>
            <img src="Vector 3.png" />
          </li>
          <li>Security </li>
          <li>@ThriveTrack</li>
        </ul>
        <div className="last_terms">
          <ul>
            <li>
              <img src="language.png" />
            </li>
            <li>English</li>
            <li>
              <img src="Icons.png" className="last_terms_icon" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
