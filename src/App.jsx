import  LeftNav from './components/LeftNav'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Product from './Pages/Product'
import Service from './Pages/Service'
import Event from './Pages/Event'
function App() {

  return (
    <div className='App'>
      <Router>
        <LeftNav/>
        <Routes>
          <Route path='/'/>
          <Route path='/Products' element={<Product />}/>
          <Route path='/Services' element={<Service />}/>
          <Route path='/Events' element={<Event />}/>
          <Route path='/Saved'/>
          <Route path='/Create'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
