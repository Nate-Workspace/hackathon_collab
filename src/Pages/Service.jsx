import React from 'react';
import Topservices from '../components/ui/Topservices'
import OurServices from '../components/ui/OurServices'
import servicehero from "../Assets/servicehero.jpg"
function Service() {
  return (
    <div>
  <div className="bg-gray-900 text-white py-40 px-20" style={{ backgroundImage: `url(${servicehero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-6xl mx-auto text-center relative">
      <div className="absolute inset-0 bg-slate-400 opacity-70 backdrop-filter backdrop-blur-lg"></div>
      <div className="relative py-5">
        <h1 className="text-4xl font-bold mb-4 text-black">Explore our Services</h1>
        <p className="text-lg mb-8 text-gray-950">Explore our wide range of highly qualified service providers at unbeatable prices.</p>
        {/* <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md shadow-lg font-semibold transition duration-300">
          Shop Now
        </button> */}
        <input placeholder='Search for services' className='bg-white rounded-full pl-6 py-1.5 w-96 text-black' />
      </div>
    </div>
  </div>
  <Topservices />
  <OurServices />
</div>
  );
}

export default Service;
