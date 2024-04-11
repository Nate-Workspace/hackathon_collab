import React, { useEffect, useState } from 'react';
import { IoFilterSharp } from "react-icons/io5";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import saveIcon from '../../Assets/saveicon.png';
import savedIcon from '../../Assets/savedicon.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DiscoverProducts() {
  const [discoverProducts, setDiscoverProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setShowCategories] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [savedProducts, setSavedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
 const [priceFilter, setPriceFilter] = useState(null);

  const getDiscoverProducts = async (category = null, priceFilter = null) => {
  try {
    let apiUrl = 'https://aguero.pythonanywhere.com/product/';
    const params = new URLSearchParams();

    if (category) {
      params.append('type', category);
    }

    if (priceFilter) {
  apiUrl += (category ? '&' : '') + priceFilter;
}

    
apiUrl += (category || priceFilter) ? '?' : '';
apiUrl += params.toString();

    console.log("API URL:", apiUrl);
    const response = await axios.get(apiUrl);
    setDiscoverProducts(response.data);
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};

  useEffect(() => {
    getDiscoverProducts();
  }, []);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
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
    width: isHovered ? '35%' : '0%',
    height: '2px',
    backgroundColor: 'rgb(11, 11, 63)',
    display: 'block',
    margin: '8px auto',
    transition: 'width 0.7s',
  };
  const saveIconStyle = {
    display: isHovered ? 'block' : 'none',
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: 'white' ,
    borderRadius: '50%',
    padding: '5px',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  };

  const indexOfLastItem = currentPage * 8;
  const indexOfFirstItem = indexOfLastItem - 8;
  const currentProducts = discoverProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategoryChange = (category, priceFilter = null) => {
    setSelectedCategory(category);
    setShowCategories(false);
    getDiscoverProducts(category, priceFilter);
  };




  
  return (
    <div className="p-8 bg-sky-50 relative">
      <div className="text-center font-bold text-3xl my-8 relative">
        <p 
          className="inline-block relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="font-light text-lg">Shop by category</span><br />
          <span className=" text-5xl">Shop by category</span>
        </p>
        <span style={lineStyle}></span>
      </div>

      <div className="flex justify-end mr-20 mb-4 relative">
        <button onClick={toggleCategories} 
        className="flex items-center font-bold py-1 px-2 rounded-full hover:bg-gray-300 relative border-2 border-black "
        style={{ zIndex: showCategories ? '20' : 'auto' }}
        >
          <IoFilterSharp className="mr-2" />
          Filters
        </button>
        </div>
        <div className={`absolute left-0 top-0 h-full w-full max-w-sm bg-white border border-gray-300 rounded shadow-md py-8 px-16 z-10 transform transition-transform ${showCategories ? 'translate-x-0' : '-translate-x-full'}`}>
         <h2 className="text-3xl font-light mb-4">Filters</h2>
         <div>
      <h3 className="text-md font-semibold mb-1">Categories</h3>
        <ul>
          <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange("FD")}>
            <input type="radio" id="Food" name="category" checked={selectedCategory === "FD"}  />
            <label htmlFor="Food">Food</label>
          </li>
          <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange("ST")}>
            <input type="radio" id="Stationery" name="category" checked={selectedCategory === "ST"}  />
            <label htmlFor="Stationery">Stationery</label>
          </li>
          <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange("PC")}>
            <input type="radio" id="Personal Computer" name="category" checked={selectedCategory === "PC"}  />
            <label htmlFor="Personal Computer">Personal Computer</label>
          </li>
          <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange("MB")}>
            <input type="radio" id="Mobile" name="category" checked={selectedCategory === "MB"}  />
            <label htmlFor="Mobile">Mobile</label>
          </li>
          <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange("SK")}>
            <input type="radio" id="Sticker" name="category" checked={selectedCategory === "SK"}  />
            <label htmlFor="Sticker">Sticker</label>
          </li>
          <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange("CL")}>
            <input type="radio" id="Bag" name="category" checked={selectedCategory === "CL"}  />
            <label htmlFor="Bag">Bag</label>
          </li>
          <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange("CL")}>
            <input type="radio" id="Clothes" name="category" checked={selectedCategory === "CL"}  />
            <label htmlFor="Clothes">Clothes</label>
          </li>
           <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange("PC")}>
            <input type="radio" id="Other Electronics" name="category" checked={selectedCategory === "PC"}  />
            <label htmlFor="Other Electronics">Other Electronics</label>
          </li>
        </ul>
      </div>
       <div>
    <h3 className="text-md font-semibold mb-1 mt-2">Price (Birr)</h3>
    <ul>
      <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange(null, "?price__gt=1000")}>
            <input type="radio" id="over 1000" name="category"  />
            <label htmlFor="over 1000">Over Birr 1000 </label>
      </li>
      <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange(null, "?price__lt=300")}>
            <input type="radio" id="under 300" name="category" />
            <label htmlFor="under 300">Under Birr 300</label>
          </li>
      <li className="cursor-pointer py-1 px-2 " onClick={() => handleCategoryChange(null, "?price__gt=500&price__lt=1000")}>
            <input type="radio" id="bwt 500&1000" name="category" />
            <label htmlFor="bwt 500&1000">Birr 500 to Birr 1000</label>
          </li>
    </ul>
  </div>
</div>


      <div className="flex flex-wrap justify-center gap-4">
        {currentProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div
              key={product.id}
              className="w-64 rounded-lg p-2 mb-4 relative hover:scale-110 hover:opacity-90 transition duration-300 ease-in-out cursor-pointer shadow-lg"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: isHovered && hoveredImage === product.id ? "#E5E7EB" : "white" }}
            >
              <div className="flex flex-col items-center relative">
                <div className="w-64 h-64 overflow-hidden mb-2 relative rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {isHovered && hoveredImage === product.id && (
                    <img
                      src={isSaved(product.id) ? savedIcon : saveIcon}
                      alt="Save"
                      style={saveIconStyle}
                      onClick={() => toggleSaved(product.id)}
                    />
                  )}
                </div>
                <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal font-bold">
                  {product.title}
                </p>
                <p className="text-gray-600">{product.rating} stars</p>
                <p className="text-gray-600 text-center">
                  Price: ${product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
        {/* Render empty placeholders if there are less than 8 products */}
        {currentProducts.length < 8 && [...Array(8 - currentProducts.length)].map((_, index) => (
          <div key={`placeholder-${index}`} className="w-64 h-64"></div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200 mr-4"
        >
          <FaCaretLeft /> {/* Left Icon */}
        </button>
        <p>{currentPage}</p>
        <button
          onClick={handleNextPage}
          disabled={currentProducts.length < 8}
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200 ml-4"
        >
          <FaCaretRight /> {/* Right Icon */}
        </button>
      </div>
    </div>
  );
}

export default DiscoverProducts;
