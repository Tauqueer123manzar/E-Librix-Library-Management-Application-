import React from "react";
import { FaUserTag, FaBookOpen, FaBookReader, FaFileAlt, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const features = [
    { icon: <FaUserTag />, title: "User Friendly", description: "Intuitive and user-friendly interface for easy navigation and interaction." },
    { icon: <FaBookOpen />, title: "Open Access", description: "Free access to a wide range of books and resources." },
    { icon: <FaBookReader />, title: "Reading Experience", description: "Engaging and visually appealing book covers for a pleasant reading experience." },
    { icon: <FaFileAlt />, title: "Digital Library", description: "Access books from anywhere with an internet connection." },
  ];

  return (
    <section>
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          height: "60vh",
        }}
      >
        <h1 className="text-5xl font-bold text-white text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-10 animate-bounce">
          Welcome to Our Library
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
          Get Started
        </button>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center m-5">
        <h1 className="text-3xl font-bold text-gray-400 mt-5 border-b-1">
          About <span className="text-gray-700">Us</span>
        </h1>
        <p className="text-lg mt-5 text-center text-gray-500 md:w-1/2">
          Discover our library, where knowledge thrives. Explore a world of books and resources, where ideas flourish. Join us in shaping the future of knowledge and discovery.
        </p>
      </div>

      {/* Decorative Yellow Dots */}
      <div className="flex justify-center items-center w-full">
        <div className="w-3 h-3 bg-yellow-400 transform rotate-45 m-1"></div>
        <div className="w-3 h-3 bg-yellow-400 transform rotate-45 m-1"></div>
        <div className="w-3 h-3 bg-yellow-400 transform rotate-45 m-1"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-blue-600 text-3xl">{feature.icon}</div>
                <div className="border-t-2 border-blue-600 flex-grow"></div>
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative grid grid-cols-1">
          <img 
           src="https://quomodosoft.com/html/library/images/about-slide/slide1.jpg"
           alt="Library"
           className="rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto"
           />
          <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full border-blue-600 hover:bg-blue-600 transition cursor-pointer">
            <FaArrowRight className="text-blue-600 text-xl hover:text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
