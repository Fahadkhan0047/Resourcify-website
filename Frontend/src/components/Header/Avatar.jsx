import React, { useState, useEffect, useRef } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Image from '../../assets/avatar.png'


export default function AvatarDefault() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const [token, setToken] = useState(null);
  
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      // Optionally, you can store the token in localStorage for persistence
      localStorage.setItem('authToken', tokenFromUrl);
    } else {
      // Check if there's a token in localStorage
      const storedToken = localStorage.getItem('authToken');
      const storedToken1 = localStorage.getItem('token');
      if (storedToken || storedToken1) {
        setToken(storedToken);
      }
    }
  }, [location]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    // Clear the token and update the state
    navigate('/Home')
    navigate(0)
    setToken();
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setIsOpen(false); // Close the dropdown when any button is clicked
  };

  return (
    <div className="relative" ref={dropdownContainerRef}>
      <div
        className={`absolute top-0 -left-36 w-48 p-2 mt-16 bg-white text-black rounded-lg shadow-lg transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        ref={dropdownRef}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 cursor-pointer active:scale-95 transition-all duration-300 hover:bg-gray-200 p-2 rounded-2xl">
            <Link to="/YourProfile" className="text-md flex gap-2 items-center" onClick={handleButtonClick}>
              <RxAvatar size={25} />
              Your Profile
            </Link>
          </div>
          <hr className="my-1" />
          <div className="flex items-center gap-2 cursor-pointer text-red-500 active:scale-95 duration-300 hover:bg-gray-200 p-2 rounded-2xl" onClick={handleLogout}>
            <MdLogout size={25} />
            <button className="text-md" >
              Logout
            </button>
          </div>
        </div>
      </div>
      <img
        src={Image}
        alt="avatar"
        onClick={toggleDropdown}
        className="h-11 w-11 rounded-full cursor-pointer" />
    </div>
  );
}
