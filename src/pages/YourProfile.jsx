import { React, useState } from 'react'
import Avatar from "../components/Header/Avatar";
import Prof from '../assets/avatar.png'


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
        <div className='h-screen'>
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
                    </div></div>
            </div>
            <div className='mx-8 h-40 rounded-md bg-white gray-300'></div>
            <div></div>
            <div></div>


        </div>
    )
}

export default YourProfile