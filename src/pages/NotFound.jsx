import React from "react";
import blob from "../assets/blob.svg";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div
        className="p-10 m-7 rounded-3xl sm:p-44 md:m-7 bg-no-repeat"
        style={{ backgroundImage: `url(${blob})` }}
      >
        <h1 className="text-6xl">Error 404:</h1>
        <h3 className="text-3xl pt-2"> Page not found</h3>
        <h4 className="text-1xl pt-4">
          The page you are looking for is either broken or does not exist.
        </h4>
      </div>
    </div>
  );
};

export default NotFound;
