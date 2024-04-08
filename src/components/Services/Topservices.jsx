import React, { useEffect, useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import saveIcon from '../../Assets/saveicon.png';
import savedIcon from '../../Assets/savedicon.png';

function Topservices() {
  const [featuredServices, setFeaturedServices] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [savedServices, setSavedServices] = useState([]);

  const getFeaturedServices = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setFeaturedServices(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeaturedServices();
  }, []);

  const scrollContainer = (scrollValue) => {
    setScrollLeft(scrollLeft + scrollValue);
    document.getElementById('scroll-content').scrollLeft += scrollValue;
  };

  
  const handleMouseEnter = (serviceId) => {
    setIsHovered(true);
    setHoveredImage(serviceId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredImage(null);
  };

  const toggleSaved = (serviceId) => {
    if (savedServices.includes(serviceId)) {
      setSavedServices(savedServices.filter((id) => id !== serviceId));
    } else {
      setSavedServices([...savedServices, serviceId]);
    }
  };

  const isSaved = (serviceId) => savedServices.includes(serviceId);

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

  return (
    <div className="p-8 relative">
             <div className="text-center font-bold text-3xl my-8 relative">
  <p 
          className="inline-block relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
  >
    <span className="font-light text-lg">SERVICES</span><br />
    Top Services
  </p>
 <span style={lineStyle}></span>
</div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(-100)}
        >
          <FaCaretLeft />
        </button>
        <div
          id="scroll-content"
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-4"
          style={{ scrollBehavior: 'smooth', scrollLeft: scrollLeft + 'px' }}
        >
          {featuredServices.map((service) => (
            <div 
              key={service.id} 
              className="w-64 border border-gray-300 rounded-lg p-2 mb-4 relative"
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col items-center relative">
                <div className="w-64 h-64 overflow-hidden mb-2 relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <img src={isSaved(service.id) ? savedIcon : saveIcon} alt="Save" style={saveIconStyle} onClick={() => toggleSaved(service.id)}/>

                </div>
                <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal font-bold">{service.title}</p>
                <p className="text-gray-600">{service.rating.rate} stars</p>
                <p className="text-gray-600 text-center">Price: ${service.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(100)}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
    
  );
}

export default Topservices;
