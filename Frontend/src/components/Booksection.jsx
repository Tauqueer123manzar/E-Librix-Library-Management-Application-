import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const books = [
  { id: 1, title: "Annihilation", author: "Jeff Vandermeer", image: "https://via.placeholder.com/150" },
  { id: 2, title: "The Last Skin", author: "Barbara Ras", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Smothered In Hugs", author: "Ucly Man", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Scattered Things", author: "Dennis Cooper", image: "https://via.placeholder.com/150" },
];

const BookCarousel = ({ setSelectedBook }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 200;

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + scrollAmount, books.length * 200));
  };

  return (
    <div className="relative w-full overflow-hidden bg-blue-700 p-4">
      <div
        className="flex gap-4 transition-transform"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {books.map((book) => (
          <img
            key={book.id}
            src={book.image}
            alt={book.title}
            className="cursor-pointer w-40 h-60 object-cover rounded shadow-md hover:scale-105 transition"
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>
      <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow" onClick={scrollLeft}>
        <FaArrowLeft />
      </button>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow" onClick={scrollRight}>
        <FaArrowRight />
      </button>
    </div>
  );
};

const BookDetails = ({ book }) => {
  return (
    <div className="p-6 bg-gray-100 w-full">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <p className="mt-4 text-sm text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero dui, pretium non tincidunt eget, mattis eu nunc.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Read More</button>
    </div>
  );
};

const BookSection = () => {
  const [selectedBook, setSelectedBook] = useState(books[0]);
  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full overflow-hidden">
        <BookCarousel setSelectedBook={setSelectedBook} />
      </div>
      <div className="w-1/2 h-full overflow-auto">
        <BookDetails book={selectedBook} />
      </div>
    </div>
  );
};

export default BookSection;
