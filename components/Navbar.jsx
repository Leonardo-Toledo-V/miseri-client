"use client"
import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav =()=>{
      setNav(!nav);
  }

  return (
    <div className='w-full h-20'>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <div>
              <ul className='hidden md:flex ml-12 font-lato'>
                <Link
                smooth={true}
                spy={true}
                to='about'>
                  <li className='font-lato text-base hover:animate-pulse hover:scale-110 duration-300 cursor-pointer text-[#18181A] hover:text-[#393939]'>about</li>
                </Link>
                <Link
                smooth={true}
                spy={true}
                to='review'>
                  <li className='font-lato ml-10 text-base hover:animate-pulse hover:scale-110 duration-300 cursor-pointer text-[#18181A] hover:text-[#393939]'>review</li>
                </Link>
              </ul>
              <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={20} className='mr-2 text-[#141517]'/>
              </div>
            </div>
            <Link
            smooth={true}
            spy={true}
            to='home'>
            <h3 className='font-lato text-base hover:animate-pulse hover:scale-110 duration-300 cursor-pointer text-[#18181A] font-black hover:text-[#393939] mr-4 md:mr-12'>Miseri ©</h3>
          </Link>
        </div>
      <div  onClick={handleNav} className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 z-50': ''}>
          <div className={nav ? 'fixed left-0 top-0 w-[66%] md:w-[38%] h-screen bg-[#141517] p-10 ease-in duration-500 ':'fixed left-[-100%] top-0 p-10 ease-in duration-50'}>
              <div>
                <div className='flex w-full items-center justify-end mt-6'>
                    <div  onClick={handleNav} className='rounded-full cursor-pointer border-gray-400 border-[1px] p-2 hover:animate-pulse hover:scale-110 duration-300 hover:rotate-90'>
                        <AiOutlineClose className='text-[#c2c2c2]'/>
                    </div>
                </div>
                <div className=' border-white/25 border-b-[0.1px] mx-4 md:mx-16 '>
                    <p className='text-[#c2c2c2] mb-7 mt-[1.2rem] text-[0.65rem] uppercase font-lato'>Navigation</p>
                </div>
              </div>
              <div className='pt-12 flex flex-col'>
                <ul className=' mx-4 md:mx-16'>
                <Link
                onClick={handleNav} 
                smooth={true}
                spy={true}
                to='about'>
                    <li className='text-2xl md:text-3xl font-lato cursor-pointer text-[#c2c2c2] hover:text-white py-4 hover:scale-x-105 duration-500'>
                      about
                    </li>
                  </Link>
                  <Link 
                  onClick={handleNav} 
                  smooth={true}
                  spy={true}
                  to='review'>
                    <li className='text-2xl md:text-3xl font-lato cursor-pointer text-[#c2c2c2] hover:text-white py-4 hover:scale-x-105 duration-500'>
                      review
                    </li>
                  </Link>
                </ul>
                <div className='pt-10 lg:pt-[6.5rem] md:mx-16'>
                <p className='text-[#c2c2c2] md:mb-4 mb-6 mt-[1.2rem] text-[0.65rem] uppercase font-lato'>Socials</p>
                  <div>
                    <ul className='flex flex-col lg:flex-row font-lato'>
                      <li className='text-base cursor-pointer text-[#c2c2c2]  hover:scale-x-110 duration-300'>LinkedIn</li>
                      <li className='text-base cursor-pointer text-[#c2c2c2] hover:scale-x-110 duration-300  lg:ml-8'>Instagram</li>
                      <li className='text-base cursor-pointer text-[#c2c2c2]  hover:scale-x-110 duration-300 lg:ml-8'>Twitter</li>
                    </ul>
                  </div>
                </div>

              </div>
          </div>
      </div>
    </div>
  )
}
