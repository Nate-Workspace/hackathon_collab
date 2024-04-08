import React, { useContext } from "react";
import { HoverContext } from "../../Context/HoverContext";

import saveIcon from "../../Assets/saveicon.png";
import savedIcon from "../../Assets/savedicon.png";

const Singleevent = (props) => {
  return (
    <div
      key={props.id}
      className="w-64 border border-gray-300 rounded-lg p-2 mb-4 relative hover:scale-110 hover:opacity-90 transition duration-300 ease-in-out cursor-pointer"
      onMouseEnter={() => props.handleMouseEnter(props.id)}
      onMouseLeave={props.handleMouseLeave}
    >
      <div className="flex flex-col items-center relative">
        <div className="w-64 h-64 overflow-hidden mb-2 relative">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover"
          />
          {props.isHovered && props.hoveredImage == props.id ? (
            <img
              src={props.isSaved(props.id) ? savedIcon : saveIcon}
              alt="Save"
              style={props.saveIconStyle}
              onClick={() => props.toggleSaved(props.id)}
            />
          ) : (
            ""
          )}
        </div>
        <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal font-bold">
          {props.title}
        </p>
        <p className="text-gray-600">date: {props.date}</p>
        <p className="text-gray-600 text-center">Place: {props.place}</p>
        <p className="text-gray-600 text-center">Host Name: {props.hostName}</p>
      </div>
    </div>
  );
};

export default SingleEvent;