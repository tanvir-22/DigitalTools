import React from 'react'

function Pricing() {
  return (
     <div className='mt-15  w-11/12 mx-auto pb-3'>
        <div className='text-center'>
            <h1 className='text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382] pt-3 text-[16px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

    <div className='grid md:grid-cols-3 grid-cols-1 gap-3 place-items-center pt-4'>
   <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    
    <div className="flex flex-col justify-between">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p className='text-[#627382]'>Perfect for getting started</p>
      <p className="text-xl mt-3"><span className='font-extrabold text-3xl'>$0</span>/month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-[1.2em] text-[#627382]">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
     
    </ul>
    <div className="mt-6">
        <button className="btn text-white rounded-full w-full px-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started Free</button>
    </div>
  </div>
</div>



  <div className="card w-96 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-xl">
  <div className="card-body relative">
        <span className="badge badge-md badge-warning absolute -top-3 left-[35%]">Most Popular</span>
    <div className="flex flex-col justify-between">
      <h2 className="text-3xl font-bold">Pro</h2>
      <p className='text-white'>Best for professionals</p>
      <p className="text-xl mt-3"><span className='font-extrabold text-3xl'>$29</span>/month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-[1.2em] text-white">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
     
    </ul>
    <div className="mt-6">
        <button className="btn rounded-full w-full px-3 bg-white text-[#8225fa]">Get Started Free</button>
    </div>
  </div>
</div>







  <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    
    <div className="flex flex-col justify-between">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p className='text-[#627382]'>Perfect for getting started</p>
      <p className="text-xl mt-3"><span className='font-extrabold text-3xl'>$29</span>/month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-[1.2em] text-[#627382]">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
     
    </ul>
    <div className="mt-6">
        <button className="btn text-white rounded-full w-full px-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started Free</button>
    </div>
  </div>
</div>
    </div>

    </div>
  )
}

export default Pricing