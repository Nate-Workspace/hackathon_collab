import React from 'react';
import PropTypes from 'prop-types';
import { BookmarkSimple } from "phosphor-react";

function ItemCard({ imgSrc, itemName, itemRating, itemPrice, itemOwner }) {
  return (
    <div className="p-0 m-8 rounded-xl shadow-xl border border-gray-300 w-80 h-auto overflow-hidden relative">
      <BookmarkSimple
        size={34}
        className="bg-white bg-opacity-75 backdrop-blur rounded-full border border-gray-300 absolute top-4 right-4 text-[#11875C] p-1"
      />
      <img src={imgSrc} alt="img" className="w-full h-56 object-contain rounded-t-xl mb-4 p-4" />
      <div className="bg-[#F3F3F3] rounded-b-xl h-auto pb-2 pt-2">
        <h4 className="text-[#11875C] text-lg font-ubuntu ml-4 mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">{itemName}</h4>
        <p className="text-[#162721] text-sm font-light ml-4 mb-2">Rating: {itemRating}</p>
        <p className="text-[#162721] text-lg font-bold ml-4">Price: {itemPrice}</p>
        <p className="text-[#11875C] text-sm font-light ml-4 mb-2">Owner: {itemOwner}</p>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  itemId: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemRating: PropTypes.string.isRequired,
  itemPrice: PropTypes.string.isRequired,
  itemOwner: PropTypes.string.isRequired,
};

export default ItemCard;