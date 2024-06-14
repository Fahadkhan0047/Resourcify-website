import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { useNavigate } from "react-router-dom";

function FullStack() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-hidden w-full bg-[#edf6f9] pl-0 md:pt-16 lg:pl-72">
      <div className="mx-4 md:mx-8 mt-6">
        <h1 className="text-2xl font-bold text-gray-900 half-underline sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">
          Full Stack Roadmap
        </h1>
        <p className="text-sm mt-4">
          Well-structured and strategically planned roadmaps, designed to guide
          you in your learning journey. Making consistent progress on your
          learning path every day will significantly enhance your chances of
          becoming a great developer.
        </p>
      </div>
      <div className="mx-5 my-8" style={{ width: "100vw", height: "400px" }}>
        <ReactFlow style={{ width: "100%", height: "100%" }}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default FullStack;
