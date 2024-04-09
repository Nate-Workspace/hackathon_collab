import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";
import LoginTab from "./ui/LoginTab";
function LeftNav() {
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showStudioDropdown, setShowStudioDropdown] = useState(false);

  const handleExploreClick = () => {
    setShowExploreDropdown(true);
  };

  const handleStudioClick = () => {
    setShowStudioDropdown(true);
  };
  const handleEventLeave=()=>{
    setShowExploreDropdown(false)
  }
  const handleStudioLeave=()=>{
    setShowStudioDropdown(false)
  }

  return (
    <nav>
      <p>logo</p>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li onMouseEnter={handleExploreClick} onMouseLeave={handleEventLeave}>
            <button>Explore</button>
            {showExploreDropdown && (
              <ul>
                <li>
                  <Link to="/Products">Products</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
                <li>
                  <Link to="/Events">Events</Link>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={handleStudioClick} onMouseLeave={handleStudioLeave}>
            <button >Studio</button>
            {showStudioDropdown && (
              <ul>
                <li>
                  <Link to="/Saved">Saved</Link>
                </li>
                <li>
                  <Link to="/Create">Create</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <LoginTab/>
    </nav>
  );
}

export default LeftNav;
