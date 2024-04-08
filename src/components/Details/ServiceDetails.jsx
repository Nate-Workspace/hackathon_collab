import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import LoginTab from './ui/LoginTab.jsx';
import ItemCard from './ui/ItemCard.jsx';
import {Phone, BookmarkSimple, Star} from "phosphor-react";
import ReviewsCard from "./ui/ReviewsCard.jsx";

function ServiceDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // Exclude the current product
        const related = data.filter(product => product.id !== parseInt(id));
        // Limit the number of related products to display
        const limitedRelated = related.slice(0, 20);
        setRelatedProducts(limitedRelated);
      });
    fetch('https://random-data-api.com/api/v3/projects/e657498e-1ee1-4ec6-a8ed-ecfef7f0cc48?api_key=HF9K2pVV3eyFg790PkXc0w')
      .then(response => response.json())
      .then(data => setReviews(data.json_array));
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#2B9770]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="p-8">
        <LoginTab/>
        <h1
          className="text-[#2B9770] text-3xl font-ubuntu font-bold mb-1">Details</h1>
        <h2 className="text-l font-ubuntu mt-2 mb-6">Learn more about your
          purchases</h2>
        <div className="border-b-2 border-[#2B9770] mb-8 "></div>
        <div className="flex mr-40 ml-40 mt-20 mb-20 justify-items-center">
          <div className="">
            <img src={product.image} alt={product.title}
                 className="w-full h-[500px] object-contain"/>
          </div>
          <div className="w-1/2 pl-8 ml-20">
            <h3 className="text-xl font-ubuntu mb-0">{product.title}</h3>
            <p className="text-[#3C9B78] text-sm font-light mb-16">{reviews[6].userName}</p>
            <p
              className="text-[#11875C] text-2xl font-bold mb-4">Rating: {product.rating.rate}</p>
            <div className="description-wrapper w-110">
              <p
                className="text-sm font-light mb-4">Description: {product.description}</p>
            </div>
            <p className="text-xl font-bold mb-14">Price: ${product.price}</p>
            <div className="flex">
              <button
                className="bg-[#A4D9C6] hover:bg-[#3C9B78] text-black font-bold py-4 px-10 rounded-xl mr-2 flex items-center">
                <Phone size={24}/>
                <span className="ml-2">Call</span>
              </button>
              <button
                className="bg-[#A4D9C6] hover:bg-[#3C9B78] text-black font-bold py-4 px-10 rounded-xl ml-2 flex items-center">
                <BookmarkSimple size={24}/>
                <span className="ml-2">Save</span>
              </button>
            </div>

          </div>
        </div>
        <div className="border-b-2 border-[#2B9770] mt-8  mb-8"></div>

        {/* Rating Section */}
        <div className="flex justify-center my-8">
          <div className="mr-40 flex flex-col justify-items-start">
            <h2
              className="text-[#000000] text-3xl font-ubuntu font-bold mb-1 mt-8">Rate
              this Service</h2>
            <p className="text-[#B0B0B0] text-l font-ubuntu">Tell others what
              you
              think
              about this Service</p>
            <div className="flex m-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={44} className="text-[#B0B0B0]"/>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end ml-40 mt-8">
            <textarea
              className="border border-[#2B9770] rounded-md p-2 resize-y w-96 h-40"
              placeholder="Leave your review"></textarea>
            <button
              className="bg-[#A4D9C6] hover:bg-[#3C9B78] text-black font-bold py-2 px-4 rounded-xl mt-4 ml-56">Submit
            </button>
          </div>
        </div>
        <div className="border-b-2 border-[#2B9770] mt-8  mb-8"></div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="text-[#2B9770] text-3xl font-ubuntu font-bold mb-1">Reviews</h2>
          <div className="flex overflow-x-scroll">
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
        <div className="border-b-2 border-[#2B9770] mt-8  mb-8"></div>


        {/* Related Section */}
        <div className="mt-20 ">
          <h2
            className="text-[#2B9770] text-3xl font-ubuntu font-bold mb-1">Related</h2>
          <h3 className="text-l font-ubuntu mb-4">Based on what you clicked</h3>
          <div className="flex flex-wrap justify-center">
            {relatedProducts.map((product) => (
              <Link to={`/Services/details/${product.id}`} key={product.id}>
              <ItemCard
                key={product.id}
                imgSrc={product.image}
                itemName="Name of the Service"
                itemRating={product.rating.rate.toString()}
                itemPrice={`$${product.price}`}
                itemOwner={reviews[Math.floor(Math.random() * 9) + 1].userName}
                itemId={product.id}/>
                </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;