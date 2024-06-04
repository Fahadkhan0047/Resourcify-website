import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function RoadmapCard({ title, description }) {
  return (
    <>


      <div className="h-48 w-full sm:w-[500px] bg-white rounded-xl shadow-md cursor-pointer hover:shadow-sm hover:shadow-[#6cc1cc] transition-shadow  duration-300 flex flex-col justify-between">
        <div className="p-4">
          <h1 className="font-semibold">{title}</h1>
          <p className="text-sm mt-4">
            {description}
          </p>
        </div>

        <div className="bg-gray-100 h-12 flex items-center rounded-b-xl">
          <a href="#" className="w-full p-4 text-[#14cbe3] hover:translate-x-3 transition-all duration-300 flex items-center gap-3 hover:text-[#3cb1c1]">
            Start Learning <HiOutlineArrowNarrowRight />
          </a>
        </div>
      </div>


    </>
  );
}

export default RoadmapCard;
