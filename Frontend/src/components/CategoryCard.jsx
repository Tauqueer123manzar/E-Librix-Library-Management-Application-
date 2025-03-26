import React, { useState } from "react";

const CategoryCard = ({ name, color, icon }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`w-60 h-72 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center transition-transform duration-300 ${clicked ? "scale-110" : ""}`}
      onClick={() => setClicked(!clicked)}
    >
      {/* Icon with Color */}
      <div className={`w-16 h-16 ${color} text-white flex items-center justify-center rounded-lg`}>
        {icon}
      </div>

      {/* Category Name */}
      <p className="mt-4 text-gray-700 font-medium">{name}</p>

      {/* Hover Button */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
