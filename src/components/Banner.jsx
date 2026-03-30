import React from 'react'
import { Play } from 'lucide-react';

function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src='../src/assets/banner.png'
      className="max-w-sm rounded-lg shadow-2xl w-[86%]"
    />
    <div className='md:w-1/2 text-center md:text-left'>
    <div className='bg-[#E1E7FF] md:p-2 gap-1  rounded-full w-[60%]  mx-auto md:mx-0 flex items-center md:gap-3'>
      <img   src="../src/assets/Group 5.png" alt="" />
      <p className='font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '>New: AI-Powered Tools Available</p>
    </div>
      <h1 className="text-xl md:text-6xl  font-extrabold md:leading-21">Supercharge Your Digital Workflow</h1>
      <p className="py-6 md:text-[20px] text-[14px] text-[#627382] w-full">
        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

<p>Explore Products</p>
      </p>
      <button className="btn text-white rounded-full px-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
      
    <button className="btn btn-outline rounded-full btn-primary ml-2"> <Play /> Watch Demo</button>
    </div>
  </div>
</div>
  )
}

export default Banner