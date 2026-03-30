import React from 'react'
import { ShoppingCart } from 'lucide-react';
function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                        <li>
                           
                            <ul className="p-2">
                                <li><a className='text-[16px] font-semibold'>Products</a></li>
                    <li><a className='text-[16px] font-semibold'>Features</a></li>
                    <li><a className='text-[16px] font-semibold'>Pricing</a></li>
                    <li><a className='text-[16px] font-semibold'>Testimonials</a></li>
                    <li><a className='text-[16px] font-semibold'>FAQ</a></li>
                            </ul>
                        </li>
                       
                    </ul>
                </div>
                <img className='w-32 h-7' src="/public/DigiTools.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='text-[16px] font-semibold'>Products</a></li>
                    <li><a className='text-[16px] font-semibold'>Features</a></li>
                    <li><a className='text-[16px] font-semibold'>Pricing</a></li>
                    <li><a className='text-[16px] font-semibold'>Testimonials</a></li>
                    <li><a className='text-[16px] font-semibold'>FAQ</a></li>
                 
                    
                </ul>
            </div>
            <div className="navbar-end ">

               <div className='flex items-center gap-4'>
                       <ShoppingCart />
                       <a className="font-semibold">Login</a>
                     <a className="hidden md:block text-white rounded-full px-3 py-1.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started</a>
               </div>
            </div>
        </div>
    )
}

export default Navbar