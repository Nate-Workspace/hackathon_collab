import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Phone, BookmarkSimple,BookBookmark, Star } from "phosphor-react";
import ReviewsCard from "../Single/ReviewsCard.jsx";
import saveIcon from "../../Assets/saveicon.png";
import savedIcon from "../../Assets/savedicon.png";
import StarRating from "../StarRating/StarRating.jsx";
import axios from "axios";
import savedPostFetch from "../savedPost/savedPostFetch.jsx";
import deletePost from "../savedPost/deletePost.jsx";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [savedEvents, setSavedEvents] = useState([]);
  const [saveState, setSaveState] = useState(false);
  const [saveId,setSaveId]= useState(0);

  

  useEffect(() => {
    fetch(`https://aguero.pythonanywhere.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));

    fetch("https://aguero.pythonanywhere.com/product/")
      .then((res) => res.json())
      .then((data) => {
        // Exclude the current product
        const related = data.filter((product) => product.id !== parseInt(id));
        // Limit the number of related products to display
        const limitedRelated = related.slice(0, 20);
        setRelatedProducts(limitedRelated);
      });
    fetch(
      "https://random-data-api.com/api/v3/projects/e657498e-1ee1-4ec6-a8ed-ecfef7f0cc48?api_key=HF9K2pVV3eyFg790PkXc0w"
    )
      .then((response) => response.json())
      .then((data) => setReviews(data.json_array));
  }, [id]);

  const handleMouseEnter = (eventId) => {
    setIsHovered(true);
    setHoveredImage(eventId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredImage(null);
  };

  const toggleSaved = (eventId) => {
    if (savedEvents.includes(eventId)) {
      setSavedEvents(savedEvents.filter((id) => id !== eventId));
    } else {
      setSavedEvents([...savedEvents, eventId]);
    }
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

  const isSaved = (eventId) => savedEvents.includes(eventId);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#2B9770]"></div>
      </div>
    );
  }

  // -------------------- Handling save click -------------
  
  const handleSaveState = () => {
    if (saveState) {
      deletePost(product,saveId,setSaveState)
    } else {
      savedPostFetch(product, setSaveId,setSaveState);
    }
  
    console.log(saveId);
  };

  //-----------------------End------------

  return (
    <div>
      <div className="p-8 sm:p-8">
        <div className="flex sm:flex-row mr-30 ml-30 mt-10 mb-10 justify-items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto  object-contain"
            />
          </div>
          <div className="w-full sm:w-1/2 pl-8 ml-0 sm:ml-20">
            <h3 className="text-xl font-ubuntu mb-0">{product.title}</h3>
            {reviews.length > 6 && (
              <p className="text-[#76ABAE] text-sm font-light mb-16">
                {reviews[6].userName}
              </p>
            )}

            <p className="text-[#222831] text-2xl font-bold mb-4">
              Rating: {product.rating}
            </p>
            <div className="description-wrapper w-110">
              <p className="text-sm font-light mb-4">
                Description: {product.description}
              </p>
            </div>
            <p className="text-xl font-bold mb-14">Price: ${product.price}</p>
            <div className="flex">
              <button className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-10 rounded-xl mr-2 flex items-center">
                <Phone size={24} />
                <span className="ml-2">Call</span>
              </button>

              {/* ----------------------- Handling Save---------------------- */}
              {saveState ? (
                <button
                  className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-10 rounded-xl ml-2 flex items-center"
                  onClick={handleSaveState}
                >
                  <BookBookmark size={24}/>
                  <span className="ml-2">Saved</span>
                </button>
              ) : (
                <button
                  className="bg-orange-400 text-black font-bold py-4 px-10 rounded-xl ml-2 flex items-center"
                  onClick={handleSaveState}
                >
                  <BookmarkSimple size={24} />
                  <span className="ml-2">Save</span>
                </button>
              )}

              {/* -----------------------End----------------------------- */}
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex flex-col sm:flex-row justify-center sm:my-26 sm:mx-12 mx-8">
          <div className="mb-8 sm:mr-20 flex flex-col justify-items-start">
            <h2 className="text-[#000000] text-3xl font-ubuntu font-bold mb-1 mt-10">
              Rate this Product
            </h2>
            <p className="text-[#B0B0B0] text-l font-ubuntu">
              Tell others what you think about this product
            </p>
            <div className="flex justify-around mt-8">
              <StarRating size={60} />
            </div>
          </div>
          <div className="flex flex-col justify-end ml-0 sm:ml-32 mt-8 sm:mt-0">
            <textarea
              className="border border-gray-900 rounded-md p-2 resize-y  w-full sm:w-96 h-40  mb-4 sm:mb-0"
              placeholder="Leave your review"
            ></textarea>
            <button className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-2  rounded-xl mt-4 ml-64 sm:mt-8">
              Submit
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="text-gray-900 text-3xl font-ubuntu font-bold mb-1">
            Reviews
          </h2>
          <div className="flex overflow-x-scroll scrollbar-hide">
            {reviews.map((review, index) => (
              <ReviewsCard
                key={index}
                userName={review.userName}
                rating={review.rating}
                review={review.review}
              />
            ))}
          </div>
        </div>

        {/* Related Section */}
        <div className="mt-20 ">
          <h2 className="text-gray-900 text-3xl font-ubuntu font-bold mb-1">
            Related Products
          </h2>
          <div className="flex flex-wrap justify-center  sm:grid-cols-2 space-x-6 relative mt-4">
            {relatedProducts.map((relatedProduct) => (
              <Link
                to={`/Products/details/${relatedProduct.id}`}
                key={relatedProduct.id}
              >
                <div
                  key={relatedProduct.id}
                  className="w-64 rounded-xl p-2 mb-4 relative hover:scale-110 hover:opacity-90 transition duration-300 ease-in-out cursor-pointer shadow-lg"
                  onMouseEnter={() => handleMouseEnter(relatedProduct.id)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    backgroundColor:
                      isHovered && hoveredImage === relatedProduct.id
                        ? "#E5E7EB"
                        : "white",
                  }}
                >
                  <div className="flex flex-col items-center relative">
                    <div className="w-64 h-64 overflow-hidden mb-2 relative rounded-lg">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="w-full h-full object-cover rounded-lg"
                      />

                      {isHovered && hoveredImage === relatedProduct.id && (
                        <img
                          src={
                            isSaved(relatedProduct.id) ? savedIcon : saveIcon
                          }
                          alt="Save"
                          style={saveIconStyle}
                          onClick={() => toggleSaved(relatedProduct.id)}
                        />
                      )}
                    </div>
                    <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal font-bold">
                      {relatedProduct.title}
                    </p>
                    <p className="text-gray-600">
                      {relatedProduct.rating} stars
                    </p>
                    <p className="text-gray-600 text-center">
                      {" "}
                      Price: ${relatedProduct.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
