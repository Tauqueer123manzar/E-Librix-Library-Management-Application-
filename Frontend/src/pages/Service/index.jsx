import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  FaBookOpen,
  FaUsers,
  FaCalendarAlt,
  FaSearch,
  FaCloudUploadAlt,
  FaBookmark,
  FaHeadset,
  FaLaptop,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Features = [
  {
    id: 1,
    title: "Book Borrowing",
    description:
      "Borrow books from our library collection easily with just a few clicks.",
    icon: <FaBookOpen className="text-5xl text-blue-500 mb-4" />,
  },
  {
    id: 2,
    title: "Membership Plans",
    description:
      "Choose from a variety of membership plans tailored to your reading needs.",
    icon: <FaUsers className="text-5xl text-green-500 mb-4" />,
  },
  {
    id: 3,
    title: "Online Reservations",
    description:
      "Reserve your favorite books online and pick them up at your convenience.",
    icon: <FaCalendarAlt className="text-5xl text-purple-500 mb-4" />,
  },
  {
    id: 4,
    title: "Advanced Search",
    description:
      "Find books quickly with our advanced search and filtering options.",
    icon: <FaSearch className="text-5xl text-red-500 mb-4" />,
  },
  {
    id: 5,
    title: "Digital Upload",
    description:
      "Upload and access digital versions of books and resources anytime, anywhere.",
    icon: <FaCloudUploadAlt className="text-5xl text-yellow-500 mb-4" />,
  },
  {
    id: 6,
    title: "Personalized Bookmarks",
    description:
      "Keep track of your favorite books and reading progress with personalized bookmarks.",
    icon: <FaBookmark className="text-5xl text-pink-500 mb-4" />,
  },
  {
    id: 7,
    title: "24/7 Support",
    description: "Get assistance anytime with our round-the-clock customer support.",
    icon: <FaHeadset className="text-5xl text-teal-500 mb-4" />,
  },
  {
    id: 8,
    title: "Multi-Device Access",
    description: "Access your library account and resources from any device, anywhere.",
    icon: <FaLaptop className="text-5xl text-indigo-500 mb-4" />,
  },
];

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFeatures = Features.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 md:mt-18 mt-16">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Library Management Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Explore our comprehensive features designed to make your library
            experience seamless and enjoyable.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-8 px-4">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-transparent hover:border-blue-400"
            >
              {feature.icon}
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No services found.
          </p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
