import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo}  className='mb-5 ' width={65} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Established in 2007 in Mumbai, Maharashtra, "Search Bag" is a sole proprietorship specializing in manufacturing and wholesaling Messenger Bags, Boys Backpacks, and more. Known for premium quality and affordability, we ensure timely delivery, earning a large client base.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <Link to={'/'}>   <li  className='cursor-pointer' >Home</li> </Link>
              
              <Link to='/about'>  <li  className='cursor-pointer'  >About us</li> </Link>
               
                <Link><li to='/contact' className='cursor-pointer'>Contact</li> </Link> 
                <Link to={'collection'}>  <li  className='cursor-pointer' >Collection</li></Link>
                
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                {/* <li>+1-212-456-7890</li> */}
                <a href="https://wa.me/918828081163" target="_blank" rel="noopener noreferrer" className=" font-white-400  font-semibold hover:underline mt-4 md:mt-0">Let's Connect on WhatsApp</a>
                <a href="tel:+91 88280 81163 ">+91 88280 81163</a>
                <div class="mb-3 flex gap-2 text-sm hover:underline"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                <rect width="20" height="18" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                  </path></svg><a href="mailto:searchbags@gmail.com">searchbags@gmail.com</a></div>

            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ searchbag.in - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
