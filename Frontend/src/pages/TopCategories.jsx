import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img2 from "../assets/img2.png";
import img from "../assets/img.webp";
import img3 from "../assets/img3.jpg";


const TopCategories = () => {

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
        <>
            <h1 className="text-2xl mb-8 font-bold text-gray-900 half-underline sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">
                Top Categories
            </h1>
            <div className="w-auto lg:w-auto">
                <button
                    className="sm:hidden absolute left-0 z-10 px-4 py-2 mt-36 text-white bg-gray-900 rounded-full outline-none ring-2 ring-offset-1 ring-gray-900"
                    onClick={() => scrollCards('left')}
                >
                    <FaChevronLeft />
                </button>

                <button
                    className="sm:hidden absolute right-0 z-10 px-4 py-2 mt-36 text-white bg-gray-900 rounded-full focus:outline-none ring-2 ring-offset-1 ring-gray-900"
                    onClick={() => scrollCards('right')}
                >
                    <FaChevronRight />
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
        </>
    )
}

export default TopCategories