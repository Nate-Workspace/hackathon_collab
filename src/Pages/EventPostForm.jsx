import React, { useState } from 'react';

const EventForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [host, setHost] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', { name, description, date, time, location, host, images });
    
    setName('');
    setDescription('');
    setDate('');
    setTime('');
    setLocation('');
    setHost('');
    setImages([]);
  };

  return (
    <div>
      <h5 className="text-xl font-bold mb-6 text-left text-green-500">Post a New Event</h5>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" id="name" className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <textarea id="description" className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="date" className="block text-gray-700">Date:</label>
          <input type="date" id="date" className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="time" className="block text-gray-700"> Time:</label>
          <input type="time" id="time" className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700">Location:</label>
          <input type="text" id="location" className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="host" className="block text-gray-700">Host:</label>
          <input type="text" id="host" className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500" value={host} onChange={(e) => setHost(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="images" className="block text-gray-700">Upload Image:</label>
          <input type="file" id="images" className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500" accept="image/*" multiple onChange={handleImageUpload} />
          <div className="mt-2 flex space-x-4">
            {images.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="w-20 h-20 object-cover rounded-md" />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Submit</button>
          <button type="button" className="bg-green-300 text-gray-700 py-2 px-4 rounded hover:bg-green-400" onClick={() => {
            setName('');
            setDescription('');
            setDate('');
            setTime('');
            setLocation('');
            setHost('');
            setImages([]);
          }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
