import React from 'react'
import user from '../assets/user.png'
import pack from '../assets/package.png'
import rocket from '../assets/rocket.png'

function Start() {
  return (
    <div className='my-20  w-11/12 mx-auto'>
        <div className='text-center'>
            <h1 className='text-5xl font-extrabold'>Get Started in 3 Steps</h1>
            <p className='text-[#627382] pt-3 text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
        </div>

    <div className='mt-8 grid md:grid-cols-3 grid-cols-1 gap-3 place-items-center'>
   <div className='w-90 px-10 py-15 shadow-2xl flex flex-col space-y-2 justify-center items-center'>
         
             <img className=' bg-[#f4e8ff] rounded-md flex items-center justify-center p-4' src={user} alt="" />
         
            <h2 className='text-xl font-extrabold'>Create Account</h2>
            <p className='text-center text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
         <div className='w-90 px-10 py-15 shadow-2xl flex flex-col space-y-2 justify-center items-center'>
         
             <img className=' bg-[#f4e8ff] rounded-md flex items-center justify-center p-4' src={pack} alt="" />
         
            <h2 className='text-xl font-extrabold'>Choose Products</h2>
            <p className='text-center text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
        </div>
         <div className='w-90 px-10 py-15 shadow-2xl flex flex-col space-y-2 justify-center items-center'>
         
             <img className=' bg-[#f4e8ff] rounded-md flex items-center justify-center p-4' src={rocket} alt="" />
         
            <h2 className='text-xl font-extrabold'>Start Creating</h2>
            <p className='text-center text-[#627382]'>Download and start using your premium tools immediately.</p>
        </div>
    </div>

    </div>
  )
}

export default Start