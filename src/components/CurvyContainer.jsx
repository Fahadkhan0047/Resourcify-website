import React from "react";

const CurvyContainer = () => {
  return (
    <div className="relative bg-blue-100 h-64 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ff5e5e"
          fillOpacity="1"
          d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,197.3C840,203,960,149,1080,122.7C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
      <div className="relative z-10">{/* Your content goes here */}</div>
    </div>
  );
};

export default CurvyContainer;
