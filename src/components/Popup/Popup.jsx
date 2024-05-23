import React from 'react'
import { X } from 'lucide-react';


function Popup() {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md'>
        <div>
            <button><X /></button>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Popup