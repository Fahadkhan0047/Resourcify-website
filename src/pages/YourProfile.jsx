import React from 'react'
import Avatar from "../components/Header/Avatar";


const YourProfile = () => {
  return (
    <div className='h-screen'>
        <div className='mt-8 mx-8 h-40 p-2 flex rounded-md bg-white gray-300'>
        <div style={{ height: '400px', width: '400' }}><Avatar /></div>
            <div className='grid grid-row-3 gap-0 p-'>
            <div><h1 className='pl-6 font-semibold text-2xl'>Miran Ahmad</h1></div>
            <div><h1 className='pl-6 font-semibold text-2xl'>Miran Ahmad</h1></div>
            <div><h1 className='pl-6 font-semibold text-2xl'>Miran Ahmad</h1></div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 '>
        <div className='my-8 ml-8 h-40 rounded-md bg-white gray-300'></div>
        <div className='my-8 mr-8 h-40 rounded-md bg-white gray-300'></div>
        </div>
        <div className='mx-8 h-40 rounded-md bg-white gray-300'></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default YourProfile
