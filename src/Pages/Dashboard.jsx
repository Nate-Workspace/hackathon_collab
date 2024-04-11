import React from 'react'
import '../components/Dashboard/dashboard.css'
import Intro from '../components/Dashboard/Intro'
import SavedEvents from '../components/Saved/SavedEvents'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Intro/>
      <SavedEvents/>
      <SavedEvents/>
      <SavedEvents/>
    </div>
  )
}

export default Dashboard
