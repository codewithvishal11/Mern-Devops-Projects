import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const FullBook = () => {
    const location = useLocation();
    const { book } = location.state || {};

    if (!book)
        return (
            <p className="text-center text-red-500 text-xl mt-10">
                ❌ No book data available
            </p>
        );

    // ⭐ Function to render stars based on rating
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
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-100 to-white flex flex-col md:flex-row p-8 md:p-16 gap-8">
            {/* Left Section - Book Image */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-2xl shadow-lg p-6">
                {/* Main Book Image */}
                <div className="w-full h-[450px] flex justify-center items-center overflow-hidden rounded-xl bg-gray-50">
                    <img
                        src={book.img}
                        alt={book.name}
                        className="h-full w-auto object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Thumbnail Section */}
                <div className="flex gap-4 justify-center mt-6">
                    {[book.img, book.img2, book.img3, book.img4].map((img, index) => (
                        <img
                            key={index}
                            src={img || book.img} // fallback to main image if not provided
                            alt={`Thumbnail ${index + 1}`}
                            className="w-20 h-24 object-cover rounded-lg border border-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200"
                        />
                    ))}
                </div>
            </div>

            {/* Right Section - Book Info */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 space-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">{book.name}</h1>
                    <h3 className="text-lg font-semibold text-gray-800">{book.category}</h3>
                </div>
                <h2 className="text-lg text-blue-500 font-medium">by {book.a_name}</h2>

                {/* Rating */}
                <div className="flex items-center gap-2 border-y py-2">
                    <div className="flex">{renderStars(book.rating)}</div>
                    <span className="text-gray-700 font-semibold">{book.rating}</span>
                </div>

                {/* Price Section */}
                <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-lg">
                        ₹{book.price}
                    </span>
                    <span className="text-green-600 font-bold text-2xl">
                        ₹{book.n_price}
                    </span>
                </div>

                {/* About */}
                <p className="text-gray-600 leading-relaxed">
                    {book.about}
                </p>

                {/* Extra Info */}
                <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
                    <p>
                        <span className="font-semibold">📖 Pages:</span> {book.pages}
                    </p>
                    <p>
                        <span className="font-semibold">🗣️ Language:</span> {book.language}
                    </p>
                    <p>
                        <span className="font-semibold">🏢 Publisher:</span> {book.publisher}
                    </p>
                    <p>
                        <span className="font-semibold">📅 Published:</span>{" "}
                        {book.published_year}
                    </p>
                </div>


                <div className="flex justify-evenly w-full mx-auto ">
                    {/* Buy Now Button */}
                    <button className="mt-6 px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-all">
                        Buy Now 💳
                    </button>

                    {/* Read for Free Button */}
                    <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all">
                        Read For Free 📖
                    </button>

                </div>
            </div>
        </div>
    );
};

export default FullBook;
