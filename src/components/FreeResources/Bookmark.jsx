import React, { useState } from 'react';
import '../../index.css'; // Import the custom CSS for animations

const Bookmark = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <label className="relative flex justify-center items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        className="hidden"
      />
      <div
        className={`bookmark w-4 h-4 fill-current ${
          checked ? 'text-red-600' : 'text-gray-600 hover:text-gray-700'
        } transition duration-200 ease-in-out`}
      >
        <svg
          viewBox="0 0 16 16"
          className="bi bi-heart-fill items-center"
          height="15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            fillRule="evenodd"
          ></path>
        </svg>
        <div
          className={`absolute rounded-full border border-red-600 opacity-0 ${
            checked ? 'animate-circle' : ''
          }`}
        ></div>
        <div
          className={`absolute rounded-full ${
            checked ? 'animate-circles' : ''
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Bookmark;
