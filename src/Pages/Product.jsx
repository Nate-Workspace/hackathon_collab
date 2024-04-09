import React, { useState } from 'react';
import Topratedproducts from '../components/Products/Topratedproducts'
import  Latestproduct from '../components/Products/Latestproduct'
import  Discoverproducts from '../components/Products/Discoverproducts'
import producthero from "../Assets/producthero.jpeg"
import producthero2 from "../Assets/producthero2.jpeg"
function Product() {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for products:', searchValue);
  };
  return (
    <div>
      <div className="bg-gray-900 text-white py-40 px-20" style={{ backgroundImage: `url(${producthero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Our Amazing Products</h1>
        <p className="text-lg mb-8">Explore our wide range of high-quality products at unbeatable prices.</p>
<form onSubmit={handleSubmit}>
  <div className="flex items-center justify-center">
    <div className="relative flex items-stretch w-full">
      <input
        type="text"
        placeholder="Search products"
        className="rounded-full py-2 px-4 border border-gray-200 text-gray-800 bg-white w-full pr-12"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type="submit" className="absolute inset-y-0 right-0 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4">
        <svg className="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21.71 20.29l-5.23-5.23A7.93 7.93 0 0018 10c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8a7.93 7.93 0 004.06-1.11l5.23 5.23a1 1 0 001.42 0 1 1 0 000-1.42zM4 10a6 6 0 116 6 6 6 0 01-6-6z"/>
        </svg>
        <span className="font-bold">Search</span>
      </button>
    </div>
  </div>
</form>

      </div>
    </div>
      <Topratedproducts/>
      <Latestproduct/>
      <div className="bg-gray-900 text-black py-32 px-10" style={{ backgroundImage: `url(${producthero2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="max-w-6xl mx-auto text-center" style={{ marginTop: '-50px' }}>
    <h1 className="text-6xl font-bold mb-4">Welcome to Our Store</h1>
    <p className="text-lg mb-8" style={{ fontSize: '30px' }}>Discover a world of unique products curated just for you.</p>
    <button className="bg-blue-500 hover:bg-blue-600  text-white py-2 px-6 rounded-md shadow-lg font-semibold transition duration-300">
      Explore Now
    </button>
  </div>
</div>
      <Discoverproducts/>
      
    </div>
  )
}

export default Product