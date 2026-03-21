import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='bg-purple-600 text-neutral-300 fixed w-screen h-20 z-50'>
        <div className='flex p-5 justify-between mx-10'>
          <div className='m-2'>
            <b className='text-2xl'>COOS-LIBRARY</b>
          </div>
          <div>
            <ul className='flex justify-between m-2 space-x-5'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/help">Help</Link>
              <Link to="/profile/view">Profile</Link>
            </ul>
          </div>
          <div>
            <Link to="/signup" className='bg-black hover:bg-slate-700 shadow-2xl shadow-black text-white px-4 py-2 rounded-xl'>Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Spacer to push content below fixed navbar */}
      <div className='h-20'></div>
    </>
  )
}

export default Navbar
