import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { RiEyeCloseFill } from "react-icons/ri";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const Popup = () => {
  const words = [
    { text: "Learn," },
    { text: "Connect" },
    { text: "and" },
    { text: "Thrive" },
    { text: "with" },
    { text: "Resourcify.", className: "text-[#14cbe3] dark:text-blue-500" },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const location = useLocation(); // Get the location object

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if the current location is the home page
      if (location.pathname === '/') {
        setShowPopup(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]); // Watch for changes in the location object

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleShowAuthPopup = () => {
    setShowAuthPopup(true);
  };

  const handleCloseAuthPopup = () => {
    setShowAuthPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="z-30 fixed inset-0 h-screen flex items-center justify-center backdrop-blur-md bg-opacity-50">
          <div className="bg-white p-8 md:h-2/3 md:w-1/2 lg:h-auto sm:w-auto lg:w-7/12 md rounded-2xl shadow-xl shadow-gray-400 scale-100">
            <button className="absolute top-0 right-0 m-4" onClick={handleClosePopup}>
              <RiEyeCloseFill className='hover:scale-125 duration-300' size={25} />
            </button>
            <div className="flex flex-col items-center justify-center h-[40rem]">
              <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
                The road to freedom starts from here
              </p>
              <TypewriterEffectSmooth words={words} />
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button
                  className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
                  onClick={handleShowAuthPopup}
                >
                  LogIn
                </button>
                <button
                  className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
                  onClick={handleShowAuthPopup}
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <AuthPopup showPopup={showAuthPopup} handleClosePopup={handleCloseAuthPopup} />
    </div>
  );
};

export default Popup;
