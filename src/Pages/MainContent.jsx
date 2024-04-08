import React, { useState } from 'react';
import PostForm from './EditedPostForm';
import ServiceForm from './ServicePostForm';
import EventForm from './EventPostForm';

const MainContent = () => {
  const [selectedPage, setSelectedPage] = useState('product');

  const renderPage = () => {
    switch (selectedPage) {
      case 'product':
        return <PostForm />;
      case 'service':
        return <ServiceForm />;
      case 'event':
        return <EventForm />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8"> 
      <nav className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <button className={`mr-2 ${selectedPage === 'product' ? 'text-green-500' : 'text-gray-700'}`} onClick={() => setSelectedPage('product')}>Product</button>
          <button className={`mr-2 ${selectedPage === 'service' ? 'text-green-500' : 'text-gray-700'}`} onClick={() => setSelectedPage('service')}>Service</button>
          <button className={`mr-2 ${selectedPage === 'event' ? 'text-green-500' : 'text-gray-700'}`} onClick={() => setSelectedPage('event')}>Event</button>
        </div>
        
      </nav>
      {renderPage()}
    </div>
  );
};

export default MainContent;
