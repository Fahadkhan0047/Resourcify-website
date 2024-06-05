import React from 'react'
import VantaNet from '../components/Backgrounds/VantaNet';
import Fahad from '../assets/aboutus/Fahad.jpg';

const AboutUs = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-transparent font-sans'>
      <VantaNet />
      <div className="flex flex-col items-center py-8">
        <h2 className="text-2xl font-bold mb-8 half-underline">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-6xl">
          <div className='flex flex-row items-center'>
            <div className="flex flex-col">
              <div className="sm:w-48 sm:h-64 w-40 h-56 flex items-end justify-center mb-4 bg-orange-500 rounded-tl-full shadow-lg text-white font-bold text-xl bg-cover" style={{backgroundImage: `url(${Fahad})` }}>
                <h1>FAHAD KHAN</h1>
              </div>
              <div className="sm:w-48 sm:h-64 w-40 h-56 flex items-start justify-center bg-orange-500 rounded-bl-full shadow-lg text-white font-bold text-xl" >
                AQUIB IQBAL
              </div>
            </div>
            <div className="sm:w-48 sm:h-64 w-40 h-56 flex items-end justify-center ml-4 bg-orange-500 rounded-tr-full shadow-lg text-white font-bold text-xl">
              MIRAN AHMAD
            </div>

          </div>



          {/* <div className="items-center relative w-full">
            <div className="w-48 h-64 mb-4 bg-orange-500 rounded-lg absolute right-0 text-white font-bold text-xl">
              HOD
            </div>
            <div className="w-48 h-64 mb-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              IT Manager
            </div>
            <div className="w-48 h-64 bg-orange-500 rounded-lg left-0 text-white font-bold text-xl">
              CEO
            </div>
          </div> */}


          <div className="lg:ml-8 mt-8 lg:mt-0 w-full lg:w-1/2 space-y-8">
            <div className='bg-white p-6 rounded-lg shadow-lg sm:mx-0 mx-3 hover:shadow-sm cursor-default hover:shadow-[#6cc1cc] transition-shadow  duration-300'>
              <h3 className="text-xl font-semibold mb-4">Who We are..?</h3>
              <p className="text-gray-700">
                This is why your About Us page is one of the most important pages on your site. It’s also
                a representation of your brand identity. After reading your About Us page, the visitor
                will fully understand your brand values, mission statement, added value, and unique
                selling points.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg sm:mx-0 mx-3 hover:shadow-sm cursor-default hover:shadow-[#6cc1cc] transition-shadow  duration-300'>
              <h3 className="text-xl font-semibold mb-4">What We Do..?</h3>
              <p className="text-gray-700">
                This is why your About Us page is one of the most important pages on your site. It’s also
                a representation of your brand identity. After reading your About Us page, the visitor
                will fully understand your brand values, mission statement, added value, and unique
                selling points.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg sm:mx-0 mx-3 hover:shadow-sm cursor-default hover:shadow-[#6cc1cc] transition-shadow  duration-300'>
              <h3 className="text-xl font-semibold mb-4">What You Can Expect..?</h3>
              <p className="text-gray-700">
                This is why your About Us page is one of the most important pages on your site. It’s also
                a representation of your brand identity. After reading your About Us page, the visitor
                will fully understand your brand values, mission statement, added value, and unique
                selling points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs