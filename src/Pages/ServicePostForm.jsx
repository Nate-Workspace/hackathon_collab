import React, { useState } from 'react';

const ServiceForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', { name, description, category, images });
    
    setName('');
    setDescription('');
    setCategory('');
    setImages([]);
  };

  return (
    <div>
      <h5 className="text-xl font-bold mb-6 text-left text-green-500">Post a New Service</h5>
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
          <label htmlFor="category" className="block text-gray-700">Category:</label>
          <select id="category" className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500" value={category} onChange={(e) => setCategory(e.target.value)} required>   
            <option value="maintenance">Maintenance</option>
            <option value="repair">Repair</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
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
            setCategory('');
            setImages([]);
          }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
