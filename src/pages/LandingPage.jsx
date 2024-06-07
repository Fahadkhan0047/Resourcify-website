import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation from react-router-dom
import { RiEyeCloseFill } from "react-icons/ri";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Logo from '../assets/ResourcifyLogo.png';
import VantaGlobe from '../components/Backgrounds/VantaGlobe';
import Login from '../components/Authentication/Login';

const LandingPage = () => {
  const words = [
    { text: "Learn," },
    { text: "Connect" },
    { text: "and" },
    { text: "Thrive" },
    { text: "with" },
    { text: "Resourcify.", className: "text-[#ffffff] drop-shadow-[0_3px_01px_rgba(1,1,1,1)]" },
  ];

  const location = useLocation(); // Get the location object
  const navigate = useNavigate(); // Get the navigate function

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSignUpClick = () => {
    navigate('/Signup'); // Navigate to the signup page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <VantaGlobe/>
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <p className="text-neutral-600 font-semibold text-sm sm:text-base">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button
            className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
            onClick={handleLoginClick} // Corrected onClick
          >
            LogIn
          </button>
          <button
            className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
            onClick={handleSignUpClick} // Corrected onClick
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
