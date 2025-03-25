import React, { useState } from "react";
import { FaCode, FaLaptopCode, FaDatabase, FaMobileAlt } from "react-icons/fa";

const categories = [
  { name: "Coding", color: "bg-blue-500", icon: <FaCode size={30} /> },
  { name: "Development", color: "bg-green-500", icon: <FaLaptopCode size={30} /> },
  { name: "Database", color: "bg-yellow-500", icon: <FaDatabase size={30} /> },
  { name: "Mobile Apps", color: "bg-pink-500", icon: <FaMobileAlt size={30} /> },
];

const CategoryCard = ({ name, color, icon }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`relative w-60 h-72 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center transition-transform transform hover:scale-105 ${clicked ? "scale-110" : ""}`}
      onClick={() => setClicked(!clicked)}
    >
      {/* Icon with Color */}
      <div className={`w-16 h-16 ${color} text-white flex items-center justify-center rounded-lg`}>
        {icon}
      </div>

      {/* Category Name */}
      <p className="mt-4 text-gray-700 font-medium">{name}</p>

      {/* Hover Button */}
      <div className="absolute bottom-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
