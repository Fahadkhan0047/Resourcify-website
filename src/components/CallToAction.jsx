import React from 'react';

const CallToAction = () => {
  return (
    <div className="flex h-60 items-center justify-center p-8 bg-gradient-to-b from-[#edf6f9] to-[#14cbe3]  shadow-md rounded-sm">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-white mb-2">✨Learn, Connect and Thrive with Resourcify.</h2>
        <p className="text-xl text-gray-50 mb-4">The Road to Freedom starts from here.</p>
        <button className="w-40 h-10 rounded-xl bg-[#46c6d7] shadow-md shadow-[#edf6f9] border dark:border-white border-transparent text-white text-sm">
          Let's Thrive
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
