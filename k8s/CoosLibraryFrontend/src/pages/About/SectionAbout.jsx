import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SectionAbout(props) {
    const [name, setName] = useState("hello");

    const user = props.datamem.user;
    const download = props.datamem.download;

    const daily = props.datamem.daily;
    const week = props.datamem.week;
    const currentscore = props.datamem.currentscore;

    var rank;
    if (currentscore <= 2500) {
        rank = "Bronze";
    } else if (currentscore <= 5000 && currentscore > 2500) {
        rank = "Silver";
    } else if (currentscore <= 10000 && currentscore > 5000) {
        rank = "Gold";
    } else if (currentscore <= 15000 && currentscore > 10000) {
        rank = "Platinum";
    } else {
        rank = "Grand Master";
    }

    return (
        <>
            <div className='bg-gradient-to-tr from-slate-300 to-purple-300 px-10 pb-10'>

                <div className='pt-24 w-4/5'>
                    <p className='text-6xl leading-tight'>Discover, Read, Imagine.</p>
                    <p className='pt-6 leading-tight w-2/3 text-lg'>Explore an endless library of captivating e-books, from thrilling fiction to insightful non-fiction. Start your literary journey today.</p>
                    <div className='flex justify-between w-fit pt-4 pb-24 space-x-3'>
                        <Link to="/" className='bg-black border-2 p-2 border-none text-white rounded-2xl shadow-2xl shadow-black hover:bg-gray-800'>Start Reading for Free &rarr;</Link>
                        {/* <Link to="/demo" className='bg-white border-2 p-2 border-none text-black rounded-2xl shadow-2xl shadow-black hover:bg-neutral-300 flex'>Watch demo<img className='h-4 m-1' src='./src/assets/play_btn.png' /></Link> */}
                    </div>
                </div>

                <div className='flex space-x-16 pb-10'>
                    <div className='flex space-x-3 w-fit p-1'>
                        <p className='text-5xl'>{user}</p>
                        <p className='w-28'>Readers worldwide</p>
                    </div>
                    <div className='flex space-x-2 w-fit p-1'>
                        <p className='text-5xl'>{download}M</p>
                        <p className='w-28'>Downloads this year</p>
                    </div>
                </div>

                <div className='bg-purple-400 px-10 py-20 shadow-2xl shadow-purple-800  leading-relaxed'>
                    <div className='text-white w-fit text-12 mb-12'>
                        <b>Easily discover, organize</b>
                        and immerse yourself in your favorite e-books and authors."
                    </div>

                    <div className='text-white grid grid-cols-2 gap-4 lg:grid-cols-3 '>
                        <Link to='/dashboard' className='bg-purple-300 hover:bg-pink-400 w-fit h-full p-4 rounded-xl shadow-2xl shadow-purple-500'>
                            <p className='mb-4 font-bold'>Dashboard</p>
                            <p>Find your next read with powerful search, curated collections, and personalized recommendations across all genres.</p>
                        </Link>

                        <Link to='/login' className='bg-purple-300 hover:bg-green-400 w-fit h-full p-4 rounded-xl shadow-2xl shadow-purple-500'>
                            <p className='mb-4 font-bold'>Read Anywhere</p>
                            <p>Access your library on any device. Sync your progress, highlight passages, and enjoy seamless reading.</p>
                        </Link>

                        <Link to='/dashboard/review' className='bg-purple-300 hover:bg-cyan-400 w-fit h-full p-4 rounded-xl shadow-2xl shadow-purple-500'>
                            <p className='mb-4 font-bold'>Community & Reviews</p>
                            <p>Connect with fellow book lovers. Share your thoughts, write reviews, and explore what others are reading.</p>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='bg-purple-50 h-fit p-24 '>
                <div className='bg-purple-100 p-24 rounded-3xl shadow-2xl shadow-purple-200 flex justify-between'>

                    <div className='bg-purple-50 h-full w-fit p-6 rounded-3xl shadow-2xl shadow-purple-300'>

                        <div className='flex justify-between pb-5'>
                            <div className='pr-20'>
                                <b>Daily Progress</b>
                                <p className='text-4xl'>4/30 tasks complete</p>
                                <p>Daily streak: {daily}days</p>
                            </div>
                            <div className='p-10'>
                                <p className='bg-blue-600 rounded-3xl h-full w-full'>a</p>
                            </div>
                        </div>
                        <div className='flex justify-between pb-5'>
                            <div className='pr-20'>
                                <b>Weekly Goal</b>
                                <p className='text-4xl'>{week}/52 items finished</p>
                                <p>Weekly streak {week}weeks</p>
                            </div>
                            <div className='p-10'>
                                <p className='bg-blue-600 rounded-3xl h-full w-full'>a</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='pr-20'>
                                <b>Current Rank</b>
                                <p className='text-4xl'>{rank}</p>
                                <p>Current score:{currentscore} points</p>
                            </div>
                            <div className='p-10'>
                                <p className='bg-blue-600 rounded-3xl h-full w-full'>a</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-full w-1/2 p-20 leading-relaxed'>
                        <p className='text-2xl font-bold pb-5'>Reading Management That Puts Your Library in Control.</p>
                        <p>Your Book Shelf is your personalized portal to literary organization. Every e-book, reading list, and favorite quote can be managed, tracked, and shared with fellow readers.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SectionAbout;