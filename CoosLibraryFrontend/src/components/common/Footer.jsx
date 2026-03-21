import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className='z-50 bg-purple-800 text-neutral-200'>
            {/* Main content container: Responsive padding and max width */}
            <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
                
                {/* Grid layout for responsiveness */}
                <div className='grid grid-cols-1 md:grid-cols-5 gap-8 text-left'>
                    
                    {/* Column 1: Coos Library Info & Social Links (Takes 2/5 space on medium/large screens) */}
                    <div className='md:col-span-2'>
                        <h3 className='text-3xl font-bold mb-4 text-center md:text-left'>
                            Coos Library
                        </h3>
                        <p className='pb-5 text-center md:text-left text-sm'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente aspernatur quis possimus,
                        </p>
                        
                        <div className='mt-6 text-center md:text-left'>
                            <p className='mb-3'>Contact with us at</p>
                            <div className='flex justify-center md:justify-start space-x-6'>
                                <a className='group' target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/sayme_vishesh/">
                                    <FaInstagram className='w-6 h-6 mx-auto group-hover:text-pink-500' />
                                    <p className="text-xs group-hover:text-pink-500">Instagram</p>
                                </a>
                                <a className='group' target='_blank' rel="noopener noreferrer" href="https://github.com/Vishesh9310">
                                    <FaGithub className='w-6 h-6 mx-auto group-hover:text-gray-400' />
                                    <p className="text-xs group-hover:text-gray-400">Github</p>
                                </a>
                                <a className='group' target='_blank' rel="noopener noreferrer" href="https://www.facebook.com">
                                    <FaFacebook className='w-6 h-6 mx-auto group-hover:text-blue-500' />
                                    <p className="text-xs group-hover:text-blue-500">Facebook</p>
                                </a>
                                <a className='group' target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/vishesh-b8a2b72a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm">
                                    <FaLinkedin className='w-6 h-6 mx-auto group-hover:text-sky-400' />
                                    <p className="text-xs group-hover:text-sky-400">Linked-In</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Column 2: Categories (Takes 1/5 space on medium/large screens) */}
                    <div className='md:col-span-1'>
                        <h4 className='font-semibold text-lg mb-3'>Categories</h4>
                        <ul className='space-y-2'>
                            <li><Link className='text-sm hover:text-blue-400' to="">Science Fiction</Link></li>
                            <li><Link className='text-sm hover:text-blue-400' to="">Thriller</Link></li>
                            <li><Link className='text-sm hover:text-blue-400' to="">Stories</Link></li>
                            <li><Link className='text-sm hover:text-blue-400' to="">Religious</Link></li>
                            <li><Link className='text-sm hover:text-blue-400' to="">Study</Link></li>
                        </ul>
                    </div>
                    
                    {/* Column 3: Support (Takes 1/5 space on medium/large screens) */}
                    <div className='md:col-span-1'>
                        <h4 className='font-semibold text-lg mb-3'>Support</h4>
                        <ul className='space-y-2'>
                            <li><Link className='text-sm hover:text-blue-400' to="">Contact Us</Link></li>
                            <li><Link className='text-sm hover:text-blue-400' to="">FAQ</Link></li>
                            <li><Link className='text-sm hover:text-blue-400' to="/help">Help</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Policies (Takes 1/5 space on medium/large screens) */}
                    <div className='md:col-span-1'>
                        <h4 className='font-semibold text-lg mb-3'>Policies</h4>
                        <ul className='space-y-2'>
                            <li><Link className='text-sm hover:text-blue-400' to="">Terms of Use</Link></li>
                            <li><Link className='text-sm hover:text-blue-400' to="">Privacy Policy</Link></li>
                            <li><Link className='text-sm hover:text-blue-400' to="">Refund Policy</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            
            {/* Copyright Section */}
            <div className='border-t border-purple-700'>
                <div className='max-w-7xl mx-auto py-4 text-center text-neutral-300 text-sm'>
                    Copyright ©Coos-Library 2021-2028
                </div>
            </div>
        </div>
    )
}

export default Footer