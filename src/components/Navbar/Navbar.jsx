import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();
  const { isAuthenticated, isLoading } = useAuth();
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showStudioDropdown, setShowStudioDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 20;
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleExploreClick = () => {
    setShowExploreDropdown(true);
  };

  const handleStudioClick = () => {
    setShowStudioDropdown(true);
  };

  const handleEventLeave = () => {
    setShowExploreDropdown(false);
  };

  const handleStudioLeave = () => {
    setShowStudioDropdown(false);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <ul className="ul">
          <li className="home">
            <Link to="/">HOME</Link>
          </li>
          <li
            className="button"
            id="button1"
            onMouseEnter={handleExploreClick}
            onMouseLeave={handleEventLeave}
          >
            EXPLORE
            {showExploreDropdown && (
              <ul
                className="dropdown"
                onMouseEnter={handleExploreClick}
                onMouseLeave={handleEventLeave}
              >
                <li>
                  <Link to="/Products">PRODUCTS</Link>
                </li>
                <li>
                  <Link to="/Services">SERVICES</Link>
                </li>
                <li>
                  <Link to="/Events">EVENTS</Link>
                </li>
              </ul>
            )}
          </li>
          {isAuthenticated && !isLoading && (
            <li
              className="button"
              id="button2"
              onMouseEnter={handleStudioClick}
              onMouseLeave={handleStudioLeave}
            >
              STUDIO
              {showStudioDropdown && (
                <ul
                  className="dropdown"
                  onMouseEnter={handleStudioClick}
                  onMouseLeave={handleStudioLeave}
                >
                  <li>
                    <Link to="/Saved">SAVED</Link>
                  </li>
                  <li>
                    <Link to="/Create">CREATE</Link>
                  </li>
                </ul>
              )}
            </li>
          )}
          {!isAuthenticated && !isLoading && (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/SignIn">Sign In</Link>
              </li>
            </>
          )}
        </ul>
        {isAuthenticated && !isLoading && (
          <li>
            <Link to="/Profile" className="absolute right-5 bottom-3">
              <FaUserCircle color="grey" size={40} />
            </Link>
          </li>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
