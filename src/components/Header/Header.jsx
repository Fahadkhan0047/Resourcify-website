import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Make sure you have react-router-dom installed and setup
import Avatar from "./Avatar";
import Logo from "../../assets/ResourcifyLogo.png";
import Notification from "../Header/Notification";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [isAuthenticated, setAuthenticated] = useState(false)


  const navigation = [
    { title: "Home", path: "/Home" },
    { title: "Roadmap", path: "/Roadmap" },
    { title: "Resources", path: "/Resources" },
    { title: "About Us", path: "/AboutUs" },
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
    <nav className={`fixed text-white top-0 left-0 right-0 z-50 shadow-inner font-sans ${location.pathname === "/" ? "bg-[#96eeff]" : "bg-white"} shadow-blue-gray-100 md:text-sm ${isMenuOpen ? "shadow-lg rounded-xl border mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
      <div className="gap-x-20 items-center w-full mx-0 px-4 md:flex md:px-8">
        <div className="flex justify-between items-center py-5 w-full md:w-auto">
          <Link to="/">
            <img className="invert scale-75 object-scale-down" src={Logo} width={250} height={50} alt="Resourcify logo" />
          </Link>
          <div className="md:hidden">
            <button className="menu-btn hover:text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 20" fill="black">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`flex-col md:flex-row md:flex items-center w-full md:justify-between ${isMenuOpen ? "top-16 p-8 bg-white h-72 w-full flex" : "hidden"} md:flex`}>
          <ul className={`md:flex md:space-x-6 md:items-center text-black font-medium text-base space-y-6 md:space-y-0 md:ml-0 ml-4 ${isMenuOpen ? "absolute left-0" : ""}`}>
            {navigation.map((item, idx) => (
              item.title === "Resources" ? (
                <li key={idx} className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                  <Link
                    to={item.path}
                    className={`px-2 py-1 rounded transition-all duration-300 flex items-center hover:border-b-2 hover:border-gray-300 ${location.pathname === item.path ? 'border-b-2 border-[#14cbe3]' : ''
                      }`}
                  >
                    {item.title}
                    <svg className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <ul className={`absolute left-0 mt-0  w-48 bg-white border rounded shadow-lg transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <li><Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Subitem 1</Link></li>
                    <li><Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Subitem 2</Link></li>
                    <li><Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Subitem 3</Link></li>
                  </ul>
                </li>
              ) : (
                <li key={idx} className="items-center">
                  <Link
                    to={item.path}
                    className={`px-2 pb-5 transition-all duration-300 hover:border-b-2 hover:border-gray-300 ${location.pathname === item.path ? 'border-b-2 border-[#14cbe3] text-[#14cbe3] font-semibold' : ''
                      }`}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            ))}
          </ul>
          <div className="flex gap-x-6 items-center mt-6 md:mt-0 md:ml-0 ml-4">

            {isAuthenticated ? (
              <>
                <Notification size={25} />
                <Avatar />
              </>
            ) : (
              <>
                <Link to="/login" className="text-black font-medium uppercase block">
                  Log in
                </Link>
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#14cbe3] text-white shadow-inner shadow-[#007c87] hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                  Sign Up
                </button>
              </>
            )}


          </div>
        </div>
      </div>
    </nav >
  );
}

export default Header;
