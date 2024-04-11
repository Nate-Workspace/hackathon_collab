import React, { useState } from 'react';

const PostForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', { name, description, price, category, images });
    
    setName('');
    setDescription('');
    setPrice(0);
    setCategory('');
    setImages([]);
  };

  return (
    <div>
      <h5 className="text-lg font-bold mb-6 text-left text-blue-900">Post a New Product</h5>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-black">Name:</label>
          <input type="text" id="name" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-400  text-gray-700" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="description" className="block text-black">Description:</label>
          <textarea id="description" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-400  text-gray-700"  rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="price" className="block text-black">Price:</label>
          <input type="number" id="price" className="border  border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-400  text-gray-700 " min="0" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} required />
        </div>
        <div>
          <label htmlFor="category" className="block text-black">Category:</label>
          <select id="category" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-400  text-gray-700" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Personal Computer</option>
            <option value="electronics">Phone</option>
            <option value="clothes">Clothes</option>
            <option value="food">Food</option>
            <option value="stationary">Stationary</option>
            <option value="bag">Bag</option>
            <option value="sticker">Sticker</option>
            <option value="other">Other</option>
            
          </select>
        </div>
        <div>
          <label htmlFor="images" className="block text-black">Upload Image:</label>
          <input type="file" id="images" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-400  text-gray-700 " accept="image/*" multiple onChange={handleImageUpload} />
          <div className="mt-2 flex space-x-4">
            {images.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="w-20 h-20 object-cover rounded-md" />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
        <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">Submit</button>
  <button type="button" className="text-gray-700 bg-gray-300 py-2 px-4 rounded hover:bg-gray-400" onClick={() => {
    setName('');
    setDescription('');
    setPrice(0);
    setCategory('');
    setImages([]);
  }}>Cancel</button>
</div>

      </form>
    </div>
  );
};

export default PostForm;
