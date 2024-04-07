import React from 'react'
import Topratedproducts from '../components/ui/Topratedproducts'
import  Latestproduct from '../components/ui/Latestproduct'
import  Discoverproducts from '../components/ui/Discoverproducts'
import producthero from "../Assets/producthero.jpeg"
import producthero2 from "../Assets/producthero2.jpeg"
function Product() {
  return (
    <div>
      <div className="bg-gray-900 text-white py-40 px-20" style={{ backgroundImage: `url(${producthero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">Discover Our Amazing Products</h1>
    <p className="text-lg mb-8">Explore our wide range of high-quality products at unbeatable prices.</p>
    <button className="bg-green-700 hover:bg-green-800  text-white py-2 px-6 rounded-md shadow-lg font-semibold transition duration-300">
      Shop Now
    </button>
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