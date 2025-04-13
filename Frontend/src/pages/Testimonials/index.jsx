import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Footer from '../../components/Footer';
const testimonials = [
  {
    id: 1,
    name: "Tauqueer Manzar",
    role: "Software Engineer",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Uzma Tahseen",
    role: "Software Developer",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Abhisek Kumar",
    role: "Software Engineer",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2669&auto=format&fit=crop"
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    <div
      className="relative w-full min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:mt-18 mt-16"
      style={{
        backgroundImage: 'url("https://quomodosoft.com/html/library/images/say-bg.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 text-white w-full max-w-xl text-center py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          What People <span className="text-blue-400">Say</span> <span className="text-yellow-400">About Us</span>
        </h2>

        <div className='flex justify-center items-center mb-6 space-x-2'>
          <span className="h-1 w-20 bg-white rounded-full" />
          <span className="h-1 w-4 bg-blue-400 rounded-full" />
          <span className="h-1 w-20 bg-white rounded-full" />
        </div>

        <h4 className="text-xl font-semibold">{testimonials[current].name}</h4>
        <p className="italic text-sm text-gray-200">{testimonials[current].role}</p>
        <p className="mt-3 mb-5 px-4">{testimonials[current].testimonial}</p>

        <div className="flex justify-center mb-6">
          <img
            src={testimonials[current].image}
            alt="testimonial"
            className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl cursor-pointer" onClick={prevSlide}>
          <FaArrowLeft />
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl cursor-pointer" onClick={nextSlide}>
          <FaArrowRight />
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                current === index ? "bg-blue-500 scale-110" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Testimonials;
