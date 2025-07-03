import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { LuMenu } from 'react-icons/lu';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // New state to control hover effect

  const menuItems = [
    'Home',
    'About',
    'Features',
    'Gallery',
    'Payment Plan',
    'Floor Plan',
    'Contact',
    'Admin'
  ];



  return (
    <div className='fixed left-0 top-0 w-full h-[75px] bg-[#FFFFFF] shadow flex justify-center z-50'>
      <div className='w-full lg:container flex flex-col lg:flex-row justify-center lg:justify-between items-center'>

        <img src={logo} alt="logo" className='w-[130px] cursor-pointer' />

        <ul className='w-[700px] h-full hidden lg:flex justify-around items-center text-[#4b4a4a] text-[18px]'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className='relative cursor-pointer menuItems'
              onClick={() => item === 'Admin' && setShowLogin(!showLogin)}
            >
              <a href={`#${item}`}>{item}</a>
              {item === 'Admin' && showLogin && (
                <div className="absolute left-[-17px] top-full mt-2 p-3 bg-white shadow-lg rounded-lg flex flex-col items-center">
                  <Link to={'/admin'}>
                    <button
                      className="px-4 py-2 bg-blue-500 bg-opacity-30 text-[#4b4a4a] hover:text-white rounded hover:bg-blue-600">
                      Login</button>
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className='w-full h-max block lg:hidden pl-5'>
          <LuMenu onClick={() => setIsSidebarOpen(true)} className='text-2xl cursor-pointer' />
        </div>

        <div
          className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className='flex justify-between items-center p-5'>
            <img src={logo} alt="logo" className='w-[100px]' />
            <AiOutlineClose
              onClick={() => setIsSidebarOpen(false)}
              className='text-2xl cursor-pointer'
            />
          </div>
          <ul className='flex flex-col items-start pl-5 space-y-6 text-[#444444] text-[18px]'>
            {menuItems.map((item, index) => (
              <li key={index} className='cursor-pointer relative'
                onClick={() => item === 'Admin' && setShowLogin(!showLogin)}
              >
                <a href={`#${item}`}>
                  {item}
                </a>
                {item === 'Admin' && showLogin && (
                  <div className="absolute  mt-2 p-3 bg-white shadow-lg rounded-lg flex flex-col items-center">
                    <Link to={'/admin'}>
                      <button
                        className="px-4 py-2 bg-blue-500 bg-opacity-30 text-[#4b4a4a] hover:text-white rounded hover:bg-blue-600">
                        Login</button>
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
