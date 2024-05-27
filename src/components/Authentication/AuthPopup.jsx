import React from 'react';
import Authentication from './Authentication';
import { RiEyeCloseFill } from 'react-icons/ri';

const AuthPopup = ({ showPopup, handleClosePopup }) => {
  return (
    <>
      {showPopup && (
        <div className="z-30 fixed inset-0 h-screen flex items-center justify-center backdrop-blur-md bg-opacity-50">
          <div className="bg-transparent w-7/12 md rounded-2xl shadow-xl shadow-gray-400 scale-100">
            <button className="absolute top-0 right-0 m-4 z-50" onClick={handleClosePopup}>
              <RiEyeCloseFill className='hover:scale-125 duration-300' size={25} />
            </button>
            <Authentication />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPopup;
