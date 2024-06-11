import { React, useState } from 'react'
import Avatar from "../components/Header/Avatar";
import Prof from '../assets/avatar.png'
import { MdLogout } from "react-icons/md";


const YourProfile = () => {
    const [aboutText, setAboutText] = useState("Write something about yourself...");
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setAboutText(e.target.value);
    };
    return (
        <div className='h-screen w-full bg-[#edf6f9] pl-0 md:pt-16 lg:pl-72'>
            <div className=' flex justify-center mt-8 mx-8 h-40 p-2 rounded-md bg-gradient-to-r from-yellow-200 to-purple-200'>
                <div className="translate-y-20 border-4 border-blue-gray-300 sm:absolute sm:top-24 sm:left-[360px] h-32 w-32 rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={Prof} alt="" />
                </div>
            </div>
            <div className='sm:mt-8 mt-16 items-center sm:grid sm:grid-cols-2 '>
                <div className='sm:my-8 sm:ml-8 sm:h-40 mx-8 rounded-md p-4 bg-white gray-300'>
                    <p className='sm:text-left text-center text-gray-600 pb-2 text-3xl'>Miran Ahmad</p>
                    <p className='sm:text-left text-center text-gray-500 font-medium'>CSE  <span className='px-2'> | </span><span> Semester 6</span></p>

                </div>
                <div className='sm:my-8 sm:mr-8 m-8 h-40 rounded-md bg-white gray-300'>
                    <div className="container mx-auto p-4 w-full h-full bg-white shadow-md rounded-lg">
                        <h1 className="text-gray-600 text-lg mb-2">About Me</h1>
                        {isEditing ? (
                            <div>
                                <textarea
                                    className="w-full p-2 border rounded mb-4"
                                    rows="4"
                                    value={aboutText}
                                    onChange={handleChange}
                                ></textarea>
                                <button
                                    className="px-2 py-2 bg-[#14cbe3] text-white rounded hover:bg-[#14cbe3]"
                                    onClick={handleSaveClick}
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p className="mb-4">{aboutText}</p>
                                <button
                                    className="px-4 py-2 bg-[#14cbe3] text-white rounded hover:bg-[#14cbe3]"
                                    onClick={handleEditClick}
                                >
                                    Edit
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='mx-8 p-4 h-40 rounded-md bg-white gray-300'>
                <h1 className='text-lg '>Bookmark</h1>
            </div>
            <div className='flex justify-center mt-8'>
                <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative flex items-center w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        <MdLogout size={22} className="mr-2" />
                        LogOut
                    </span>
                </a>
            </div>



        </div>
    )
}

export default YourProfile