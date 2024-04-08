import React from 'react'
import UpcomingEvents from '../components/ui/UpcomingEvents'
import eventhero from "../Assets/eventhero.jpg"
function Event() {
  return (
    <div>
  <div className="bg-gray-900 text-white py-40 px-20" style={{ backgroundImage: `url(${eventhero})`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
    <div className="max-w-6xl mx-auto text-center relative">
      <div className="absolute inset-0 bg-slate-400 opacity-70 backdrop-filter backdrop-blur-lg"></div>
      <div className="relative py-5">
        <h1 className="text-4xl font-bold mb-4 text-black">Events to attend</h1>
        <p className="text-lg mb-8 text-gray-950">Be updated by attending our events.</p>
        {/* <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md shadow-lg font-semibold transition duration-300">
          Shop Now
        </button> */}
        <input placeholder='Search for Evnets' className='bg-white rounded-full pl-6 py-1.5 w-96 text-black' />
      </div>
    </div>
  </div>
  <UpcomingEvents/>
</div>
  )
}

export default Event