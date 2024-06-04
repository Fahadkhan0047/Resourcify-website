import React from 'react';
import icon1 from '../assets/companylogo/IBM.png';
import icon2 from '../assets/companylogo/infosys.png';
// ... import all your icons similarly

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white z-50">
      <div className="relative">
        <div className="absolute left-0 flex flex-col space-y-4">
          <img src={icon1} alt="Icon 1" className="h-12 w-12" />
          <img src={icon2} alt="Icon 2" className="h-12 w-12" />
          {/* Add other icons similarly */}
        </div>
        <div className="text-center px-8 py-4">
          <h1 className="text-3xl font-bold mb-4">Connect with 250+ Apps</h1>
          <p className="text-lg text-gray-600">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>
        <div className="absolute right-0 flex flex-col space-y-4">
          <img src={icon1} alt="Icon 1" className="h-12 w-12" />
          <img src={icon2} alt="Icon 2" className="h-12 w-12" />
          {/* Add other icons similarly */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
