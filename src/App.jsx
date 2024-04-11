import  LeftNav from './components/Navbar/LeftNav'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Product from './Pages/Product'
import Service from './Pages/Service'
import Event from './Pages/Event'
import './App.css'
import Home from './Pages/Home'
<<<<<<< HEAD
import Saved from './Pages/Saved'
import MainContent from './Pages/MainContent'
import ProfilePage from './Pages/ProfilePage'
import LoginTab from './components/ui/LoginTab'

=======
import ProfilePage from "./Pages/ProfilePage";
import MainContent from "./Pages/MainContent";
import Saved from "./Pages/Saved";
import ProductDetails from './components/Details/ProductDetails';
import EventDetails from './components/Details/EventDetails';
import ServiceDetails from './components/Details/ServiceDetails';
>>>>>>> e8b3d9d0653fa1eb08bd97ab20114b068cb387ce
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
<<<<<<< HEAD
          <Route path='/Saved' element={<Saved/>}/>
          <Route path='/Create'element={<MainContent/>}/>
          <Route path="/profile" element={<ProfilePage/>} />
=======
          <Route path='/product/:id' element={<ProductDetails />}/>
          <Route path='/event/:id' element={<EventDetails  />}/>
          <Route path='/service/:id' element={<ServiceDetails  />}/>
          <Route path='/Saved'  element={<Saved />}/>
          <Route path='/Create'  element={<MainContent />}/>
>>>>>>> e8b3d9d0653fa1eb08bd97ab20114b068cb387ce
        </Routes>
      </Router>
    </div>
  )
}

export default App
