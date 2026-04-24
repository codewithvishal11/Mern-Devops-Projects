// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <>
//     <div className='p-[10%] h-fit bg-purple-300 flex justify-between'>
//       <Link to="/ebook" className='bg-pink-200 hover:bg-green-400 text-lg italic font-semibold rounded-md p-[10%] text-center'>
//         EBook
//       </Link>
//       <Link to="/notes" className='bg-pink-200 hover:bg-yellow-400 text-lg italic font-semibold rounded-md p-[10%] text-center'>
//         Notes
//       </Link>
//     </div>
//     </>
//   )
// }

// export default Home

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-violet-200 flex flex-col items-center justify-center text-center px-6 py-12">
      
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-purple-600">Coos Library</span> 📚
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Your one-stop destination for <span className="font-semibold text-purple-600">eBooks</span> and 
          <span className="font-semibold text-pink-500"> Notes</span> — designed to help you learn smarter, 
          faster, and better. Explore thousands of study resources and start your knowledge journey today!
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <Link
          to="/ebook"
          className="bg-purple-600 text-white h-50 items-center flex font-semibold px-10 py-4 rounded-xl text-lg shadow-md hover:bg-purple-700 hover:shadow-xl transition-all duration-300"
        >
          📘 Explore eBooks
        </Link>
        <Link
          to="/notes"
          className="bg-pink-500 text-white h-50 items-center flex font-semibold px-10 py-4 rounded-xl text-lg shadow-md hover:bg-pink-600 hover:shadow-xl transition-all duration-300"
        >
          📝 View Notes
        </Link>
      </div>

      {/* Extra Section */}
      <div className="mt-12 max-w-2xl text-gray-600 text-base md:text-lg">
        <p>
          Whether you're preparing for exams, learning new skills, or exploring 
          your favorite subjects — <Link to='/about' className="font-semibold text-purple-700">Coos Library</Link> gives 
          you access to the best study materials curated just for you.
        </p>
      </div>
    </section>
  );
};

export default Home;
