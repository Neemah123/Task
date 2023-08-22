import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="desktop">
        <nav className="navigation">
          <div>
            <Link to={`/`} className="link">
              <p>LOGO</p>
            </Link>
          </div>
          <div>
            <ul className="navmenu">
              <li>
                <Link to={`/`} className="link">
                  PAYMENTS
                </Link>
              </li>
              <li>
                <Link to={`/`} className="link">
                  POINT OF SALE
                </Link>
              </li>
              <li>
                <Link to={`/`} className="link">
                  PAYROLL
                </Link>
              </li>
              <li>
                <Link to={`/`} className="link">
                  CAPITAL
                </Link>
              </li>
              <li>
                <Link to={`/`} className="link">
                  MORE
                </Link>
              </li>
            </ul>
          </div>

          <div className="buttoncontainer">
            <button className="navbutton">
              <Link to="" className="buttonlink">
                SIGN IN
              </Link>
            </button>
            <button className="navbutton">
              <Link to="" className="buttonlink">
                SHOP
              </Link>
            </button>
          </div>
        </nav>
      </div>
      <div className="mobile">
        <div className="mobiletop">
          <Link to={`/`} className="logo">
            <p>LOGO</p>
          </Link>
          <button className="hamburger">
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mobilebottom">
          <ul className="navmenu">
            <li>
              <Link to={`/`} className="link">
                PAYMENTS
              </Link>
            </li>
            <li>
              <Link to={`/`} className="link">
                POINT OF SALE
              </Link>
            </li>
            <li>
              <Link to={`/`} className="link">
                PAYROLL
              </Link>
            </li>
            <li>
              <Link to={`/`} className="link">
                CAPITAL
              </Link>
            </li>
            <li>
              <Link to={`/`} className="link">
                MORE
              </Link>
            </li>
          </ul>
          <button className="navbuttonmob">
            <Link to="" className="buttonlink">
              SIGN IN
            </Link>
          </button>
          <button className="navbuttonmob">
            <Link to="" className="buttonlink">
              SHOP
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
