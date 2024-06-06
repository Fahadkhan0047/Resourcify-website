import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Avatar from "./Avatar";
import Logo from "../../assets/ResourcifyLogo.png";
import Notification from "../Header/Notification";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState({});
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({});
  const location = useLocation();
  const [isAuthenticated, setAuthenticated] = useState(false);

  const navigation = [
    { title: "Home", path: "/Home" },
    { title: "Roadmap", path: "/Roadmap" },
    {
      title: "Categories", path: "/Categories", subItems: [
        { title: "CSE", subLinks: [
            { title: "Development", nestedLinks: ["Frontend", "Backend", "Fullstack"] },
            { title: "DSA", nestedLinks: ["Algorithms", "Data Structures"] },
            { title: "Data Science", nestedLinks: ["Machine Learning", "Statistics"] },
          ]
        },
        { title: "ECE", subLinks: [
            { title: "ECE Sub 1", nestedLinks: ["Signal Processing", "VLSI"] },
            { title: "ECE Sub 2", nestedLinks: ["Communications", "Embedded Systems"] },
            { title: "ECE Sub 3", nestedLinks: ["Control Systems", "Robotics"] },
          ]
        },
        { title: "ME", subLinks: [
            { title: "ME Sub 1", nestedLinks: ["Thermodynamics", "Fluid Mechanics"] },
            { title: "ME Sub 2", nestedLinks: ["Mechanics", "Design"] },
            { title: "ME Sub 3", nestedLinks: ["Manufacturing", "Materials"] },
          ]
        },
        { title: "CE", subLinks: [
            { title: "CE Sub 1", nestedLinks: ["Structural", "Geotechnical"] },
            { title: "CE Sub 2", nestedLinks: ["Environmental", "Transportation"] },
            { title: "CE Sub 3", nestedLinks: ["Water Resources", "Construction"] },
          ]
        },
        { title: "EEE", subLinks: [
            { title: "EEE Sub 1", nestedLinks: ["Power Systems", "Control"] },
            { title: "EEE Sub 2", nestedLinks: ["Electronics", "Instrumentation"] },
            { title: "EEE Sub 3", nestedLinks: ["Electrical Machines", "Energy"] },
          ]
        },
        { title: "BCA", subLinks: [
            { title: "BCA Sub 1", nestedLinks: ["Programming", "Database"] },
            { title: "BCA Sub 2", nestedLinks: ["Networks", "Web Development"] },
            { title: "BCA Sub 3", nestedLinks: ["Cyber Security", "Software Engineering"] },
          ]
        },
      ]
    },
    { title: "About Us", path: "/AboutUs" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".menu-btn") && !e.target.closest(".menu-content")) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        setIsSubDropdownOpen({});
        setIsNestedDropdownOpen({});
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (idx) => {
    setIsDropdownOpen(true);
    setIsSubDropdownOpen((prev) => ({ ...prev, [idx]: false }));
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsSubDropdownOpen({});
    setIsNestedDropdownOpen({});
  };

  const handleSubMouseEnter = (subIdx) => {
    setIsSubDropdownOpen((prev) => ({ ...prev, [subIdx]: true }));
  };

  const handleSubMouseLeave = (subIdx) => {
    setIsSubDropdownOpen((prev) => ({ ...prev, [subIdx]: false }));
  };

  const handleNestedMouseEnter = (nestedIdx) => {
    setIsNestedDropdownOpen((prev) => ({ ...prev, [nestedIdx]: true }));
  };

  const handleNestedMouseLeave = (nestedIdx) => {
    setIsNestedDropdownOpen((prev) => ({ ...prev, [nestedIdx]: false }));
  };

  const renderNestedLinks = (nestedLinks, nestedIdx) => (
    <ul className={`absolute left-full top-0 mt-0 w-48 bg-white border rounded shadow-lg transition-all duration-300 ${isNestedDropdownOpen[nestedIdx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
      {nestedLinks.map((link, index) => (
        <li key={index}>
          <Link to="#" className="flex items-center justify-between px-1 py-2 text-gray-800 hover:text-[#14cbe3]">{link}</Link>
        </li>
      ))}
    </ul>
  );

  const renderSubLinks = (subLinks, subIdx) => (
    <ul className={`absolute left-full top-0 mt-0 w-48 bg-white border rounded shadow-lg transition-all duration-300 ${isSubDropdownOpen[subIdx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
      {subLinks.map((subLink, index) => (
        <li key={index} className="relative" onMouseEnter={() => handleNestedMouseEnter(index)} onMouseLeave={() => handleNestedMouseLeave(index)}>
          <Link to="#" className="flex items-center justify-between px-1 py-2 text-gray-800 hover:text-[#14cbe3]">
            {subLink.title}
            {subLink.nestedLinks && <ChevronRightIcon strokeWidth={3} className="h-3 w-5 hover:text-[#14cbe3]" />}
          </Link>
          {subLink.nestedLinks && renderNestedLinks(subLink.nestedLinks, index)}
        </li>
      ))}
    </ul>
  );

  const renderDropdownItems = (item, idx) => (
    <li key={idx} className="relative group" onMouseEnter={() => handleMouseEnter(idx)} onMouseLeave={handleMouseLeave}>
      <Link to={item.path} className={`px-2 py-1 rounded transition-all duration-300 flex items-center hover:border-b-2 hover:border-gray-300 ${location.pathname === item.path ? 'border-b-2 border-[#14cbe3]' : ''}`}>
        {item.title}
        <svg className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <ul className={`absolute left-0 mt-0 w-48 bg-white border rounded shadow-lg transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
        {item.subItems.map((subItem, subIdx) => (
          <li key={subIdx} className="relative" onMouseEnter={() => handleSubMouseEnter(subIdx)} onMouseLeave={() => handleSubMouseLeave(subIdx)}>
            <Link to="#" className="flex items-center justify-between px-1 py-2 text-gray-800 hover:text-[#14cbe3]">
              {subItem.title}
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 hover:text-[#14cbe3]" />
            </Link>
            {renderSubLinks(subItem.subLinks, subIdx)}
          </li>
        ))}
      </ul>
    </li>
  );

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
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z" clipRule="evenodd" />
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
            {navigation.map((item, idx) =>
              item.title === "Categories" ? renderDropdownItems(item, idx) : (
                <li key={idx} className="items-center">
                  <Link to={item.path} className={`px-2 pb-5 transition-all duration-300 hover:border-b-2 hover:border-gray-300 ${location.pathname === item.path ? 'border-b-2 border-[#14cbe3] text-[#14cbe3] font-semibold' : ''}`}>{item.title}</Link>
                </li>
              )
            )}
          </ul>
          <div className="mt-4 flex md:mt-0 md:ml-4 items-center border-gray-300 border-l">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4 pl-4">
                <Notification />
                <Avatar />
              </div>
            ) : (
              <>
                <Link to="/SignIn" className="block text-gray-700 hover:text-[#14cbe3]">Sign In</Link>
                <Link to="/SignUp" className="block px-5 py-2 text-white bg-[#14cbe3] hover:bg-transparent hover:text-[#14cbe3] border border-[#14cbe3] rounded-md transition duration-300">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
