import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "@material-tailwind/react";
import { RxAvatar } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AvatarDefault() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownContainerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
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
        className={`absolute top-0 left-0 w-48 p-2 mt-16 bg-white text-black rounded-lg shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
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
          <div className="flex items-center gap-2 cursor-pointer text-red-500 active:scale-95 duration-300 hover:bg-gray-200 p-2 rounded-2xl">
            <MdLogout size={25} />
            <button className="text-md" onClick={handleButtonClick}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        onClick={toggleDropdown}
        className="cursor-pointer"
      />
    </div>
  );
}
