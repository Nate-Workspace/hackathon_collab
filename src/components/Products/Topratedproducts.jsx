import React, { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import SingleProduct from "../Single/SingleProduct";

function TopratedProducts() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [savedProducts, setSavedProducts] = useState([]);

  const getLatestProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLatestProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLatestProducts();
  }, []);

  const scrollContainer = (scrollValue) => {
    setScrollLeft(scrollLeft + scrollValue);
    document.getElementById("scroll-content").scrollLeft += scrollValue;
  };

  const handleMouseEnter = (productId) => {
    setIsHovered(true);
    setHoveredImage(productId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredImage(null);
  };

  const toggleSaved = (productId) => {
    if (savedProducts.includes(productId)) {
      setSavedProducts(savedProducts.filter((id) => id !== productId));
    } else {
      setSavedProducts([...savedProducts, productId]);
    }
  };

  const isSaved = (productId) => savedProducts.includes(productId);

  const lineStyle = {
    width: isHovered ? "35%" : "0%",
    height: "2px",
    backgroundColor: "rgb(11, 11, 63)",
    display: "block",
    margin: "8px auto",
    transition: "width 0.7s",
  };
  const saveIconStyle = {
    display: isHovered ? "block" : "none",
    position: "absolute",
    top: "8px",
    right: "8px",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "5px",
    cursor: "pointer",
    transition: "opacity 0.3s",
  };

  return (
    <div className="p-8 relative">
      <div className="text-center font-bold text-3xl my-8 relative">
        <p
          className="inline-block relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="font-light text-lg">SHOP</span>
          <br />
          Latest Products
        </p>
        <span style={lineStyle}></span>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(-100)}
        >
          <FaCaretLeft />
        </button>
        <div
          id="scroll-content"
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-4 relative"
          style={{ scrollBehavior: "smooth", scrollLeft: scrollLeft + "px" }}
        >
          {latestProducts.map((product) => (
            <SingleProduct
              id={product.id}
              title={product.title}
              image={product.image}
              rating={product.rating.rate}
              price={product.price}
              saveIconStyle={saveIconStyle}
              toggleSaved={toggleSaved}
              isHovered={isHovered}
              hoveredImage={hoveredImage}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              isSaved={isSaved}
            />
          ))}
        </div>
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(100)}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
}

export default TopratedProducts;
