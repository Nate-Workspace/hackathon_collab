import LeftNav from "./components/Navbar/LeftNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Service from "./Pages/Service";
import Event from "./Pages/Event";
import "./App.css";
import Home from "./Pages/Home";

import Saved from "./Pages/Saved";

import ProfilePage from "./Pages/ProfilePage";
import MainContent from "./Pages/MainContent";
import Dashboard from "./Pages/Dashboard";
import ProductDetails from "./components/Details/ProductDetails";
import EventDetails from "./components/Details/EventDetails";
import ServiceDetails from "./components/Details/ServiceDetails";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <LeftNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Services" element={<Service />} />
          <Route path="/Events" element={<Event />} />

          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/Saved" element={<Saved />} />
          <Route path="/Create" element={<MainContent />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
