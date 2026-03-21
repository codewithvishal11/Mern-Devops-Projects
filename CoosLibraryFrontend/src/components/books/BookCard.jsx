import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import defaultimage from '../../assets/defaultbook.png';

const BookCard = ({ book }) => {
  console.log(book.img);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  }
  return (
    <Link
      to={`/ebook/${book.id}`}
      state={{ book }}
      className="group bg-gradient-to-b from-purple-50 to-white shadow-lg hover:shadow-2xl border border-purple-100 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      {/* Book Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={book.img ? typeof book.img === "string" && book.img.startsWith("http") ? book.img : defaultimage : defaultimage}
          alt={book.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {book.category}
        </span>
      </div>

      {/* Book Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors truncate">
          {book.name}
        </h3>
        <p className="text-sm text-gray-500 mb-1">by {book.a_name}</p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">{renderStars(book.rating)}</div>
          <span className="text-gray-600 text-sm font-medium">{book.rating}</span>
        </div>

        {/* About Short */}
        <p className="text-gray-600 text-xs line-clamp-2 italic">
          {book.about}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 line-through text-sm">
              ₹{book.price}
            </span>
            <span className="text-green-600 font-semibold text-base">
              ₹{book.n_price}
            </span>
          </div>

          <button className="text-sm bg-purple-600 text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-purple-700 transition">
            View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(BookCard);
