import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import LoginTab from './ui/LoginTab';
import ItemCard from './ui/ItemCard';
import {Phone, BookmarkSimple, Star} from "phosphor-react";
import ReviewsCard from "../Single/ReviewsCard";

function EvnetDetails() {
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
            <img src='https://pic.pnnet.dev/300x300' alt='img'
                 className="w-full h-[500px] object-contain"/>
          </div>
          <div className="w-1/2 pl-8 ml-20">
            <h3 className="text-xl font-ubuntu mb-0">{product.title}</h3>
            <p
              className="text-[#3C9B78] text-sm font-light mb-16">{reviews[6].userName}</p>
            <p
              className="text-[#11875C] text-2xl font-bold mb-4">Date:
              DD/MM/YY</p>
            <div className="description-wrapper w-110">
              <p
                className="text-sm font-light mb-8">Description: {product.description}</p>
            </div>
            <p className="text-xl font-bold mb-1">Location: Somewhere</p>
            <p className="text-l text-[#11875C] font-bold mb-14">Time: 00:00(LT)</p>
            <div className="flex">
              <button
                className="bg-[#A4D9C6] hover:bg-[#3C9B78] text-black font-bold py-4 px-10 rounded-xl ml-2 flex items-center">
                <BookmarkSimple size={24}/>
                <span className="ml-2">Save</span>
              </button>
            </div>

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
              <Link to={`/Products/details/${product.id}`} key={product.id}>
                <ItemCard
                  key={product.id}
                  imgSrc='https://pic.pnnet.dev/500x400'
                  itemName={product.title}
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

export default EvnetDetails;