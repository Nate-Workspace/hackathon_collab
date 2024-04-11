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
    <div className="flex justify-center flex-col items-center h-screen bg-slate-300">
      
      
    
  <div className="max-w-4xl mx-auto px-4 pb-8 pt-4 bg-white rounded-lg shadow-md">
  <div className="space-x-4 flex justify-between z-1 items-center mb-4">
        <button className={`mr-2 ${selectedPage === 'product' ? 'text-blue-800' : 'text-gray-700'}`} onClick={() => setSelectedPage('product')}>Product</button>
        <button className={`mr-2 ${selectedPage === 'service' ? 'text-blue-800' : 'text-gray-700'}`} onClick={() => setSelectedPage('service')}>Service</button>
        <button className={`mr-2 ${selectedPage === 'event' ? 'text-blue-800' : 'text-gray-700'}`} onClick={() => setSelectedPage('event')}>Event</button>
      </div>
    {renderPage()}
  </div>
</div>
  );
};

export default MainContent;
