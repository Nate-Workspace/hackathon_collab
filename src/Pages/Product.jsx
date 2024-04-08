import React, { useState } from 'react'
import Topratedproducts from '../components/Products/Topratedproducts'
import  Latestproduct from '../components/Products/Latestproduct'
import  Discoverproducts from '../components/Products/Discoverproducts'
import producthero from "../Assets/producthero.jpeg"
import producthero2 from "../Assets/producthero2.jpeg"


import { HoverContext } from '../Context/HoverContext'

function Product() {

  const [isHovered, setIsHovered]= useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);


  return (
    <div>
      <HoverContext.Provider value={{isHovered,setIsHovered,hoveredImage,setHoveredImage}}>
      <div className="bg-gray-900 text-white py-40 px-20" style={{ backgroundImage: `url(${producthero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl mx-auto text-center relative">

        {/* -------------------Editing the banner -------------------- */}
  <div className="absolute inset-0 bg-slate-400 opacity-70 backdrop-filter backdrop-blur-lg"></div>
  <div className="relative py-5">
    <h1 className="text-4xl font-bold mb-4 text-black">Discover Our Amazing Products</h1>
    <p className="text-lg mb-8 text-gray-950">Explore our wide range of high-quality products at unbeatable prices.</p>
    {/* <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md shadow-lg font-semibold transition duration-300">
      Shop Now
    </button> */}
    <input placeholder='Search for products' className='bg-white rounded-full pl-6 py-1.5 w-96 text-black'/>
  </div>
</div>

{/* --------------------------------------------------------- */}
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

      
      </HoverContext.Provider>
      
    </div>
  )
}

export default Product