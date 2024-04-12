import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import "./LeftNav.css";
function LeftNav() {
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showStudioDropdown, setShowStudioDropdown] = useState(false);

  //--------------------NavBar scroll state--------------------

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 20; // Adjust this value to set the scroll threshold for changing the background color

      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //-------------------------------------------

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

  const handleClose = () => {
    setMenuOpen(false);
    console.log(menuOpen);
  };

  return (
    <nav
      className={`${isScrolled ? "scrolled" : ""} ${
        showStudioDropdown ? "hovered" : ""
      } ${showExploreDropdown ? "hovered" : ""}`}
    >
      <div className="nav-links">
        <p className="logo">LOGO</p>

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
                {/* <hr /> */}
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
                {/* <hr /> */}
                <li>
                  <Link to="/Saved">SAVED</Link>
                </li>
                <li>
                  <Link to="/Create">CREATE</Link>
                </li>
                <li>
                  <Link to="/Profile">PROFILE</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="about-us">
            <Link to="/AboutUs">ABOUT US</Link>
          </li>
        </ul>
        <li className="logout">
          <Link to="/Logout">LOGOUT</Link>
        </li>
      </div>
    </nav>
  );
}

// const Dropnav=()=>{
//   return(
//     <div className="flex flex-row justify-center items-center">
//     <IoCartOutline size={20} color="gray"/>
//     <p className="ml-1.5">PRODUCTS</p>
//     </div>
//   )
// }

export default LeftNav;
