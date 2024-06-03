import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function RoadmapCard({title,description}) {
  return (
    <>


      <div className="h-48 w-[500px] bg-white  rounded-xl shadow-lg cursor-pointer hover:shadow-xl duration-300 hover:border-[1px] border-[#14cbe3]">
        <div className="p-4">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-sm mt-4">
          {description}
        </p>
        </div>
        
        <div className="bg-gray-100 h-12 flex items-center mt-8 rounded-b-lg  ">
        <a href="#" className="p-4 text-[#14cbe3] flex items-center gap-3 hover:text-[#5becff]">Start Learning<HiOutlineArrowNarrowRight/></a>
      </div>
      </div>
      
    </>
  );
}

export default RoadmapCard;
