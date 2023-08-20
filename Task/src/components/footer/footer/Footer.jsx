import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "./logo-icon/facebook.png";
import discord from "./logo-icon/discord.png";
import linkedin from "./logo-icon/linkedin.png";
import instagram from "./logo-icon/instagram.png";
import twitter from "./logo-icon/twitter.png";
import vector from "./logo-icon/Vector.png";
import logo from "./logo-icon/Logo.png";
import language from "./logo-icon/language.png";
import icons from "./logo-icon/Icons.png";

function Footer() {
  return (
    <>
      <div className="footer_background">
        <div>
          <img src={logo} alt="logo" className="footer_image" />
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
            <img src={facebook} alt="facebook icon" />
            <img src={linkedin} alt="linkin icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={discord} alt="discord icon" />
          </div>
        </div>
      </div>
      <div className="terms">
        <ul>
          <li>Terms </li>
          <li>
            <img src={vector} alt="vector" />
          </li>
          <li>Privacy </li>
          <li>
            <img src={vector} alt="vector" />
          </li>
          <li>Security </li>
          <li>@ThriveTrack</li>
        </ul>
        <div className="last_terms">
          <ul>
            <li>
              <img src={language} alt="language icon" />
            </li>
            <li>English</li>
            <li>
              <img src={icons} alt="icon" className="last_terms_icon" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
