import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { RiEyeCloseFill } from "react-icons/ri";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import AuthPopup from '..//components/Authentication/AuthPopup';
import Logo from '../assets/ResourcifyLogo.png';
import VantaGlobe from '../components/Backgrounds/VantaGlobe';


const LandingPage = () => {
  const words = [
    { text: "Learn, connect" },
    { text: "Connect" },
    { text: "and" },
    { text: "Thrive" },
    { text: "with" },
    { text: "Resourcify.", className: "text-[#ffffff] drop-shadow-[0_3px_01px_rgba(1,1,1,1)]" },
  ];

  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const location = useLocation(); // Get the location object

  const handleShowAuthPopup = () => {
    setShowAuthPopup(true);
  };

  const handleCloseAuthPopup = () => {
    setShowAuthPopup(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent ">
      <VantaGlobe/>
      <button className="absolute top-0 right-0 m-4" onClick={handleCloseAuthPopup}>
        <RiEyeCloseFill className='hover:scale-125 duration-300' size={25} />
      </button>
      <div className="flex flex-col items-center justify-center h-[40rem]">
        {/* <img className="invert scale-50 mb-10"
              src={Logo}
              alt="Resourcify logo"/> */}
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
      <AuthPopup showPopup={showAuthPopup} handleClosePopup={handleCloseAuthPopup} />
    </div>
  );
};

export default LandingPage;
