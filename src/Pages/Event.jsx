import React from 'react'
import UpcomingEvents from '../components/ui/UpcomingEvents'
import eventhero from "../Assets/eventhero.jpg"
function Event() {
  return (
    <div>
      <div className="bg-gray-900 text-white py-40 px-20"style={{ backgroundImage: `url(${eventhero})`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">Discover Our Exciting Events</h1>
    <p className="text-lg mb-8">Join us for unforgettable events filled with fun, learning, and networking opportunities.</p>
    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md shadow-lg font-semibold transition duration-300">
      View Events
    </button>
  </div>
</div>


      <UpcomingEvents/>
    </div>
  )
}

export default Event