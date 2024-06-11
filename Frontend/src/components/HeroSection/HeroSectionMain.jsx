import React, { useState, useRef } from "react";
import img2 from "../../assets/img2.png";
import img from "../../assets/img.webp";
import img3 from "../../assets/img3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const HeroSectionMain = () => {
  const containerRef = useRef(null);

  const scrollCards = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 400;
      const currentScroll = containerRef.current.scrollLeft;
      const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      containerRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="relative py-12 overflow-hidden bg-[#edf6f9] sm:py-16 lg:py-20 xl:py-18">
        <div className="px-4 sm:px-6 lg:px-10 max-w-screen">
          <div className="flex flex-col justify-center">
            <div className="max-w-sm text-center xl:max-w-screen lg:mx-0 lg:text-left md:text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:leading-tight xl:text-5xl">
                Collect Best ✨ Resources all over the Internet.
              </h1>
              <p className="mt-5 text-sm font-medium text-gray-900 lg:mt-8">
                Buy & sell NFTs from world’s top artist
              </p>
              <div className="mt-8 lg:mt-10">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                  role="button"
                >
                  Explore all Resources
                </a>
              </div>
              <div className="mt-8 lg:mt-12">
                <svg
                  className="w-auto h-4 mx-auto text-gray-300 lg:mx-0"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  ></line>
                </svg>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-[450px] lg:top-1/2 w-auto lg:w-auto">
            <button
                className="sm:hidden absolute left-0 z-10 px-4 py-2 mt-36 text-white bg-gray-900 rounded-full outline-none ring-2 ring-offset-1 ring-gray-900"
                onClick={() => scrollCards('left')}
              >
                <FaChevronLeft/>
              </button>
             
              <button
                className="sm:hidden absolute right-0 z-10 px-4 py-2 mt-36 text-white bg-gray-900 rounded-full focus:outline-none ring-2 ring-offset-1 ring-gray-900"
                onClick={() => scrollCards('right')}
              >
                <FaChevronRight/>
              </button>
              <div ref={containerRef} className="relative w-full overflow-x-auto lg:overflow-visible">
                <div className="flex gap-4 flex-nowrap w-full lg:w-auto">
                  <div className="flex-none w-full sm:w-1/3 lg:w-1/3">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <img
                          className="object-cover w-full h-48"
                          src={img}
                          alt="Next.js"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-lg font-bold text-gray-900">Next.js</p>
                        <p className="mt-4 text-xs font-medium tracking-widest text-gray-500 uppercase">
                          Reserved Price
                        </p>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">2.00 ETH</p>
                        </div>
                        <div className="grid grid-cols-2 mt-4 gap-x-2">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                            role="button"
                          >
                            Learn
                          </a>
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-none w-full sm:w-1/3 lg:w-1/3">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <img
                          className="object-cover w-full h-48"
                          src={img2}
                          alt="Jenny-Retro Art"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-lg font-bold text-gray-900">
                          Jenny-Retro Art
                        </p>
                        <p className="mt-4 text-xs font-medium tracking-widest text-gray-500 uppercase">
                          Reserved Price
                        </p>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">1.67 ETH</p>
                          <p className="ml-2 text-sm font-medium text-gray-500">
                            ($7,627)
                          </p>
                        </div>
                        <div className="grid grid-cols-2 mt-4 gap-x-2">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                            role="button"
                          >
                            Learn
                          </a>
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-none w-full sm:w-1/3 lg:w-1/3">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <img
                          className="object-cover w-full h-48"
                          src={img3}
                          alt="Node.js"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-lg font-bold text-gray-900">Node.js</p>
                        <p className="mt-4 text-xs font-medium tracking-widest text-gray-500 uppercase">
                          Reserved Price
                        </p>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">2.40 ETH</p>
                        </div>
                        <div className="grid grid-cols-2 mt-4 gap-x-2">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                            role="button"
                          >
                            Learn
                          </a>
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionMain;
