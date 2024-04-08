import  LeftNav from './components/Navbar/LeftNav'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Product from './Pages/Product'
import Service from './Pages/Service'
import Event from './Pages/Event'
import './App.css'
import Home from './Pages/Home'
import ProfilePage from "./Pages/ProfilePage";
import MainContent from "./Pages/MainContent";
import Saved from "./Pages/Saved";
function App() {

  return (
    <div className='App'>
      <Router>
        <LeftNav/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path="/Profile" element={<ProfilePage/>} />
          <Route path='/Products' element={<Product />}/>
          <Route path='/Services' element={<Service />}/>
          <Route path='/Events' element={<Event />}/>
          <Route path='/Saved'  element={<Saved />}/>
          <Route path='/Create'  element={<MainContent />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
