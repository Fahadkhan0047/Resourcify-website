import React from 'react'
// import HeroSection from '../components/HeroSection/HeroSection'
import HeroSectionMain from '../components/HeroSection/HeroSectionMain'


function Home() {
  return (
    <>
    {/* <HeroSection/> */}
    <HeroSectionMain/>

    <div className='mx-10 pt-16'>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">TOP CATEGORIES</h1>
    </div>
    <div className='grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  gap-2 mx-10 pt-10'>
      
        <div>
          {/* image */}
          <div className='md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md'>

          </div>

          {/* title */}
          <div>
            <p>title lorem ipsum</p>
          </div>
        </div>
        <div>
          {/* image */}
          <div className='md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md'>

          </div>

          {/* title */}
          <div>
            <p>title lorem ipsum</p>
          </div>
        </div>
        <div>
          {/* image */}
          <div className='md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md'>

          </div>

          {/* title */}
          <div>
            <p>title lorem ipsum</p>
          </div>
        </div>
        <div>
          {/* image */}
          <div className='md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md'>

          </div>

          {/* title */}
          <div>
            <p>title lorem ipsum</p>
          </div>
        </div>
        


    </div>
    </>
  )
}

export default Home