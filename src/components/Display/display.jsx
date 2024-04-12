import React, { useState, useEffect } from "react";
import axios from "axios";
import "./display.scss";

function display() {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products using axios
        const productResponse = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(productResponse.data);

        // Fetch services using axios
        const serviceResponse = await axios.get(
          "https://aguero.pythonanywhere.com/service/"
        );
        setServices(serviceResponse.data);

        // Fetch events using axios
        const eventResponse = await axios.get(
          "https://aguero.pythonanywhere.com/event/"
        );
        setEvents(eventResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Set interval for automatic sliding every 3 seconds
    const interval = setInterval(() => {
      setProducts((prevProducts) => [
        ...prevProducts.slice(1),
        prevProducts[0],
      ]);
      setServices((prevServices) => [
        ...prevServices.slice(1),
        prevServices[0],
      ]);
      setEvents((prevEvents) => [...prevEvents.slice(1), prevEvents[0]]);
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="display-container">
      <div className="category-container">
        <h2 className="category-title">OUR SUGGESTION</h2>
        <div className="images ">
          {/* Add Tailwind CSS class overflow-scroll */}
          {products.map((product, index) => (
            <img
              key={index}
              src={product?.imageUrl} // Add optional chaining here
              alt={`Product ${index + 1}`}
              className="mx-2"
            />
          ))}
        </div>
      </div>

      <div className="category-container">
        <div className="images ">
          {services.map((service, index) => (
            <img
              key={index}
              src={service?.imageUrl} // Add optional chaining here
              alt={`Service ${index + 1}`}
              className="mx-2"
            />
          ))}
        </div>
      </div>

      <div className="category-container">
        <div className="images ">
          {/* Add Tailwind CSS class overflow-scroll */}
          {events.map((event, index) => (
            <img
              key={index}
              src={event?.imageUrl} // Add optional chaining here
              alt={`Event ${index + 1}`}
              className="mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default display;
