import React from 'react';
import Topservices from '../components/ui/Topservices'
import OurServices from '../components/ui/OurServices'
import servicehero from "../Assets/servicehero.jpg"
function Service() {
  return (
    <div>
      <div className="bg-gray-900 text-white py-40 px-20 " style={{ backgroundImage: `url(${servicehero})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">Discover Our Featured Services</h1>
    <p className="text-lg mb-8">Explore our wide range of high-quality services tailored to meet your needs.</p>
    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md shadow-lg font-semibold transition duration-300">
      Explore Services
    </button>
  </div>
</div>
      <Topservices />
      <OurServices/>
      
    </div>
  );
}

export default Service;
