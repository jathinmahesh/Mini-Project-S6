import React from 'react'
import { FaEnvelope, FaFile, FaNewspaper, FaPagelines, FaPager } from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
        {/* Mail */}
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelope/>
                Email for work
            </h3>
            <p className='text-primary/75 text-base mb-4'> Subscribe to our newsletter to get more information about work opportunities</p>
            <div className='w-full space-y-4'>
                <input type="email" name="email" id="email" placeholder='name@mail.com' className='w-full block py-2
                pl-3 border focus:outline-none'/>
                <input type="submit" value={'Subscribe'} className='w-full block py-2
                pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>
        {/* Upload resume */}
        <div className='mt-24'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaFile/>
                Upload resume
            </h3>
            <p className='text-primary/75 text-base mb-4'> If you already have a resume of your own, upload it here</p>
            <div className='w-full space-y-4'>
                <input type="submit" value={'Upload Resume'} className='w-full block py-2
                pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>
    </div>
  )
}

export default Newsletter