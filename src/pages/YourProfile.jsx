import React from "react";
import logo from "../assets/yt-thumbnails/ytthmb2.jpg";
import CurvyContainer from "../components/CurvyContainer";

const YourProfile = () => {
  return (
    <div className="h-screen">
      <div className="mt-8 mx-8 h-[865px] p-0 flex rounded-2xl bg-white gray-300">
        <div className="bg-blue-gray-300  h-44 w-full rounded-t-2xl grid grid-row-3 gap-0 p-">
          <div>
            <CurvyContainer />
            <div className="bg-blue-gray-300  h-28 w-28 rounded-full absolute top-52 left-96 ">
              <img
                src={logo}
                alt=""
                className="bg-blue-gray-300 h-24 w-24 rounded-full object-cover relative top-2 left-2 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
