import React, { useEffect, useState } from 'react';
import { IoFilterSharp } from "react-icons/io5";
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import saveIcon from '../../Assets/saveicon.png';
import savedIcon from '../../Assets/savedicon.png';

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setShowCategories] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [savedEvents, setSavedEvents] = useState([]);

  const getExploreEvents = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getExploreEvents();
  }, []);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleMouseEnter = (eventId) => {
    setIsHovered(true);
    setHoveredImage(eventId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredImage(null);
  };

  const toggleSaved = (eventId) => {
    if (savedEvents.includes(eventId)) {
      setSavedEvents(savedEvents.filter((id) => id !== eventId));
    } else {
      setSavedEvents([...savedEvents, eventId]);
    }
  };

  const isSaved = (eventId) => savedEvents.includes(eventId);
  
  const lineStyle = {
    width: isHovered ? '35%' : '0%',
    height: '2px',
    backgroundColor: 'rgb(11, 11, 63)',
    display: 'block',
    margin: '8px auto',
    transition: 'width 0.7s',
  };
  const saveIconStyle = {
    display: isHovered ? 'block' : 'none',
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: 'white' ,
    borderRadius: '50%',
    padding: '5px',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  };
  

  // Calculate the index of the first and last event to display
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-8  relative">
     <div className="text-center font-bold text-3xl my-8 relative">
  <p 
   className="inline-block relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
  >
    <span className="font-light text-lg">EVENTS</span><br />
   Upcoming Events
  </p>
 <span style={lineStyle}></span>
</div>
      <div className="flex justify-end mr-20 mb-4 relative">
        <button onClick={toggleCategories} className="flex items-center font-bold py-2 px-4 rounded-full border border-green-600 ">
           <IoFilterSharp className="mr-2" />
              Filters
        </button>
      </div>
      {showCategories && (
        <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md py-2 px-4 z-10">
          <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Conferences</li>
          <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Workshops</li>
          <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Seminars</li>
          <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Exhibitions</li>
        </ul>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        {currentEvents.map((event) => (
          <div 
              key={event.id} 
              className="w-64 border border-gray-300 rounded-lg p-2 mb-4 relative"
              onMouseEnter={() => handleMouseEnter(event.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col items-center relative">
                <div className="w-64 h-64 overflow-hidden mb-2 relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                   <img src={isSaved(event.id) ? savedIcon : saveIcon} alt="Save" style={saveIconStyle} onClick={() => toggleSaved(event.id)}/>

                </div>
                <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal font-bold">{event.title}</p>
                <p className="text-gray-600">{event.rating.rate} stars</p>
                <p className="text-gray-600 text-center">Price: ${event.price}</p>
              </div>
            </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200 mr-4"
        >
          <FaCaretLeft /> {/* Left Icon */}
        </button>
        <p>{currentPage}</p>
        <button
          onClick={handleNextPage}
          disabled={currentEvents.length < itemsPerPage}
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200 ml-4"
        >
          <FaCaretRight /> {/* Right Icon */}
        </button>
      </div>
    </div>
  );
}

export default UpcomingEvents;
