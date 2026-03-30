import React from 'react'

function Transform() {
  return (
    <div className='mt-10 space-y-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-21 text-center text-white'>
        <div >
            <h1 className='font-extrabold text-5xl'>Ready to Transform Your Workflow?</h1>
            <p className='pt-3 '>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
        </div>
        <div>
        <button className="btn rounded-full  px-3 bg-white text-[#8225fa]">Explore Products</button>
    <button className="btn btn-outline rounded-full btn-default ml-2"> View Pricing</button>
             
        </div>
       
    </div>
  )
}

export default Transform