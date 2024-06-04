import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Logo from "../../assets/ResourcifyLogo.png";
import Notification from "../Header/Notification";
import { IoNotificationsSharp } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigation = [
    { title: "Home", path: "/home" },
    { title: "Roadmap", path: "/roadmap" },
    { title: "Resources", path: "/resources" },
    { title: "About Us", path: "/aboutus" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".menu-btn") &&
        !e.target.closest(".menu-content")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed text-white top-0 left-0 right-0 z-50 shadow-inner bg-white shadow-blue-gray-100 md:text-sm ${
        isMenuOpen
          ? "shadow-lg rounded-xl border mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center w-full mx-0 px-4 md:flex md:px-8">
        <div className="flex-1 items-center justify-between py-5 md:block">
          <a href="/">
            <img
              className="invert scale-125"
              src={Logo}
              width={120}
              height={50}
              alt="Resourcify logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="menu-btn  hover:text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex justify-end pr-4 items-center mt-8 md:mt-0 md:flex ${
            isMenuOpen ? "block" : "hidden"
          } menu-content`}
        >
          <ul className="justify-start items-center md:text-base text-gray-500 space-y-6 md:flex md:space-x-6 md:space-y-0">
      {navigation.map((item, idx) => (
        item.title === "Resources" ? (
          <li 
            key={idx} 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a 
              href={item.path} 
              className="block px-2 py-1 rounded transition-all duration-300 hover:bg-[#e5e7eb] hover:text-[#14cbe3] hover:rounded-3xl flex items-center"
            >
              {item.title}
              <svg 
                className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className={`absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Subitem 1</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Subitem 2</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Subitem 3</a></li>
            </ul>
          </li>
        ) : (
          <li key={idx}>
            <a 
              href={item.path} 
              className="block px-2 py-1 rounded transition-all duration-500 hover:bg-[#e5e7ebcb] hover:text-[#14cbe3] hover:rounded-3xl"
            >
              {item.title}
            </a>
          </li>
        )
      ))}
    </ul>

          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <Notification size={25} />
            <Avatar />
            <a href="/login" className="text-black font-medium uppercase block">
              Log in
            </a>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#14cbe3] text-white  shadow-inner shadow-[#007c87] shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
