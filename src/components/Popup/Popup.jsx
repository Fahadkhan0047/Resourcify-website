import React, { useState, useEffect } from 'react';
"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { RiEyeCloseFill } from "react-icons/ri";

const Popup = () => {
  const words = [
    {
      text: "Learn,",
    },
    {
      text: "Connect",
    },
    {
      text: "and",
    },
    {
      text: "Thrive",
    },
    {
      text: "with",
    },
    {
      text: "Resourcify.",
      className: "text-[#e50085] dark:text-blue-500",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Open the popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="z-30 fixed inset-0 h-screen flex items-center justify-center backdrop-blur-md bg-opacity-50">
          <div className="bg-white p-8 md:h-2/3 md:w-1/2 lg:h-auto sm:w-auto lg:w-7/12 md rounded-2xl shadow-xl shadow-gray-400 scale-100">
            <button className="absolute top-0 right-0 m-4" onClick={handleClosePopup}>
              <RiEyeCloseFill className='hover:scale-125 duration-300' size={25} />
            </button>
            <div className="flex flex-col items-center justify-center h-[40rem]  ">
              <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                The road to freedom starts from here
              </p>
              <TypewriterEffectSmooth words={words} />
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                  LogIn
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
