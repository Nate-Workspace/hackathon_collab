import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";
function LeftNav() {
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showStudioDropdown, setShowStudioDropdown] = useState(false);

  const handleExploreClick = () => {
    setShowExploreDropdown(!showExploreDropdown);
    setShowStudioDropdown(false);
  };

  const handleStudioClick = () => {
    setShowStudioDropdown(!showStudioDropdown);
    setShowExploreDropdown(false);
  };

  return (
    <nav>
      <p>logo</p>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button onClick={handleExploreClick}>Explore</button>
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
          <li>
            <button onClick={handleStudioClick}>Studio</button>
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
    </nav>
  );
}

export default LeftNav;
