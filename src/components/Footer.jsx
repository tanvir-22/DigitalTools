import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className='bg-[#101626] px-20 py-15 pb-2'>

        <div className='text-white grid md:grid-cols-5 grid-cols-1 md:place-items-center'>
            <div>
                <h1 className='text-2xl font-extrabold'>DigiTools</h1>
                <p className='text-[13px] pt-4'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            <div>
                <ul className='hover:cursor-pointer'>
                    <li className='text-xl font-semibold'>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                </ul>
            </div>
            
            <div>
                <ul  className='hover:cursor-pointer'>
                    <li className='text-xl font-semibold'>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>
            
            <div>
                <ul  className='hover:cursor-pointer'>
                    <li className='text-xl font-semibold'>Resources</li>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <div >
                <h1 className='text-xl pb-3'>Social Links</h1>
               <div className='flex'>
                 <FaFacebookSquare className=' w-10 h-10' />
                <FaSquareInstagram  className=' w-10 h-10'/>
                <FaXTwitter className=' w-10 h-10' />
               </div>
            </div>
        </div>
        <div className='mt-9  border-t border-[#fafafa]'></div>
        <div className='text-white flex justify-between md:flex-row flex-col'>
            <div>
                <p>© 2026 Digitools.  All rights reserved.</p>
            </div>
            <div className='flex gap-4 md:flex-row flex-col'>
                <p>Privacy Policy</p>
                <p>Terms of Service  </p>
                <p>Cookies</p>
            </div>
        </div>

    </div>
  )
}

export default Footer